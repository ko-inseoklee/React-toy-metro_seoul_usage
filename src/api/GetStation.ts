
import { axios } from "./Axios";

export const GetStation = async (station: string) => {
    return await axios({isRealtime: false}).get(`/SearchInfoBySubwayNameService/1/10/${station}/`);
}