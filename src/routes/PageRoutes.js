import {Route, Routes} from "react-router-dom";
import PropertyListing from "../scenes/property/PropertyListing";

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<div>Home Page</div>}/>
            <Route path="/properties" element={<PropertyListing/>}/>
            <Route path="/contacts" element={<div>Contacts Page</div>}/>
            <Route path="/invoices" element={<div>Invoices Page</div>}/>
            <Route path="/form" element={<div>Form Page</div>}/>
            <Route path="/bar" element={<div>Bar Page</div>}/>
            <Route path="/pie" element={<div>Pie Page</div>}/>
            <Route path="/line" element={<div>Line Page</div>}/>
            <Route path="/faq" element={<div>FAQ Page</div>}/>
            <Route path="/calendar" element={<div>Calendar Page</div>}/>
            <Route path="/geography" element={<div>Geography Page</div>}/>
        </Routes>)
}

export default PageRoutes;