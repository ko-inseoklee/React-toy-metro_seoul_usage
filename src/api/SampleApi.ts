import useSWR from "swr";

const url = 'http://openapi.seoul.go.kr:8088/7753535166746a72343364496a6951/json/lostArticleInfo/1/15/';

const fetcher = () => fetch(url).then(r => r.json())

export const useSample = () => {
    const {data, error} = useSWR(url, fetcher);

    return {data, error};
}

export default fetcher;