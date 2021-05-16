import React, { useState, useEffect } from "react";
import "./to-do-item.css";
import { Button } from "react-bootstrap";
import classnames from "classnames";

export function ToDoItem({
  item: { isCompleted, text, completedOn, createdOn },
  index,
  onCompleteItem,
  onDeleteItem,
  onEditItem,
}) {
  const [isEditing, setIsEditng] = useState(false);
  const [formValue, setFormValue] = useState();

  const handleSubmit = () => {
    onEditItem(index, formValue);
    setIsEditng(false);
  };

  useEffect(() => {
    setFormValue(text);
  }, [text]);

  return (
    <div className="todo-item">
      <div className="todo-item__text">
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="todo-item__text-input"
              value={formValue}
              onChange={({ target: { value } }) => setFormValue(value)}
            ></input>
          </form>
        ) : (
          <h3
            className={classnames("todo-item__title", {
              "todo-item__title--completed": isCompleted,
            })}
          >
            {text}
          </h3>
        )}
        <span className="todo-item__date">
          {`Início: ${createdOn.toLocaleString()}${
            completedOn ? ` | Fim: ${completedOn.toLocaleString()}` : ""
          }`}
        </span>
      </div>
      <div>
        {!isCompleted && (
          <Button
            className="todo-item__button"
            variant="outline-warning"
            onClick={() => setIsEditng(true)}
          >
            Editar
          </Button>
        )}
        <Button
          className="todo-item__button"
          variant="outline-success"
          onClick={() => !isEditing && onCompleteItem(index)}
        >
          {isCompleted ? "↩︎" : "✓"}
        </Button>
        <Button
          className="todo-item__button"
          variant="outline-danger"
          onClick={() => !isEditing && onDeleteItem(index)}
        >
          ✕
        </Button>
      </div>
    </div>
  );
}
