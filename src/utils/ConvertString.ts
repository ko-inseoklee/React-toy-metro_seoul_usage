export const ConvertLine = (str: String) => {
    return str.substring(0,1);
}

export const ConvertDay = (str: String) => {
    switch(str) {
        case "평일":
            return 1;
        case "토요일":
            return 2;
        case "휴일/일요일":
            return 3;
        default:
            return 3;
    }
}