import { ToDo } from "../to-do";
import { ToDoForm } from "../to-do-form";
import { ToDoItem } from "../to-do-item";
import { shallow } from "enzyme";

describe("ToDO", () => {
  const onFormSubmitMock = jest.fn();
  const onFormChangeMock = jest.fn();
  const onCompleteItemMock = jest.fn();
  const onDeleteItemMock = jest.fn();
  const onEditItemMock = jest.fn();

  const formValueMock = "teste";
  const toDoListMock = [
    {
      text: "foo",
      isCompleted: false,
      completedOn: null,
      createdOn: new Date("2021-05-15T19:15:17.003Z"),
    },
    {
      text: "bar",
      isCompleted: true,
      completedOn: new Date("2021-05-15T20:15:17.003Z"),
      createdOn: new Date("2021-05-15T19:15:17.003Z"),
    },
  ];

  const component = shallow(
    <ToDo
      onFormSubmit={onFormSubmitMock}
      formValue={formValueMock}
      onFormChange={onFormChangeMock}
      toDoList={toDoListMock}
      onCompleteItem={onCompleteItemMock}
      onDeleteItem={onDeleteItemMock}
      onEditItem={onEditItemMock}
    />
  );
  it("it should render title and subtitle", () => {
    const title = component.find(".todo__title").get(0);
    expect(title).not.toBeUndefined();
    expect(title.props.children).toBe("Olá!");

    const subtitle = component.find(".todo__subtitle").get(0);
    expect(subtitle).not.toBeUndefined();
    expect(subtitle.props.children).toBe("Quais são as suas tarefas de hoje?");
  });

  it("it should render ToDoForm with correct props", () => {
    const toDoForm = component.find(ToDoForm).get(0);
    expect(toDoForm).not.toBeUndefined();
    expect(toDoForm.props).toStrictEqual({
      onChange: onFormChangeMock,
      onSubmit: onFormSubmitMock,
      value: formValueMock,
    });
  });

  it("it should render each ToDoItem with correct props", () => {
    const toDoItems = component.find(ToDoItem);

    expect(toDoItems.length).toBe(toDoListMock.length);
    expect(toDoItems.get(0).props).toStrictEqual({
      index: 0,
      item: {
        completedOn: null,
        createdOn: new Date("2021-05-15T19:15:17.003Z"),
        isCompleted: false,
        text: "foo",
      },
      onCompleteItem: onCompleteItemMock,
      onDeleteItem: onDeleteItemMock,
      onEditItem: onEditItemMock,
    });
    expect(toDoItems.get(1).props).toStrictEqual({
      index: 1,
      item: {
        completedOn: new Date("2021-05-15T20:15:17.003Z"),
        createdOn: new Date("2021-05-15T19:15:17.003Z"),
        isCompleted: true,
        text: "bar",
      },
      onCompleteItem: onCompleteItemMock,
      onDeleteItem: onDeleteItemMock,
      onEditItem: onEditItemMock,
    });
  });
});
