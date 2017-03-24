import './HomeView.less'
import React from 'react'
import render2Markdown from 'common/util/markdown'

let str = `
  # 首页
  >这个是一个后台管理系统的模板，使用React + React-router + webpack + Es6 + antd 组件库来实现。
  目前放在这里，主要用来实现导航网站的后台管理。 也顺便做一个后台管理系统的一个脚手架模板.
`

export const HomeView = () => (
  <div className='home__container'>
    {render2Markdown(str)}
  </div>
)

export default HomeView

