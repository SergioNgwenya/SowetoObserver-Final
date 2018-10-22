import Statistics from '../views/Statistics/Statistics.jsx';
import Articles from '../views/Admin/Articles/Articles.jsx';
import Category from '../views/Admin/Category/Category.jsx';
//import advertisements from '../views/Admin/Advert/Advert.jsx';
import Videos from '../views/Admin/Video/Videos.jsx';
import Advert from '../views/Admin/Adverts/Advert.jsx';

var dashRoutes = [
    { path: "/admin/", name: "Statistics", icon: "business_chart-bar-32", exact: true, component: Statistics},
    { path: "/admin/articles", name: "Articles", icon: "education_paper", exact: false,  component: Articles },
    { path: "/admin/category", name: "Manage Category", icon: "design_bullet-list-67", exact: false,  component: Category },
  //  { path: "/admin/advert", name: "Manage ads", icon: "files_single-copy-04", exact: false, component: advertisements },
    { path: "/admin/videos", name: "Videos", icon: "media-1_button-play",exact: false, component: Videos },
    { path: "/admin/Advert", name: "Advert", icon: "files_single-copy-04",exact: false, component: Advert }
    // { redirect: true, path: "/admin/", pathTo: "/admin/",  name: "Dashboard" }
];
export default dashRoutes;
