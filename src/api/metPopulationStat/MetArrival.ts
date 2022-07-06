import {axios} from "../Axios"

export const MetArrival = async (station:string) => {
    return await axios({isRealtime:true}).get(`/realtimeStationArrival/0/5/${station}`);
    
}