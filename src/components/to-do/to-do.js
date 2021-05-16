import { Fragment } from "react";
import { Card } from "react-bootstrap";

import { ToDoForm } from "./to-do-form";
import { ToDoItem } from "./to-do-item";

import "bootstrap/dist/css/bootstrap.min.css";
import "./to-do.css";

export function ToDo({
  onFormSubmit,
  formValue,
  onFormChange,
  toDoList,
  onCompleteItem,
  onDeleteItem,
  onEditItem,
}) {
  return (
    <Fragment>
      <h1 className="title">Olá!</h1>
      <h2 className="subtitle">Quais são as suas tarefas de hoje?</h2>
      <ToDoForm
        onSubmit={onFormSubmit}
        value={formValue}
        onChange={onFormChange}
      />
      <div>
        {toDoList.map((item, index) => (
          <Card>
            <Card.Body>
              <ToDoItem
                key={index}
                index={index}
                item={item}
                onCompleteItem={onCompleteItem}
                onDeleteItem={onDeleteItem}
                onEditItem={onEditItem}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </Fragment>
  );
}
