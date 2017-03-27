import React, { PropTypes, Component } from 'react'
import { Form, Input, DatePicker, Col, Modal, message } from 'antd'
const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
}

class EditForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      confirmLoading: false
    }
    this.handleCancel = this.handleCancel.bind(this)
    this.handleOk = this.handleOk.bind(this)
  }

  handleOk() {
    const { validateFields, getFieldsValue } = this.props.form
    const { data } = this.props
    validateFields((errors) => {
      if (errors) {
        return
      }
      const newData = {
        ...data,
        ...getFieldsValue()
      }
      console.log('提交数据', newData)
      this.setState({
        confirmLoading: true
      })

      setTimeout(() => {
        this.setState({
          confirmLoading: false
        })
        message.success('保存成功！');
        this.handleCancel()
      }, 1000)
    })
  }

  handleCancel() {
    if (this.props.hideModal) {
      this.props.hideModal()
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { visible, data } = this.props
    return (
      <Modal
        title="编辑"
        visible={visible}
        onOk={this.handleOk}
        confirmLoading={this.state.confirmLoading}
        onCancel={this.handleCancel}>
        <Form>
          <FormItem
            {...formItemLayout}
            hasFeedback
            label="分类名称"
          >
            {
              getFieldDecorator('name', {
                initialValue: data.name,
                rules: [{
                  required: true, message: '分类名称不能为空哦...',
                }],
              })(
                <Input />
                )
            }
          </FormItem>

          <FormItem
            {...formItemLayout}
            hasFeedback
            label="分类值"
          >
            {
              getFieldDecorator('value', {
                initialValue: data.value,
                rules: [{
                  required: true, message: '分类值不能为空哦...',
                }],
              })(
                <Input />
                )
            }
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="备注"
          >
            {
              getFieldDecorator('remark', {
                initialValue: data.remark,
              })(
                <Input type="textarea" rows={4} />
                )
            }
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

export default Form.create()(EditForm)
