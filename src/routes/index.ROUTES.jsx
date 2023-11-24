import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Profile from "../pages/Admin/Profile/Profile";
import Home from "../pages/site/Home/Home";
import Shop from "../pages/site/shop/Shop";
import SiteRoot from "../pages/site/SiteRoot";

const ROUTES = [{
    path: '/',
    element: <SiteRoot />,
    children: [{
        path: '',
        element: <Home />
    }, {
        path: 'shop',
        element: <Shop />
    }
    ]
}, {
    path: '/admin',
    element: <AdminRoot />,
    children: [{
        path: '',
        element: <Dashboard />
    }, {
        path: 'profile',
        element: <Profile />
    }
    ]
}]
export default ROUTES