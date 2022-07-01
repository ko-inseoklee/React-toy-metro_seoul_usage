import { Link } from "react-router-dom";
import Routers from "../config/router/Routes";
import { HeaderComponentStyle, HeaderStyle } from "./HeaderStyle";



const Header = () => {
    return (
        <div style={HeaderStyle}>
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
        </div>
    );
};

export default Header;