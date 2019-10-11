import React from 'react'

function Title(props) {

  return <div className={'todo-title'}>
  <h2>
      Your ToDo List:
  </h2>
    <p>
        Your total count number is: {props.data.length}
    </p>

</div>;
}

export default Title;
