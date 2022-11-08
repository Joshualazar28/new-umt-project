//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//shoaib imports
import React, { useContext } from 'react';
import NoticeBoard from '../NoticeDir/Notice-board';

//imran imports
//import Clearance from '../ClearanceDir/Clearnce';

import { UserContext } from '../App';

const HomePage = () => {
  const { state, dispatch } = useContext(UserContext);

  console.log(state, 'state')
  return (
    <div className="parent">
    <NoticeBoard state={state}/>
    </div>
  );
}

export default HomePage;