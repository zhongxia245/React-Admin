import './Header.less'
import React from 'react'
import { Link } from 'react-router'
import { Icon, Menu, Dropdown, message } from 'antd'

const onClick = function ({ key, ...other }) {
  message.info(`Click on item ${key}`)
}

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item>用户信息</Menu.Item>
    <Menu.Item>注销</Menu.Item>
  </Menu>
)

export const Header = () => (
  <div className='core-header'>
    <Link to='/'>
      <h1>ANTD ADMIN</h1>
    </Link>
    <div className='core-header__right'>
      <Dropdown overlay={menu}>
        <span><Icon type='user' /> zhongxia </span>
      </Dropdown>
    </div>
  </div>
)

export default Header
