import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { GetStation } from "../../api/GetStation";
import { useGetMetroAtoZ } from "../../api/metAtoZ/MetAtoZAPI";
import Header from "../../components/Header";
import { InputStyle, lineStyle } from "./StationInputStyle";

 const MetroAtoZ = () => {
    
    const [station, setStation] = useState<string>("");
    const [line, setLine] = useState<string>("01호선");
    const [result, setResult] = useState({
        SearchInfoBySubwayNameService: {
            RESULT: {
                CODE: "",
                MESSAGE: "",
            },
            list_total_count: 0,
            row: []
        }
    })
    const [resultStation,setResultStation] = useState("");

    const [lines, setLines] = useState<any>([]);
    // const {data, error} = GetStation(line,station);

    const OnClick = async () => {
        const data = GetStation(line,station);
        const foo = await data.then((result) => result.data);
        setResult((prev) => {
            prev.SearchInfoBySubwayNameService.RESULT.CODE = foo["SearchInfoBySubwayNameService"]["RESULT"]["CODE"];
            prev.SearchInfoBySubwayNameService.RESULT.MESSAGE = foo["SearchInfoBySubwayNameService"]["RESULT"]["MESSAGE"];
            for(let i = 0; i < foo["SearchInfoBySubwayNameService"]["row"].length; i++){
                // console.log(foo["SearchInfoBySubwayNameService"]["row"][i]);
                prev.SearchInfoBySubwayNameService.row.concat(foo["SearchInfoBySubwayNameService"]["row"][i]);
                
            }
            return prev;
        });

        setLines((prev: any) => {
            const temp = [];
            for(let i = 0; i < foo["SearchInfoBySubwayNameService"]["row"].length; i++){
                const tmp = foo["SearchInfoBySubwayNameService"]["row"][i]["LINE_NUM"];
                temp.push(tmp);
            }
            prev = temp;
            return prev;
        })
        console.log("line!");
        console.log(lines);
        
        setResultStation(foo["SearchInfoBySubwayNameService"]["row"][0]["STATION_NM"]);
        setStation("");
    }

    const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const {target: {value}} = e;
        setStation(value);
    }

    const OnSelectLine = (e:any) => {
        const {target: {value}} = e;
        setLine(value);
    }

    return (
        <div>
            <Header />
            <form >
                {/* <select name="lines" onChange={OnSelectLine}>
                    <option value="01호선">01호선</option>
                    <option value="1호선">1호선</option>
                    <option value="2호선">2호선</option>
                    <option value="3호선">3호선</option>
                    <option value="4호선">4호선</option>
                    <option value="5호선">5호선</option>
                    <option value="6호선">6호선</option>
                    <option value="7호선">7호선</option>
                    <option value="8호선">8호선</option>
                    <option value="9호선">9호선</option>
                </select> */}
                <input style={InputStyle}type="text" name="station" onChange={OnChange} value={station} placeholder="역을 제외하고 입력해주세요(ex. 강남역 -> 강남)"/>
                <input type="button" value="Click me" onClick={OnClick}/>
            </form>
            <div>
                <div style={lineStyle}>
                    검색결과: {resultStation}역
                </div>
                {lines.map((e:any) =>{
                    return (
                        <div style={lineStyle}>
                            {e}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default MetroAtoZ;