import React from 'react'
import Person from './Person/Person'

class Persons extends React.Component {
  render() {
    return (
      <div>
        {/* 循环渲染Person组件 */}
        {
          this.props.person.map((item, index) => 
          <Person 
            name={item.name} 
            age={item.age} 
            key={item.id} 
            myclick={this.props.deleteItem.bind(this, index)} 
            mychange={(event) => this.props.changeName(event, item.id)}
          />)  
        }
  
        <Person name="Lala" age="22">
          我不是循环出来的，不能删除和修改哦~
        </Person> 
      </div>
    )
  }
}

export default Persons