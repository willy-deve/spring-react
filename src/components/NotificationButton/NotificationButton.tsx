import React from 'react'
import icon from '../../assets/image/notification.svg'
import './Style.css'

const NotificationButton = () => {
  return (
    <div className="dsmeta-red-btn">
      <img src={icon} alt="notificar" />
    </div>
  )
}

export default NotificationButton
