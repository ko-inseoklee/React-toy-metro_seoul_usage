import useSWR from "swr"
import { GetStation } from "../GetStation";



export const useGetMetroAtoZ = (line: string, station: string) => {
    // const {data: code, error: e} = GetStation(line,station);

    const url = `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_METRO_KEY}/json/SearchFirstAndLastTrainbyLineServiceNew/1/5/${line}/1/1/${/* code */line}`;
    const fetcher = () => fetch(url).then(r => r.json());
    const {data, error} = useSWR(url,fetcher);
    return {data, error};
}