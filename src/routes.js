/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "admin/views/Index.js";
import Profile from "admin/views/examples/Profile.js";
import Maps from "admin/views/examples/Maps.js";
import Register from "admin/views/examples/Register.js";
import Login from "admin/views/examples/Login.js";
import Tables from "admin/views/examples/Tables.js";
import Icons from "admin/views/examples/Icons.js";
import Home from "./public/Pages/Home";
import Pharmacie from "admin/views/examples/Pharmacie";
import Hopital from "admin/views/examples/Hopital";
import Remboursement from "admin/views/examples/Remboursement";
import PharmacieProfile from "admin/views/examples/PharmacieProfile";
import Patients from "admin/views/examples/Patients";
import PatientProfil from "admin/views/examples/PatientProfil";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/pharmacie-profile",
    name: "PharmacieProfile",
    icon: "ni ni-single-02 text-yellow",
    component: <PharmacieProfile/>,
    layout: "/admin",
  },

  {
    path: "/patient-profile",
    name: "PatientProfil",
    icon: "ni ni-single-02 text-yellow",
    component: <PatientProfil/>,
    layout: "/admin",
  },

  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },

  {
    path: "/pharmacie",
    name: "Pharmacie",
    icon: "ni ni-shop text-blue",
    component: <Pharmacie/>,
    layout: "/admin",
  },


  {
    path: "/patients",
    name: "Patients",
    icon: "ni ni-shop text-blue",
    component: <Patients/>,
    layout: "/admin",
  },

  {
    path: "/hopital",
    name: "Hopital",
    icon: "ni ni-sound-wave text-red",
    component: <Hopital/>,
    layout: "/admin",
  },

  {
    path: "/reboursement",
    name: "Remboursement",
    icon: "ni ni-umbrella-13 text-blue",
    component: <Remboursement/>,
    layout: "/admin",
  },

  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },
];
export default routes;
