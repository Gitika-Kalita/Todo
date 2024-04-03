import  {useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useFirebase} from '../context/Firebase'


const TodoForm = () => {

    const firebase = useFirebase();

  const [todoText, setTodoText] = useState("");


  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log("adding items")
    await firebase.handleCreateTodo(todoText);
    window.location.reload();
    alert("successfully Added the task")
    setTodoText("")
  }

  return (
    <Card
      style={{
        width: "50%",
        height: "auto",
        marginTop: "50px",
        backgroundColor: "#ffc0cb",
      }}
    >
      <Card.Body>
       <form  onSubmit={handleSubmit} action="" method="POST">
       <InputGroup className="mb-3">
          <Form.Control
            
            required
            placeholder="Add Your Todos Here..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => setTodoText(e.target.value)}
            value={todoText}
            type="text"
          />
          <Button variant="outline-info" id="button-addon2"
          type="submit"
          >
            Add
          </Button>
         
        </InputGroup>
       </form>
      </Card.Body>
    </Card>
  );
};

export default TodoForm;