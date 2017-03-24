import './Category.less'
import React, { PropTypes } from 'react'
import classnames from 'classnames'
import { Table, Button } from 'antd'
import { getNav, getCategory } from '../../model'

const columns = [{
  title: '分类名称',
  dataIndex: 'name',
}, {
  title: '分类值',
  dataIndex: 'value',
}, {
  title: '备注',
  dataIndex: 'remark',
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


class NavInfo extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      selectedRowKeys: [],
      categoryData: [],
      loading: false
    }

    this.onSelectChange = this.onSelectChange.bind(this)
  }

  componentDidMount() {
    this.setState({ loading: true })
    getCategory().then(res => {
      let data = res.data
      this.setState({ categoryData: data, loading: false })
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
    const hasSelected = selectedRowKeys.length > 0
    return (
      <div>
        <Table loading={loading} rowSelection={rowSelection} columns={columns} dataSource={this.state.categoryData} />
      </div>
    )
  }
}

export default NavInfo
