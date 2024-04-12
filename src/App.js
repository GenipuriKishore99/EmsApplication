import React, { useEffect, useState } from "react";
// import { AppRouter } from "./app.router";
// import { Menu } from "./components/menu.component";
import { AppRouter } from './app.router';
import {BiSolidLogInCircle} from 'react-icons/bi';
import {IoKeySharp} from 'react-icons/io5';
import { MainMenu } from './components/common/menu/menu.component';
import { BrowserRouter } from 'react-router-dom';
import { store } from "./service/redux-service.service";
function App() {
  const [showAdmin,setShowAdmin]=useState(false);
  function showAdminView(){
    setShowAdmin(true)
  }
  useEffect(()=>{
    subscribestore()

  })
  function subscribestore(){
    store.subscribe(()=>{
      let user=store.getState()?.user
      alert(JSON.stringify(user))
    })
  }
  return (
    <div>
     
      <BrowserRouter>
    
       {!showAdmin &&<section className="bg-img">
        <div className="row">
          <div className="col-5">
            <img
              src="https://ovatheme.com/em4u/wp-content/uploads/2017/10/logo_dark.png"
              className="img-logo"
            ></img>
          </div>
          <div className="col-5">
            <MainMenu></MainMenu>
          </div>
          <div className="col-2">
            <BiSolidLogInCircle className="logo-login"></BiSolidLogInCircle>
            <IoKeySharp className="logo-login1"></IoKeySharp>
          </div>
          <div className='col-2'></div>
          
          <div className='col-8'>
          <AppRouter></AppRouter>
         
          </div>
          <div className='col-2'></div>
          </div>
       
      </section>}
      {
        showAdmin && <AppRouter></AppRouter>
      }
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
