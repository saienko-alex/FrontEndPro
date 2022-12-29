import React from 'react'
import { useNavigate } from 'react-router-dom';
import './navigation.css'
import NavigationLink  from './NavigationLink'; 

function Navigation({page, navigate}) {
  const navigated = useNavigate();

  function onGoToContacts() {
    navigated('/contactlist')
  }

  return (
    <div className='navigation-container'>
        <NavigationLink page={'contactlist'} label="ContactList" currentPage={page} navigate={navigate}/>
        <NavigationLink page={'inputblock'} label="InputBlock" currentPage={page} navigate={navigate}/>
        <button onClick={onGoToContacts}>USERS</button>
    </div>
  )
}

export default Navigation
