import {BrowserRouter, Route, Routes} from "react-router-dom";
import EstablishmentListScreen from "../screen/establishment-list/EstablishmentListScreen.jsx";
import React from "react";

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path={"/establishment-list"} element={<EstablishmentListScreen/>}/>
            <Route path={"*"} element={<div>Not found..</div>}/>
        </Routes>
    </BrowserRouter>
}

export default Router