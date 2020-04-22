import React from 'react'
import './Person.css'

var person = (props) => {
  return (
    <div className="person">
      <p onClick={props.myclick}>大家好，我是{props.name}，今年{props.age}岁~</p>
      <input type="text" onChange={props.mychange} defaultValue={props.name}/>
      {/* 获取props.children子元素，使用行内样式 */}
      <p style={{fontSize:'12px', color: '#bbb'}}>{props.children}</p>
    </div>
  )
}
export default person