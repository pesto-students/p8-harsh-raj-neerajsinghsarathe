import {useRef, useState} from "react";
import todo from "./todo.module.css";

const completed = {
    marginLeft: '5px',
    padding: '3px 10px',
    backgroundColor: 'green',
    fontSize: '0.8rem',
    borderRadius: '5px',
    color: 'white'

}

export default function TodoCard(props) {
    const inputEl = useRef(props.item);
    const [strike, setStrike] = useState(false);
    const onButtonClick = () => {
        if (inputEl.current.checked) {
            setStrike(true)
        } else {
            setStrike(false)
        }
    };

    return (
        <div className={todo.list}>
            <input type="checkbox" ref={inputEl} id="item" onClick={onButtonClick}/>
            <label htmlFor="item">{props.item}</label>
            {
                strike ? <span style={completed}>Completed</span> : ''
            }
        </div>
    )
}
