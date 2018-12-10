import { Handler } from "express";
import { Todo } from "./todo";

export const getTodo: Handler<Todo> = (req, res) => {
  res.send({
    id: req.params.id,
    title: "Add done property"
  });
};

// delete this
export const getTodoEx: Handler<Todo> = (req, res) => {
  res.send({
    id: req.params.id,
    title: "Remove me safely"
  });
};
