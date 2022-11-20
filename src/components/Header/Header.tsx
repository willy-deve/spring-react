import React from 'react'
import logo from '../../assets/image/logo-header.svg'
import './Style.css'

const Header = () => {
  return (
    <header>
      <div className="ds-meta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
      </div>
    </header>
  )
}

export default Header
