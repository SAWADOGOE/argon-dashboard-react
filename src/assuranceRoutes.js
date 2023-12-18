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
import Register from "admin/views/examples/Register.js";
import Login from "admin/views/examples/Login.js";
import Tables from "admin/views/examples/Tables.js";
import Icons from "admin/views/examples/Icons.js";
import Pharmacie from "admin/views/examples/Pharmacie";
import Hopital from "admin/views/examples/Hopital";
import RemboursementList from "admin/views/examples/RemboursementList";
import PharmacieProfile from "admin/views/examples/PharmacieProfile";
import Patients from "admin/views/examples/Patients";
import PatientProfil from "admin/views/examples/PatientProfil";
import HopitalProfile from "./admin/views/examples/HopitalProfile";
import ProfileMedecin from "./admin/views/examples/ProfileMedecin";
import Exo from "./admin/views/examples/Exo";
import Reclamation from "./admin/views/examples/Reclamation";

var assuranceRoutes = [

    {
        path: "/hopital",
        name: "Hopital",
        icon: "ni ni-sound-wave text-red",
        component: <Hopital/>,
        layout: "/hop",
    },

    {
        path: "/reboursement-list",
        name: "Remboursement liste",
        icon: "ni ni-umbrella-13 text-blue",
        component: <RemboursementList/>,
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

    {
        path: "/exo/jjj",
        name: "Exo",
        icon: "ni ni-circle-08 text-pink",
        component: <Exo/>,
        layout: "/hop",
    },
];
export default assuranceRoutes;
