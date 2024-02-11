import {Route, Routes} from "react-router-dom";
import PropertyListing from "../scenes/property/PropertyListing";
import Dashboard from "../scenes/Dashboard";
import UserListing from "../scenes/user/UserListing";
import PropertyDetail from "../scenes/property/PropertyDetail";
import AddProperty from "../scenes/property/AddProperty";
import AddUser from "../scenes/user/AddUser";
import UserDetail from "../scenes/user/UserDetail";
import Login from "../components/Login";
import Logout from "../components/Logout";
import ProtectedRoute from "../components/ProtectedRoute";
import OfferListing from "../scenes/offer/OfferListing";


const PageRoutes = () => {
        return (
            <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={<ProtectedRoute/>}>
                            <Route index element={<Dashboard/>}/>
                            <Route path="properties" element={<PropertyListing/>}/>
                            <Route path="users" element={<UserListing/>}/>
                            <Route path="properties/:id" element={<PropertyDetail/>}/>
                            <Route path="properties/add" element={<AddProperty/>}/>
                            <Route path="users/:id" element={<UserDetail/>}/>
                            <Route path="users/add" element={<AddUser/>}/>
                            <Route path="logout" element={<Logout/>}/>
                            <Route path="properties/:id/offers" element={<OfferListing/>}/>
                            <Route path="faq" element={<div>FAQ Page</div>}/>
                    </Route>
            </Routes>
        )
}

export default PageRoutes;