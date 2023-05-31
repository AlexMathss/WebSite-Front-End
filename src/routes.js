import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Principal from "./Pages/Principal";

function RoutesApp(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;