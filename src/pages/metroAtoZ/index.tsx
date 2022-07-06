import React, { useEffect, useState } from "react";
import { GetStation } from "../../api/GetStation";
import Header from "../../components/Header";
import { InputStyle, lineStyle, MetroAtoZStyle } from "./StationInputStyle";

const MetroAtoZ = () => {
    
    const [station, setStation] = useState<string>("");
    const [resultStation,setResultStation] = useState("");
    const [lines, setLines] = useState<any>([]);

    const OnClick = async () => {
        const data = GetStation(station == "서울" ? "서울역" : station);
        const foo = await data.then((result) => result.data);

        try{
            const errorContact = foo["SearchInfoBySubwayNameService"]["row"];
            /* setLines((prev: any) => {

                //? BEFORE: 고전적 방식의 데이터 처리
                 const temp = [];
                for(let i = 0; i < foo["SearchInfoBySubwayNameService"]["row"].length; i++){
                    const tmp = foo["SearchInfoBySubwayNameService"]["row"][i]["LINE_NUM"];
                    temp.push(tmp);
                } 
                //? AFTER: Spread 연산자를 활용한 데이터 처리
                const temp = [...foo["SearchInfoBySubwayNameService"]["row"]];
                
                prev = temp;
                return prev;
            }); */
            setLines([...foo["SearchInfoBySubwayNameService"]["row"]]);

            setResultStation(foo["SearchInfoBySubwayNameService"]["row"][0]["STATION_NM"] == "서울역" ? foo["SearchInfoBySubwayNameService"]["row"][0]["STATION_NM"] :` ${foo["SearchInfoBySubwayNameService"]["row"][0]["STATION_NM"]}역`);
        } catch(e){
            console.log(e);
            setLines(["해당 역이 없습니다."]);
            setResultStation("조회 결과가 없습니다.");
        }
        
        setStation("");
    }

    const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {target: {value}} = e;
        setStation(value);
    }

    return (
        <div style={MetroAtoZStyle}>
            <Header />
            <form >
                <input style={InputStyle}type="text" name="station" onChange={OnChange} value={station} placeholder="역을 제외하고 입력해주세요(ex. 강남역 -> 강남)"/>
                <input type="button" value="검색" onClick={OnClick}/>
            </form>
            <div>
                <div style={lineStyle}>
                    검색결과: {resultStation}
                </div>
                {lines.map((e:any) =>{
                    return (
                        <div style={lineStyle}>
                            {e["LINE_NUM"]}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default MetroAtoZ;