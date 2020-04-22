import React from 'react'
import Clock from '../Clock/clock'

var Header = (props) => {
  return (
    <div>
      {/* 时钟每秒更新 */}
      <Clock />
      <p className={props.pStyle.join(' ')}>Hello world</p>
      <button style={props.btnStyle} onClick={props.btnClick}>点击切换</button>
    </div>
  )
}

export default Header