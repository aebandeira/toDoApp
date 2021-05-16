import React from "react";
import { Form, Button } from "react-bootstrap";

import "./to-do-form.css";

export function ToDoForm({ onSubmit, value, onChange }) {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={onChange}
          placeholder="Descreva sua nova tarefa"
          autoFocus
        />
        <Button variant="primary mb-3" type="submit" className="button-form">
          Adicionar
        </Button>
      </Form.Group>
    </Form>
  );
}
