import React from 'react'
import style from './Title.css';

function Title(props) {

  return <div className={style.Title}>
          <h2>
              Your <b>ToDo</b> List:
          </h2>
            <p>
                Your total count number is: {props.data.length}
            </p>

        </div>;
}

export default Title;
