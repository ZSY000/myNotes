import React from 'react';
import './App.css';
import Clock from './Clock/clock'
import Person from './Person/Person'

class App extends React.Component {
  state = {
    person: [
      { name:"Crazy", age:23 },
      { name:"Lucy", age:20 },
      { name:"Sherry", age:18 }
    ]
  }

  // 按钮更新事件
  switchBtn = (newName) => {
    // console.log('hello')
    this.setState({
      person: [
        { name:newName, age:233 },
        { name:"Lucy", age:200 },
        { name:"Sherry", age:188 }
      ]
    })
  }

  changeName = (e) => {
    // console.log(e.target.value)
    this.setState({
      person: [
        { name:e.target.value, age:23 },
        { name:"Lucy", age:20 },
        { name:"Sherry", age:18 }
      ]
    })
  }

  render () {
    // 定义按钮的行内样式
    const style = {
      background: 'none',
      border: '1px solid #bbb',
      padding: '5px 10px'
    }
    return (
      <div className="App">
      {/* 时钟每秒更新 */}
        <Clock />
{/*  */}
        <button style={style} onClick={this.switchBtn.bind(this, 'Suzen')}>点击更新</button>

        <Person 
          name={this.state.person[0].name} 
          age={this.state.person[0].age} 
          myclick={this.switchBtn.bind(this, 'Waddor')} 
          mychange={this.changeName}
        />
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age} 
        />
        <Person 
          name={this.state.person[2].name} 
          age={this.state.person[2].age} 
        />
        <Person name="Lala" age="22">
          很高兴认识大家！
        </Person>
      </div>
    )
  }
}

export default App;
