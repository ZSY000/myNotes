import React from 'react'
import Person from './Person/Person'

var Persons = (props) => {
  return (
    <div>
      {/* 循环渲染Person组件 */}
      {
        props.person.map((item, index) => 
        <Person 
          name={item.name} 
          age={item.age} 
          key={index} 
          myclick={props.deleteItem.bind(this, index)} 
          mychange={(event) => {props.changeName(event, item.id)}}
        />)  
      }

      <Person name="Lala" age="22">
        我不是循环出来的，不能删除和修改哦~
      </Person> 
    </div>
  )
}

export default Persons