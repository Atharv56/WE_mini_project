import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";

import "./Form.css";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const TodoForm = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));

        setText('');
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div className="formdiv">
        <form className="form" onSubmit={onFormSubmit}>
            <input  
                placeholder="Add a new idea"
                className="input"
                onChange={onInputChange}
                value={text}
            />
        </form>
        <Link to="/login">
        <Button className="logoutbutton">
            Logout
        </Button>
        </Link>
        </div>
    )
}

export default TodoForm;