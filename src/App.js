//react imports
import React, { useEffect, createContext, useReducer, useContext } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
//shoaib imports
import NoticeBoard from './NoticeDir/Notice-board';
import NoticeDetail from './NoticeDir/NoticeDetail';
import StaffHome from './Staff/StaffHome';
import CreateNotice from './Staff/CreateNotice';
import DeleteNotice from './NoticeDir/DeleteNotice';
import UpdateNotice from './NoticeDir/UpdateNotice';
//sehar imports
import TeTable from "./TripEvent/TeTable";
import NavBar from './RegistrationDir/NavBar';
import LoginForm from './RegistrationDir/LoginForm';
import Registerform from './RegistrationDir/Registerform';
import Firstpage from './RegistrationDir/Firstpage';
import ForgotPassword from './RegistrationDir/ForgotPassword';
import HomePage from './RegistrationDir/HomePage';
import Logout from './RegistrationDir/logout';
import KnowLedge from "./KnowLedge/KnowLedge";

//imran imports
// import Clearance from './ClearanceDir/Clearnce';
// import StaffClear from './Staff/staffClearance';
import Reason from './Staff/Reason';

//ameena & maham imports
import HomeTradingSharing from './TradingAndSharingDir/HomeTradingSharing';
import CreateTSPost from './TradingAndSharingDir/CreateTSPost';
import CreateTEPost from './TripsDir/CreateTEPost';
import CreateLSPost from './LostAndFoundDir/CreateLSPost';
import NotFound from './TradingAndSharingDir/NotFound';
import TSPostDetails from './TradingAndSharingDir/TSPostDetails';
import HomeLostFound from './LostAndFoundDir/HomeLostFound';
import LSPostDetails from './LostAndFoundDir/LSPostDetails';
import HomeTripsEvents from './TripsDir/HomeTripsEvents';
import TEPostDetails from './TripsDir/TEPostDetails';
import DeleteLSPost from './LostAndFoundDir/DeleteLSPost';
import DeleteTSPost from './TradingAndSharingDir/DeleteTSPost';
import DeleteTEPost from './TripsDir/HomeTripsEvents';
import UpdateLSPost from './LostAndFoundDir/UpdateLSPost';
import UpdateTEPost from './TripsDir/UpdateTEPost';
import UpdateTSPost from './TradingAndSharingDir/UpdateTSPost';

//
//
//
//Admin imports

//Sehar
import SHAdminUnderNav from './Admin/SH-AdminUnderNav';
import SHNavBarAdmin from './Admin/SH-NavBarAdmin';
import SHAddNewNotice from './Admin/SH-AddNewNotice';
import UpdateAdminNotice from './Admin/SH-NoticeEdit';
import DeleteAdminNotice from './Admin/SH-DeleteNotice';

//Maham
import MahNavbar from './Admin/MahNavbar';
import TEPostListAdmin from './Admin/TEPostListAdmin';
import TSPostListAdmin from './Admin/TSPostListAdmin';
import LFPostListAdmin from './Admin/LFPostListAdmin';
// import { useNavigate } from "react-router-dom";

import LostTable from "./LostAndFoundDir/LostTable";
import TsTable from "./TradingAndSharingDir/TsTable";

