import React, { useState } from "react";
import "./App.css";

import { ToDo } from "./components";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [formValue, setFormValue] = useState("");

  const orderToDoList = (toDos) => {
    const completed = toDos.filter((x) => x.isCompleted);
    const incompleted = toDos.filter((x) => !x.isCompleted);

    const completedOrdered = completed.sort(
      (a, b) => b.completedOn.getTime() - a.completedOn.getTime()
    );
    const incompletedOrdered = incompleted.sort(
      (a, b) => b.createdOn.getTime() - a.createdOn.getTime()
    );

    return [...incompletedOrdered, ...completedOrdered];
  };

  const addItem = (text) => {
    const newToDoList = [...toDoList, { text, createdOn: new Date() }];
    setToDoList(orderToDoList(newToDoList));
  };

  const handleCompleteItem = (index) => {
    const newToDoList = [...toDoList];
    newToDoList[index].isCompleted = !newToDoList[index].isCompleted;
    if (newToDoList[index].isCompleted) {
      newToDoList[index].completedOn = new Date();
    } else {
      newToDoList[index].completedOn = null;
    }
    setToDoList(orderToDoList(newToDoList));
  };

  const handleEditItem = (index, text) => {
    const newToDoList = [...toDoList];
    newToDoList[index].text = text;
    setToDoList(newToDoList);
  };

  const handleDeleteItem = (index) => {
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDoList(orderToDoList(newToDoList));
  };

  const handleToDoFormSubmit = (e) => {
    e.preventDefault();
    if (!formValue) return;
    addItem(formValue);
    setFormValue("");
  };

  const handleToDoFormChange = ({ target: { value } }) => setFormValue(value);

  return (
    <div className="app">
      <div className="container">
        <ToDo
          onFormSubmit={handleToDoFormSubmit}
          formValue={formValue}
          onFormChange={handleToDoFormChange}
          toDoList={toDoList}
          onCompleteItem={handleCompleteItem}
          onDeleteItem={handleDeleteItem}
          onEditItem={handleEditItem}
        />
      </div>
    </div>
  );
}

export default App;
