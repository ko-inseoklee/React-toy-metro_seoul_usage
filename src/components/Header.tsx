import { background, color, Divider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Routers from "../config/router/Routes";
import { colors } from "../theme/MetroThemes";
import { ButtonStyle, HeaderComponentStyle, HeaderStyle, HideHeaderStyle, MinHeaderStyle } from "./HeaderStyle";



const Header = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    const [isExpanded, setIsExpanded] = useState(true);

    const ToggleHeader = () => {
        setIsExpanded((prev) => !prev);
    }

    useEffect(()=> {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize',handleResize);
        }
    },[]);

    return (
        isExpanded?
        (<div style={{
            backgroundColor: colors.primary[700],
            height: "100vh",
            width:"250px",
            justifyContent: "center",
            alignItems: "center",
            display: "block"
        }}>
            <Link to={Routers.HOME.path}>
                <div 
                    style={HeaderComponentStyle}>
                    <h1>HOME</h1>
                </div>
            </Link>
            <Link to={Routers.METROA2Z.path}>
                <div 
                    style={HeaderComponentStyle}>
                    역별 노선 현황
                </div>
            </Link>
            <Link to={Routers.POPULATIONSTAT.path}>
                <div 
                    style={HeaderComponentStyle}>
                    실시간 도착 정보
                </div>
            </Link>
            <div style={ButtonStyle}>
                <div style={HeaderComponentStyle} onClick={ToggleHeader}> 숨기기 </div>
            </div>
        </div>
        )
        : (   
            <div style={HideHeaderStyle}>
                <div style={ButtonStyle}>
                    <div style={HeaderComponentStyle} onClick={ToggleHeader}> 펼치기 </div>
                </div>
            </div>
        )
    );
};

export default Header;