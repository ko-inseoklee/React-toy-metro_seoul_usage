import { Divider } from "@chakra-ui/react";
import React, { MouseEventHandler } from "react";
import { Link, useNavigate } from "react-router-dom";
import Routers from "../../config/router/Routes";
import { HomeBodyStyle, HomeHeaderStyle, HomeInputStyle } from "./HomeStyle";



const Home = () => {
    const navigate = useNavigate();

    const onClick = (event: React.MouseEvent<HTMLInputElement>) => {
        navigate(event.currentTarget.name);
        
    }

    return (
        <div>
            <div style={HomeHeaderStyle}>
                Contents
            </div>
            <Divider />
            <div style={HomeBodyStyle}>
                <input style={HomeInputStyle} type="button" value="역별 첫, 막차 시간" name={Routers.METROA2Z.path} onClick={onClick}/>
                <input style={HomeInputStyle} type="button" value="역별 이용 인구" name={Routers.POPULATIONSTAT.path} onClick={onClick}/>
                <input style={HomeInputStyle} type="button" value="역별 유,무임 승차 인원" name={Routers.FREEORCASH.path} onClick={onClick}/>
            </div>
        </div>
    );
}

export default Home;