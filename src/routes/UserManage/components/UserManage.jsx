import './UserManage.less'
import React, { PropTypes } from 'react'
import classnames from 'classnames'
import { Table, Button } from 'antd'
import { getUserList } from '../model'

const columns = [{
  title: '用户名',
  dataIndex: 'username',
}, {
  title: '邮箱',
  dataIndex: 'email',
}, {
  title: '是否启用',
  dataIndex: 'enable',
  render: (text) => <span>{text
    ? '男'
    : '女'}</span>
}, {
  title: '权限',
  dataIndex: 'permission',
}, {
  title: '操作',
  key: 'operation',
  render: (text, record) => {
    return (
      <span>
        <a>编辑</a>
        <span className="ant-divider" />
        <a>删除</a>
      </span>
    )
  },
}]

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    username: `zhongxia ${i}`,
    email: 'zhongxia@sina.com',
    enable: i % 2,
    permission: i
  })
}


class UserManage extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      selectedRowKeys: [],
      loading: false,
    }

    this.onSelectChange = this.onSelectChange.bind(this)
  }

  componentDidMount() {
    getUserList()
  }


  onSelectChange(selectedRowKeys) {
    this.setState({ selectedRowKeys })
  }

  render() {
    const { loading, selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    }
    const hasSelected = selectedRowKeys.length > 0
    return (
      <div>
        <Table loading={loading} rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    )
  }
}

export default UserManage
