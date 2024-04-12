import { Route, Routes } from "react-router-dom";
import { AnniversdayEvent } from "./components/events/anniversdayevents/anniversary.component";
import { Home } from "./components/home/home.component";
import {AnniversdayView} from './components/admin/event-approve/anniversary/annivarsary-approve.component';
import { ImageGallary } from "./components/admin/gallary/gallary-view.component";
import { UserLogin } from "./components/user/user-login/user-login.component";
import { AdminLayout } from "./components/admin/layout/admin-layout.component";

export function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/AdminLayOut" element={<AdminLayout></AdminLayout>}></Route>
            <Route path="/ImageGallary" element={<ImageGallary></ImageGallary>}></Route>
            <Route path="/AnniversdayView" element={<AnniversdayView></AnniversdayView>}></Route>
            <Route path="/UserLogin" element={< UserLogin></ UserLogin>}></Route>
            <Route path="/AnniversdayEvent" element={<AnniversdayEvent></AnniversdayEvent>}></Route>
            <Route path="/" element={<Home></Home>}></Route>


        </Routes>
    )
}