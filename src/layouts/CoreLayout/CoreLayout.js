import './CoreLayout.less'
import '../../styles/core.less'
import React from 'react'
import Header from '../Header'
import Nav from '../Nav'

export const CoreLayout = ({ children }) => (
  <div >
    <Header />
    <div className='core-layout'>
      <div className='core-layout__nav'>
        <Nav />
      </div>
      <div className='core-layout__viewport'>
        {children}
      </div>
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
