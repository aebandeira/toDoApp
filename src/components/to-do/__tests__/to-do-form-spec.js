import { ToDoForm } from "../to-do-form";
import { Form } from "react-bootstrap";
import { shallow } from "enzyme";

describe("ToDoForm", () => {
  const onChangeMock = jest.fn();
  const onSubmitMock = jest.fn();
  const event = {
    preventDefault() {},
    target: { value: "foo" },
  };
  const component = shallow(
    <ToDoForm onChange={onChangeMock} value="" onSubmit={onSubmitMock} />
  );
  describe("When value changes", () => {
    it("it should call onChange prop", () => {
      component.find(".input").simulate("change", event);
      expect(onChangeMock).toBeCalledWith(event);
    });
  });

  describe("When the form is submitted", () => {
    it("it should call onSubmit prop", () => {
      component.find(Form).simulate("submit");
      expect(onSubmitMock).toBeCalledTimes(1);
    });
  });
});
