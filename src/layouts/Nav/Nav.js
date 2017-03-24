import './Nav.less'
import React from 'react'
import { Link } from 'react-router'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu

class Nav extends React.Component {
  constructor (prop) {
    super(prop)
    this.state = {
      theme: 'light'  // dark  light
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.setState({
      current: e.key
    })
  }

  render () {
    return (
      <Menu theme={this.state.theme}
        onClick={this.handleClick}
        defaultOpenKeys={['sub1', 'sub2']}
        selectedKeys={[this.state.current]}
        mode='inline'
      >

        <Menu.Item key='home'>
          <Link to='/'><Icon type='home' />首页</Link>
        </Menu.Item>

        <Menu.Item key='usermanage'>
          <Link to='/usermanage'><Icon type='user' />用户管理</Link>
        </Menu.Item>

        <SubMenu key='nav' title={<span><Icon type='appstore' />导航相关</span>}>
          <Menu.Item key='category'>
            <Link to='/nav/category'>类别管理</Link>
          </Menu.Item>
          <Menu.Item key='navinfo'>
            <Link to='nav/navinfo'>
              导航地址管理
            </Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key='login'>
          <Link to='/login'><Icon type='login' />登录</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Nav
