import {BrowserRouter, Route, Routes} from "react-router-dom";
import EstablishmentListScreen from "../../panels/establishment-list/EstablishmentListScreen";
import EstablishmentCardScreen from "../../panels/establishment-card/EstablishmentCardScreen";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/establishment-list"} element={<EstablishmentListScreen/>}/>
                <Route path={"/establishment-card"} element={<EstablishmentCardScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router