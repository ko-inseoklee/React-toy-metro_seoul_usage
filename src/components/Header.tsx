import React, { useState } from "react";
import { Link } from "react-router-dom";
import Routers from "../config/router/Routes";
import { ButtonStyle, HeaderComponentStyle, HeaderStyle } from "./HeaderStyle";



const Header = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const ToggleHeader = () => {
        setIsExpanded((prev) => !prev);
    }

    return (
        isExpanded?
        (<div style={HeaderStyle}>
            <Link to={Routers.HOME.path}>
                <div 
                    style={HeaderComponentStyle}>
                    <h1>HOME</h1>
                </div>
            </Link>
            <Link to={Routers.METROA2Z.path}>
                <div 
                    style={HeaderComponentStyle}>
                    역별 첫, 막차 시간
                </div>
            </Link>
            <Link to={Routers.POPULATIONSTAT.path}>
                <div 
                    style={HeaderComponentStyle}>
                    역별 이용 인구
                </div>
            </Link>
            <Link to={Routers.FREEORCASH.path}>
                <div 
                    style={HeaderComponentStyle}>
                    역별 유,무임 승차 인원
                </div>
            </Link>
        <input style={ButtonStyle} type="button" value="숨기기" onClick={ToggleHeader} />
        </div>
        )
        : (   
            <div style={HeaderStyle}>
                <input style={ButtonStyle} type="button" value="펼치기" onClick={ToggleHeader} />
            </div>
        )
    );
};

export default Header;