import Axios from "axios";

export const axios = (
    {
        isRealtime
    }: 
    {
        isRealtime:boolean,
    }
    ) => Axios.create({
    baseURL: isRealtime? `http://swopenapi.seoul.go.kr/api/subway/${process.env.REACT_APP_METRO_REALTIME_KEY}/json/`:`http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_METRO_KEY}/json/`,

});