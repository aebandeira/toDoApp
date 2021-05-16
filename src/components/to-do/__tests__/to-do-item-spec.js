import { ToDoItem } from "../to-do-item";
import { shallow } from "enzyme";

describe("ToDoItem", () => {
  const completeItemMock = jest.fn();
  const deleteItemMock = jest.fn();
  const editItemMock = jest.fn();
  const defaultItemMock = {
    text: "foo",
    isCompleted: false,
    completedOn: null,
    createdOn: new Date("2021-05-15T19:15:17.003Z"),
  };

  const component = shallow(
    <ToDoItem
      onCompleteItem={completeItemMock}
      onDeleteItem={deleteItemMock}
      onEditItem={editItemMock}
      index={0}
      key={0}
      item={defaultItemMock}
    />
  );

  it("it should show a text and the date it was created on", () => {
    const toDoItem = component.find(".todo-item__title").get(0);
    const toDoItemDate = component.find(".todo-item__date").get(0);
    const completeButteon = component
      .find('[variant="outline-success"]')
      .get(0);
    const editButton = component.find('[variant="outline-warning"]').get(0);
    const deleteButton = component.find('[variant="outline-danger"]').get(0);

    expect(toDoItem.props.className).toBe("todo-item__title");
    expect(toDoItem.props.children).toBe(defaultItemMock.text);
    expect(toDoItemDate.props.children).toBe(
      `Início: ${defaultItemMock.createdOn.toLocaleString()}`
    );
    expect(completeButteon).not.toBeUndefined();
    expect(editButton).not.toBeUndefined();
    expect(deleteButton).not.toBeUndefined();
  });

  describe("When a task is completed", () => {
    it("it should call onCompleteItem prop", () => {
      component.find('[variant="outline-success"]').simulate("click");
      expect(completeItemMock).toBeCalledWith(0);
    });
  });

  describe("When a task is deleted", () => {
    it("it should call onDeleteItem prop", () => {
      component.find('[variant="outline-danger"]').simulate("click");
      expect(deleteItemMock).toBeCalledWith(0);
    });
  });

  describe("When a task is editing", () => {
    const component = shallow(
      <ToDoItem
        onCompleteItem={completeItemMock}
        onDeleteItem={deleteItemMock}
        onEditItem={editItemMock}
        index={0}
        key={0}
        item={defaultItemMock}
      />
    );

    component.find('[variant="outline-warning"]').simulate("click");
    const editionForm = component.find("form");

    it("it should show the edition form", () => {
      expect(editionForm.get(0)).not.toBeUndefined();
    });

    it("it should call onEditItem prop after the edition is done", () => {
      const event = {
        preventDefault() {},
        target: { value: "bar" },
      };
      component.find(".todo-item__text-input").simulate("change", event);
      expect(component.find(".todo-item__text-input").props().value).toBe(
        "bar"
      );

      editionForm.simulate("submit");
      expect(editItemMock).toHaveBeenCalled();
    });
  });

  describe("When a task is complete", () => {
    const itemMock = {
      ...defaultItemMock,
      isCompleted: true,
      completedOn: new Date("2021-05-15T20:15:17.003Z"),
    };

    const component = shallow(
      <ToDoItem
        onCompleteItem={completeItemMock}
        onDeleteItem={deleteItemMock}
        onEditItem={editItemMock}
        index={0}
        key={0}
        item={itemMock}
      />
    );

    it("it should be crossed off", () => {
      const toDoItem = component.find(".todo-item__title").get(0);
      expect(toDoItem.props.className).toBe(
        "todo-item__title todo-item__title--completed"
      );
    });

    it("it should show when it was completed on", () => {
      const toDoItemDate = component.find(".todo-item__date").get(0);
      expect(toDoItemDate.props.children).toBe(
        `Início: ${itemMock.createdOn.toLocaleString()} | Fim: ${itemMock.completedOn.toLocaleString()}`
      );
    });

    it("it shoud only show the complete and delete buttons", () => {
      const completeButteon = component
        .find('[variant="outline-success"]')
        .get(0);
      const editButton = component.find('[variant="outline-warning"]').get(0);
      const deleteButton = component.find('[variant="outline-danger"]').get(0);

      expect(completeButteon).not.toBeUndefined();
      expect(editButton).toBeUndefined();
      expect(deleteButton).not.toBeUndefined();
    });
  });
});
