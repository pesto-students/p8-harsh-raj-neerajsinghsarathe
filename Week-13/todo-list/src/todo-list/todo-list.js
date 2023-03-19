import React, {useRef, useState} from 'react';
import TodoCard from "./todo-card";
import todo from "./todo.module.css";

const list = [{'id': 1, 'title': 'Go for a walk'}, {'id': 2, 'title': 'Go for a jumping'}];

export default function TodoList() {
    const [state, setState] = useState(list)
    const enteredFormData = useRef();

    function submitHandler(event) {
        event.preventDefault();

        if (enteredFormData.current['newItem'].value !== '') {
            const meetupData = {
                'id': state.length + 1,
                'title': enteredFormData.current['newItem'].value,
            }
            setState([...state, meetupData]);
        }
    }

    return (
        <>
            <div className={todo.inputComponent}>
                <form action="" onSubmit={submitHandler} ref={enteredFormData}>
                    <input type="text" name="newItem" id="newItem" className={todo.addList}/>&nbsp;
                    <button type={"submit"} className={todo.btn}>Add Item
                    </button>
                </form>

            </div>
            {state.map((item) => {
                return (

                    <TodoCard key={item.id} item={item.title}/>
                )
            })}
        </>
    )

};
