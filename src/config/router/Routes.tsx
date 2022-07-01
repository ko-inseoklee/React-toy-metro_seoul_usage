import Home from "../../pages/home/Home";
import MetroAtoZ from "../../pages/metroAtoZ";
import MetroCostStat from "../../pages/metroCostStat";
import MetroPopulationStat from "../../pages/metroPopulationStats";

const Routers = {
    HOME: {
        path: "/",
        element: <Home />
    },
    METROA2Z: {
        path: "/metro-first-last",
        element: <MetroAtoZ />
    },
    POPULATIONSTAT: {
        path: "/metro-population-stat",
        element: <MetroPopulationStat />
    },
    FREEORCASH: {
        path: "/metro-cost-stat",
        element: <MetroCostStat />
    }
}

export default Routers;