import './NavInfo.less'
import React, { PropTypes } from 'react'
import classnames from 'classnames'
import { Table, Button, Tooltip } from 'antd'
import { getNav, getCategory } from '../../model'

const columns = [{
  title: '导航名称',
  dataIndex: 'name',
  render: (text, record) => {
    return (
      <Tooltip placement="topLeft" title={record.remark}>
        {text}
      </Tooltip>
    )
  }

}, {
  title: '导航分类',
  dataIndex: 'category',
}, {
  title: '导航图片',
  dataIndex: 'img',
}, {
  title: '导航地址',
  dataIndex: 'url',
},
// {
//   title: '备注',
//   dataIndex: 'remark',
//   width: 200
// },
{
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

class NavInfo extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      selectedRowKeys: [],
      loading: false,
      navData: [],
      categoryData: []
    }

    this.onSelectChange = this.onSelectChange.bind(this)
  }

  componentDidMount() {
    this.setState({ loading: true })
    getNav().then(res => {
      let data = res.data
      this.setState({ navData: data, loading: false })
    })
    getCategory().then(res => {
      let data = res.data
      this.setState({ categoryData: data })
    })
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

    return (
      <div>
        <Table loading={loading} rowSelection={rowSelection} columns={columns} dataSource={this.state.navData} />
      </div>
    )
  }
}

export default NavInfo
