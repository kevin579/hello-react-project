import React, { Component } from 'react'
import {Button} from 'antd'
import {StepBackwardOutlined,WindowsOutlined} from '@ant-design/icons' 
export default class App extends Component {
  render() {
    return (
      <div>
        <Button type='primary' icon = {<StepBackwardOutlined/> }>Button 1</Button>
        <Button type='link'>Button 2</Button>
        <Button>Button 3</Button>
        <StepBackwardOutlined />
        <WindowsOutlined />
      </div>
    )
  }
}
