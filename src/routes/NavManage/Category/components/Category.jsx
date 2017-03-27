import './Category.less'
import React, { PropTypes } from 'react'
import classnames from 'classnames'
import { Table, Button, Modal, Popconfirm } from 'antd'
import { getNav, getCategory } from '../../model'
import EditForm from './EditForm.jsx'


class NavInfo extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      selectedRowKeys: [],
      categoryData: [],
      loading: false,
      visible: false,
      currentFormData: {}
    }

    this.columns = [{
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
            <a onClick={this.showModal.bind(this, record)}>编辑</a>
            <span className="ant-divider" />
            <Popconfirm placement="top" title="是否删除该记录" onConfirm={this.handleDel.bind(this, record)} okText="确定" cancelText="取消">
              <a>删除</a>
            </Popconfirm>
          </span>
        )
      },
    }]

    this.onSelectChange = this.onSelectChange.bind(this)
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
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

  showModal(record) {
    this.setState({
      visible: true,
      currentFormData: record
    })
  }

  hideModal = () => {
    this.setState({
      visible: false
    })
  }

  handleOk() {
    alert('提交')
  }

  handleDel(record) {
    console.log('取消删除', record)
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
        <Table
          loading={loading}
          rowSelection={rowSelection}
          columns={this.columns}
          dataSource={this.state.categoryData} />

        {this.state.visible ?
          <EditForm visible={this.state.visible} data={this.state.currentFormData} hideModal={this.hideModal} /> : ''}

      </div>
    )
  }
}

export default NavInfo
