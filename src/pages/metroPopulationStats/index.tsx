import React, { useState } from "react";
import { MetArrival } from "../../api/metPopulationStat/MetArrival";
import Header from "../../components/Header";
import { MetPopulationStyle } from "./MetPopulationStyle";

const MetroPopulationStat = () => {

    const [station, setStation] = useState("");
    const [arrivalData, setArrivalData] = useState<any[]>([]);
    const [error,setError] = useState(false);

    const OnChange = (event: any) => {
        setStation(event.target.value);
    }

    const OnClick = async (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        const data = await MetArrival(station).then((result) => result.data);
        console.log(data);

        try{
            const errorCheck = data["realtimeArrivalList"];
            setArrivalData([...errorCheck]);
            // console.log(arrivalData);
            setError(false);
        } catch(e){
            console.log(e);
            setArrivalData(["해당하는 결과가 없습니다."]);
            setError(true);
        }
    }

    return (
        <div style={MetPopulationStyle}>
            <Header />
            <div>
                <div style={{
                    margin:10
                }}>
                    실시간 도착 정보
                </div>
                <div>
                    <input 
                        onChange={OnChange}
                        style={{
                            width:500,
                            margin:10
                        }}
                        value={station}
                        type="text" 
                        placeholder="검색할 역명을 역 글자를 제외 후 입력하세요. (ex. 강남역 -> 강남)" 
                    />
                    <input type="button" value="검색" onClick={OnClick} />
                </div>
                <div style={{
                    marginTop:30,
                    marginLeft:10
                }}>
                    검색 결과
                    <div>
                        {arrivalData.map((e) => {
                            return error ? 
                                    (<div> 조회 결과가 없습니다.</div>)
                                    :
                                    (<div>
                                        {e["bstatnNm"]}행: {e["arvlMsg2"]} {e["barvlDt"]}초 전
                                    </div>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MetroPopulationStat;