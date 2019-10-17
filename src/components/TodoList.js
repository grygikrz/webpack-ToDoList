import React from 'react';
import style from './TodoList.css';

    let TodoList = (props) => {
        let showItems = props.lists.map((list) => <li key={list.id}>{list.text}<button onClick={() => props.remove(list.id)}>X</button></li>);

        return <div className={style.ItemList}>
                <ul>{showItems}</ul>
            </div>
}


export default TodoList;
