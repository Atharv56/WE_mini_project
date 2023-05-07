import { useState } from "react";

import { toggleTodo, updateTodo } from "../redux/actions";
import { deleteTodo } from "../redux/actions";

import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {

    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo?.data);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        setEditing(prevState => !prevState);

        dispatch(updateTodo(todo._id, text))
    }

    const handleLikeClick = () => {
        setLikes(prevLikes => prevLikes + 1);
    }

    const handleDislikeClick = () => {
        setDislikes(prevDislikes => prevDislikes + 1);
    }

    return (
        <li
            className="task"
            onClick={() => dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo?.done ? 'underline' : '',
                color: todo?.done ? '#bdc3c7' : '#34495e'
            }}
            data-testid="todo-test"
        >
            <span style={{ display: editing ? 'none' : '' }}>{todo?.data}</span>

            <form
                style={{ display: editing ? 'inline' : 'none' }}
                onSubmit={onFormSubmit}
            >
                <input
                    type="text"
                    value={text}
                    className="edit-todo"
                    onChange={(e) => setText(e.target.value)}
                />
            </form>

            <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
                <i className="fas fa-trash" />
            </span>
            <span className="icon" onClick={() => setEditing(prevState => !prevState)}>
                <i className="fas fa-pen" />
            </span>
            <span className="icon" onClick={handleDislikeClick}>
                <i className="fas fa-thumbs-down" /> {dislikes}
            </span>
            <span className="icon" onClick={handleLikeClick}>
                <i className="fas fa-thumbs-up" /> {likes}
            </span>

        </li>
    )
}

export default Todo;
