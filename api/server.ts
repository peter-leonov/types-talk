import { Handler } from "express";
import { Todo } from "./todo";

export const getTodo: Handler<Todo> = (req, res) => {
  res.send({
    id: req.params.id,
    title: "Types Help",
    done: true
  });
};
