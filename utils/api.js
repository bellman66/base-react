import useSWR from "swr"
import axios from "axios"

// Api Url
const LIVE_API_URL = 'http://'
const TEST_API_URL = 'http://localhost:8080'
const CURRENT_API_URL = TEST_API_URL 

// Default Fetcher
const getFetcher = (url) => axios.get(url).then(res => res.data)
const postFetcher = (url) => axios.post(url).then(res => res.data)

// 추가적으로 제작할시 해당 모형으로 제작. ( Default는 Servercheck )
// Custom 제작시 Fetcher를 제작해서 사용
export default function useServerCheck() {
    return useSWR(CURRENT_API_URL + "/api/v1/server-check", getFetcher);
}
