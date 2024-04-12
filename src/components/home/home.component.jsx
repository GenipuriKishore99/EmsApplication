import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getDataFromLocalStorage } from "../../service/storage.service";
import './home.component.css';
import {HomeSearch} from '../home/search-bar/search-bar.component';
import { ImageGallary } from "../admin/gallary/gallary-view.component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HiHome } from 'react-icons/hi';
import {FaBusinessTime} from 'react-icons/fa6';
import {FcMusic} from 'react-icons/fc';
import {FcConferenceCall} from 'react-icons/fc';
import {MdFestival} from 'react-icons/md';
import {FcSportsMode} from 'react-icons/fc';
import {SiYourtraveldottv} from 'react-icons/si';


export function Home(){
    // const navigate=useNavigate();
    // useEffect(()=>{
    //     let users=getDataFromLocalStorage("user");
    //     if(!users){
    //         navigate("/")
    //     }

    // })

    return(
        <div >
        <section>
         <h2 className="text-center text-light mt-5">
          Find here......!<HiHome></HiHome>
         </h2>
        <h3 className="text-center text-light">
          Explore top-rated attraction,activities and more!
        </h3>
        search bar
         <div className="row mt-4">
          <div className="col-3"></div>
          <div className="col-6">
            <HomeSearch></HomeSearch>
          </div>
          <div className="col-3"></div>
        </div>
        </section>
            <h3 className="text-center text-black popular mt-3">Popular Categories</h3>
            <section className="mt-5">
                <div className="row popular-cat">
                     <FontAwesomeIcon icon="fa-solid fa-business-time" />
                    <div className="col-2 text-business">Business<FaBusinessTime className="business"></FaBusinessTime><span className="number">2</span></div>
                    <div className="col-2 text-business">Music<FcMusic className="business"></FcMusic><span className="number">2</span></div>
                    <div className="col-2 text-business"> Conference<FcConferenceCall className="business"></FcConferenceCall><span className="number">4</span></div>
                    <div className="col-2 text-business"> Festival<MdFestival className="business"></MdFestival><span className="number">2</span></div>
                    <div className="col-2 text-business"> Sport<FcSportsMode className="business"></FcSportsMode><span className="number">2</span></div>
                    <div className="col-2 text-business"> Travel<SiYourtraveldottv className="business"></SiYourtraveldottv><span className="number">2</span></div>
                

                </div>
                <h4 className="text-business">Most Visited Places...!</h4>
                <ImageGallary hidesearch={true}> </ImageGallary>
                <h4 className="text-business">Why Choose us....!</h4>
                <div className="row choose-us">
                    <div className="col-2">
                        <h4>Multiple Events</h4>
                        <label>Lorem ipsum dolor sit, mod consectetur est nemo.</label>

                    </div>
                    <div className="col-2">
                        <h4>Event Management</h4>
                        <label>Lorem ips ea consectetur et consequuntur quia maxime!</label>

                    </div>
                    <div className="col-2">
                        <h4>Credit card</h4>
                        <label>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint possimus provident quas fuga molestias eum, s</label>
                    </div>
                    <div className="col-2">
                        <h4>Location management</h4>
                        <label>Lorem ipsum dolor sit, mod consectetur est nemo.</label>

                    </div>
                    <div className="col-2">
                        <h4>Event Management</h4>
                        <label>Lorem ips ea consectetur et consequuntur quia maxime!</label>

                    </div>
                    <div className="col-2">
                        <h4>Free Registration</h4>
                        <label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quasi quas.</label>
                    </div>
                    <h4 className="text-business">Feature Events...!</h4>
                    <h5 className="text-business">You can choose Display upcoming featute,past Events here</h5>

                </div>
                <div className="row">
                        <div className="col-4">
                          <div className="img1-div"><span className="sp1">01</span><img src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=400" className="img1"></img><h5>Celebrations</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eveniet esse at provident, ut optio.</p><hr></hr><h6>Get Ticktets</h6><span className="sp1">123</span></div>
                        </div>
                        <div className="col-4">
                       <div className="img1-div"><span className="sp1">02</span><img src="https://images.pexels.com/photos/3171770/pexels-photo-3171770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img2"></img><h5>Parties</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, et fuga! Reiciendis minima assumenda nemo magni ipsam.</p><hr></hr><h6>Get Ticktes</h6><span className="sp1">1323</span></div>
                        </div>
                        <div className="col-4">
                        <div className="img1-div"><span className="sp1">03</span><img src="https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img3"></img><h5>Festivals</h5><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quos distinctio eum libero! Maiores ea quasi re</p><hr></hr><h6>Get Ticktes</h6><span className="sp1">123</span></div>
                        </div>

                       
                    </div>
                   
            </section>
        </div>
    )
}