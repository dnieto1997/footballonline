/*!

=========================================================
* Now UI Dashboard React - v1.5.2
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import UserPage from "views/UserPage.js";
import Posiciones from "views/Posiciones";
import Goleadores from "views/Goleadores";
import VallaMenos from "views/VallaMenos";
import Equipos from "views/Equipos";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Calendario",
    icon: "ui-1_calendar-60",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/posiciones",
    name: "Tabla de Posiciones",
    icon: "ui-1_check",
    component: <Posiciones />,
    layout: "/admin",
  }, 
 {
    path: "/goleadores",
    name: "Tabla de Goleadores",
    icon: "business_badge",
    component: <Goleadores />,
    layout: "/admin",
  },{
    path: "/vallamenos",
    name: "Valla Menos Vencida",
    icon: "design-2_ruler-pencil",
    component: <VallaMenos />,
    layout: "/admin",
  }/* ,
  {
    path: "/equipos",
    name: "Ingresar Equipos",
    icon: "design-2_ruler-pencil",
    component: <Equipos />,
    layout: "/admin",
  } */
];
export default dashRoutes;
