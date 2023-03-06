import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SidbarPage from "./admin/components/SidbarPage";
import DashboardPage from "./admin/pages/DashboardPage";
import ServicePage from "./admin/pages/ServicePage";
import TestimonialPage from "./admin/pages/TestimonailPage";
import TeamPage from "./admin/pages/TeamPage";
import PortfolioPage from "./admin/pages/PortfolioPage";
import Created_Service from "./admin/pages/services/Created_Service";
import Edit_Service from "./admin/pages/services/Edit_Service";
import Created_Portfolio from "./admin/pages/Portfolios/Create_Portfolio";
import Created_Team from "./admin/pages/Teams/Create_Team";
import Created_Testimonial from "./admin/pages/Testimonials/Create_Testimonial";
import SignInPage from "./admin/pages/SignInPage";
import Edit_Testimonial from "./admin/pages/Testimonials/Edit_Testimonial";
import Edit_Team from "./admin/pages/Teams/Edit_Team";
import Edit_Portfolio from "./admin/pages/Portfolios/Edit_Portfolio";
import Navbar from "./screen/Navbar";
import Main from "./components/Main";
import SettingPage from "./admin/pages/SettingPage";
import Created_Setting from "./admin/pages/Settings/Created_Setting";
import Edit_Setting from "./admin/pages/Settings/Edit_Setting";
import FaqPage from "./admin/pages/Faq";
import Created_FAQ from "./admin/pages/Faqs/Create_FAQ";
import AboutUsPage from "./admin/pages/AboutUs";
import Created_AboutUs from "./admin/pages/About_us/Create_AboutUs";
import Edit_AboutUs from "./admin/pages/About_us/Edit_AboutUs";
import Edit_FAQ from "./admin/pages/Faqs/Edit_FAQ";

function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<Main/>}>*/}
                {/*    <Main/>*/}
                {/*    <Route exact path={"/login"}  element={<SignInPage/>}/>*/}
                {/*</Route>*/}
                <Route exact index  element={<SignInPage/>}/>
                <Route path="/" element={<SidbarPage/>}>
                    <Route exact path="dashboard" element={<DashboardPage/>}/>
                    ////////////////////////////////////Service Management/////////////////////
                    <Route exact path="service" element={<ServicePage/>}/>
                    <Route exact path="service-create" element={<Created_Service/>}/>
                    <Route exact path="service-edit/:id" element={<Edit_Service/>}/>
                    ////////////////////////////////////Testimonial Management/////////////////////
                    <Route exact path="testimonial" element={<TestimonialPage/>}/>
                    <Route exact path="create-testimonial" element={<Created_Testimonial/>}/>
                    <Route exact path="edit-testimonial/:id" element={<Edit_Testimonial/>}/>
                    ////////////////////////////////////Portfolio Management/////////////////////
                    <Route exact path="team" element={<TeamPage/>}/>
                    <Route exact path="create-team" element={<Created_Team/>}/>
                    <Route exact path='edit-team/:id' element={<Edit_Team/>}/>
                    ////////////////////////////////////Portfolio Management/////////////////////
                    <Route exact path="portfolio" element={<PortfolioPage/>}/>
                    <Route exact path="create-portfolio" element={<Created_Portfolio/>}/>
                    <Route exact path='edit-portfolio/:id' element={<Edit_Portfolio/>}/>
                    //////////////////////////////////////setting////////////////////////////////
                    <Route exact path="setting" element={<SettingPage/>}></Route>
                    <Route exact path="create-setting" element={<Created_Setting/>}></Route>
                    <Route exact path="edit-setting/:id" element={<Edit_Setting/>}></Route>
                    //////////////////////////////////////FAQ////////////////////////////////
                    <Route exact path="faq" element={<FaqPage/>}></Route>
                    <Route exact path="create-faq" element={<Created_FAQ/>}></Route>
                    <Route exact path="edit-faq/:id" element={<Edit_FAQ/>}></Route>
                    //////////////////////////////////////About Us///////////////////////////
                    <Route exact path="about-us" element={<AboutUsPage/>}></Route>
                    <Route exact path="create-about" element={<Created_AboutUs/>}></Route>
                    <Route exact path="edit-about/:id" element={<Edit_AboutUs/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute