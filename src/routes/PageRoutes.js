import {Route, Routes} from "react-router-dom";
import PropertyListing from "../scenes/property/PropertyListing";
import Dashboard from "../scenes/Dashboard";
import UserListing from "../scenes/user/UserListing";
import PropertyDetail from "../scenes/property/PropertyDetail";
import AddProperty from "../scenes/property/AddProperty";

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/properties" element={<PropertyListing/>}/>
            <Route path="/users" element={<UserListing/>}/>
            <Route path="/properties/:id" element={<PropertyDetail/>}/>
            <Route path="/properties/add" element={<AddProperty/>}/>
            <Route path="/bar" element={<div>Bar Page</div>}/>
            <Route path="/pie" element={<div>Pie Page</div>}/>
            <Route path="/line" element={<div>Line Page</div>}/>
            <Route path="/faq" element={<div>FAQ Page</div>}/>
            <Route path="/calendar" element={<div>Calendar Page</div>}/>
            <Route path="/geography" element={<div>Geography Page</div>}/>
        </Routes>)
}

export default PageRoutes;