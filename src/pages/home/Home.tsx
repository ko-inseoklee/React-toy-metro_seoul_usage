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
                <input style={HomeInputStyle} type="button" value="역별 노선 현황" name={Routers.METROA2Z.path} onClick={onClick}/>
                <input style={HomeInputStyle} type="button" value="실시간 도착 정보" name={Routers.POPULATIONSTAT.path} onClick={onClick}/>
            </div>
        </div>
    );
}

export default Home;