
import { axios } from "./Axios";

export const GetStation = async (line: string, station: string) => {
    const url = `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_METRO_KEY}/json/SearchInfoBySubwayNameService/1/10/${station}/`;

    return await axios.get(`/SearchInfoBySubwayNameService/1/10/${station}/`);
    /* const fetcher = () => fetch(url).then(r => r.json());
    const {data, error} = useSWR(url, fetcher);

    const result = data["SearchInfoBySubwayNameService"]["row"].filter((s:any) => s.LINE_NUM == line);
    
    if(result.length != 0){
        return result["STATION_CD"];
    } else{
        return "";
    } */
}