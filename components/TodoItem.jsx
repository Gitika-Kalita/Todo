import react, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useFirebase} from "../context/Firebase";
import Button from "react-bootstrap/esm/Button";

import React from "react";

const TodoItem = () => {
  const firebase = useFirebase();

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (firebase.isLoggedIn) {
      firebase.listTodos()?.then((todos) => {
        const todoTextData = todos.docs.map((doc) => doc.data().TodoText);
        setTodos(todoTextData);
        
       
      });
    }
  }, [firebase, firebase.isLoggedIn, setTodos]);

  const handleDeleteTodo = (id) => {
    console.log("handleDeleteTodo: id =",id);
    firebase.deleteTodo(id);
}
  

  return (

    <div className="" style={{ width: "50%" }}>
      <ListGroup style={{ backgroundColor: "transparent" }}>
        {todos.map((todoText, index) => (
          <ListGroup.Item key={index} todo={ todoText} className="d-flex justify-content-between">
            {todoText}
            <Button variant="danger" onClick={() => handleDeleteTodo(todoText.id)}>Delete</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
    
  );
};

export default TodoItem;