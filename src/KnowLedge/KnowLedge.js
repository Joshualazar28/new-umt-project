import React from 'react'
import NavBarHome from '../RegistrationDir/NavbarHome';
import KnowVideoGird from './KnowVideoGird';
const KnowLedge = ({username}) => {
  return (
    <div>
<NavBarHome username={username}/>
<KnowVideoGird/>

    </div>
  )
}

export default KnowLedge
