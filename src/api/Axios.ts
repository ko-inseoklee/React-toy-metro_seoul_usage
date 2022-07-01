import Axios from "axios";

export const axios = Axios.create({
    baseURL: `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_METRO_KEY}/json/`
});