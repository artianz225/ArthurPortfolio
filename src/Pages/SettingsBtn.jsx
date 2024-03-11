import React from 'react'
import './SettingsBtn.css';
import { GrSettingsOption } from "react-icons/gr";

function SettingsBtn() {
  return (
    <div className='settings-container'>
      <button className='settingsBtn-icon'><GrSettingsOption /></button>
      <button className='settingsBtn-name'>Settings</button>
    </div>
  )
}

export default SettingsBtn
