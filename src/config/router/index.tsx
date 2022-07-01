import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Routers from "./Routes";

const MetroRouter = () => {
    return (
        <Routes>
            <Route path={Routers.HOME.path} element = {Routers.HOME.element}></Route>
            <Route path={Routers.METROA2Z.path} element = {Routers.METROA2Z.element}></Route>
            <Route path={Routers.POPULATIONSTAT.path} element = {Routers.POPULATIONSTAT.element}></Route>
            <Route path={Routers.FREEORCASH.path} element = {Routers.FREEORCASH.element}></Route>
        </Routes>
    )
}

export default MetroRouter;