import React from 'react'
import './App.css'
import Persons from './components/Persons/Persons'
import Header from './components/Header/Header'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      person: [
        { id:1, name:"Crazy", age:23 },
        { id:2, name:"Lucy", age:20 },
        { id:3, name:"Sherry", age:18 }
      ],
      showPerson: true
    }
  }
  
  // 更改名称
  changeName = (event, id) => {
    const personIndex = this.state.person.findIndex((p) => {
      return p.id === id
    })
    
    const person = this.state.person
    person[personIndex].name = event.target.value

    this.setState({
      person: person
    })
  }

  // 按钮切换
  toggleBtn = () => {
    let flag = this.state.showPerson
    this.setState({showPerson: !flag})
  }

  // 点击删除
  deleteItem = (index) => {
    // const leftPerson = this.state.person
    const leftPerson = [...this.state.person]
    leftPerson.splice(index, 1)
    this.setState({
      person: leftPerson
    })
  }

  render () {
    // 定义按钮的行内样式
    const style = {
      background: 'none',
      border: '1px solid #bbb',
      padding: '5px 10px'
    }

    const timeStyle = []
    if (this.state.person.length<2) {
      timeStyle.push('red')
    }
    if(this.state.person.length<1) {
      timeStyle.push('bold')
    }
    
    let showContent = null
    if(this.state.showPerson){
      showContent = <Persons 
                      person={this.state.person}
                      deleteItem={this.deleteItem}
                      changeName={this.changeName}
                    />
    }
    return (
      <div className="App">
        <Header btnStyle={style} btnClick={this.toggleBtn} pStyle={timeStyle}/>

        {/* 点击切换内容 */}
        {showContent} 
      </div>
    )
  }
}

export default App;