//Ameena
import HomeAdminHandleUser from './Admin/HomeAdminHandleUser';
import AdminUserCreate from './Admin/AdminUserCreate';
import AdminUserEdit from './Admin/AdminUserEdit';
import AdminUserDelete from './Admin/AdminUserDelete';
import AdminUserDetails from './Admin/AdminUserDetails';
import { reducer, initialState } from "../src/reducersAuth/useReducers";
export const UserContext = createContext();
function App() {
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user.name)
  const username = user?.name
  const [state, dispatch] = useReducer(reducer, initialState);
  let history = useHistory();
  function handleClick() {
    history.push("/home");
  }


  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   // console.log(user, '---ddd')
  //   if (user) {
  //     dispatch({ type: 'USER', payload: user });

  //   } else {
  //     // window.location = '/';
  //     // history.push("/login");
  //   }
  // }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
    <Router>
      <div className="App">
        {/* Sehar routes */}
        <Switch>
          <Route exact path="/">
            <Firstpage  username={username} ></Firstpage>
          </Route>
          <Route exact path="/lostfond">
            <LostTable state={username}></LostTable>
          </Route>
          <Route exact path="/tsTable">
            <TsTable state={username}></TsTable>
          </Route>


          <Route exact path="/TeTable">
            <TeTable state={username}></TeTable>
          </Route>
          

          <Route exact path="/Home">
            <HomePage state={username} ></HomePage>
          </Route>

          <Route exact path="/forgot">
            <ForgotPassword state={username} ></ForgotPassword>
          </Route>

          <Route exact path="/login">
            <LoginForm ></LoginForm>
          </Route>

          <Route exact path="/forgot">
            <NavBar ></NavBar>
          </Route>

          <Route exact path="/login">
            <NavBar></NavBar>
          </Route>

          <Route exact path="/register">
            <Registerform  />
          </Route>
          <Route path="/logout">
            <Logout/>
            </Route>

          {/* Shoaib routes */}
          <Route path="/notice-board">
            <NoticeBoard username={username} />
          </Route>
          <Route path="/notices/:id/:user">
            <NoticeDetail username={username} />
          </Route>
          <Route path="/delete/:id">
            <DeleteNotice username={username} />
          </Route>
          <Route path="/update/:id">
            <UpdateNotice  username={username}/>
          </Route>
          <Route path="/StaffHome">
            <StaffHome username={username} ></StaffHome>
          </Route>
          <Route path="/CreateNotice">
            <CreateNotice username={username} ></CreateNotice>
          </Route>

          {/* Imran routes
          <Route path="/Clearance">
            <Clearance />
          </Route>
          <Route path="/StaffClearance">
            <StaffClear />
          </Route>
          <Route path="/Reason">
            <Reason />
          </Route> */}

          {/* Ameena & Maham routes */}
          <Route path="/HomeLostFound">
            <HomeLostFound username={username} />
          </Route>
          <Route path="/lfblogs/:id">
            <LSPostDetails username={username} />
          </Route>
          <Route path="/delete/:id">
            <DeleteLSPost username={username} />
          </Route>
          <Route path="/update/:id">
            <MahNavbar username={username} />
            <UpdateLSPost username={username} />
          </Route>
          <Route path="/CreateLSPost">
            <CreateLSPost username={username} />
          </Route>

          <Route path="/CreateTSPost">
            <CreateTSPost username={username} />
          </Route>
          <Route path="/tsblogs/:id">
            <TSPostDetails username={username} />
          </Route>
          <Route path="/HomeTradingSharing">
            <HomeTradingSharing username={username} />
          </Route>
          <Route path="/NotFound">
            <NotFound username={username} />
          </Route>
          <Route path="/delete/:id">
            <DeleteTSPost username={username} />
          </Route>
          <Route path="/update/:id">
            <UpdateTSPost username={username} />
          </Route>
          
          <Route path="/CreateTEPost">
            <CreateTEPost username={username}  />
          </Route>
          <Route path="/HomeTripsEvents">
            <HomeTripsEvents username={username} />
          </Route>

            {/* knowledge */}
            <Route path="/knowledge">
            <KnowLedge username={username} />
          </Route>


          <Route path="/teblogs/:id">
            <TEPostDetails state={state} />
          </Route>
          <Route path="/delete/:id">
            <DeleteTEPost state={state} />
          </Route>
          <Route path="/update/:id">
            <UpdateTEPost state={state} />
          </Route>
        </Switch>



        {/* Admin Routes */}

        <Switch>

          {/* Saher Admin Notice Handler */}
          <Route path="/admin">
            <div className="Navbar">
              <SHNavBarAdmin></SHNavBarAdmin>
              <div className="SH-Admin-home-content">
                <SHAdminUnderNav></SHAdminUnderNav>
              </div>
            </div>
          </Route>
          <Route path="/CreateNoticeAdmin">
            <SHAddNewNotice></SHAddNewNotice>
          </Route>
          <Route path="/editNotice/:id">
           <UpdateAdminNotice></UpdateAdminNotice>
          </Route>
          <Route path="/deleteNotice/:id">
            <DeleteAdminNotice></DeleteAdminNotice>
          </Route>

          {/* Maham Admin Post Handler */}
          <Route path="/tepostListAdmin">
            <div className="Navbar">
              <SHNavBarAdmin></SHNavBarAdmin>
            </div>
            <MahNavbar></MahNavbar>
            <TEPostListAdmin state={state} />
          </Route>

          <Route path="/tspostListAdmin">
            <div className="Navbar">
              <SHNavBarAdmin></SHNavBarAdmin>
            </div>
            <MahNavbar></MahNavbar>
            <TSPostListAdmin state={state} />
          </Route>

          <Route path="/lfpostListAdmin">
            <div className="Navbar">
              <SHNavBarAdmin></SHNavBarAdmin>
            </div>
            <MahNavbar></MahNavbar>
            <LFPostListAdmin  state={state}/>
          </Route>

          {/* Ameena Admin User Handler */}
          <Route path="/HomeAdminHandleUser">
            <div className="Navbar">
              <SHNavBarAdmin state={state} ></SHNavBarAdmin>
            </div>
            <HomeAdminHandleUser  state={state} />
          </Route>

          <Route path="/user/:id">
            <div className="Navbar">
              <SHNavBarAdmin state={state} ></SHNavBarAdmin>
            </div> 
            <AdminUserDetails state={state} />
          </Route>

          <Route path="/updateUser/:id">
            <AdminUserEdit state={state} />
          </Route>

          <Route path="/deleteUser/:id">
            <AdminUserDelete state={state} />
          </Route>

          <Route path="/insertUserByAdmin">
            <div className="Navbar">
              <SHNavBarAdmin state={state} ></SHNavBarAdmin>
            </div>
            <AdminUserCreate state={state} />
          </Route>
         
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>

  );
}

export default App;


