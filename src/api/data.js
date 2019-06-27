import axios from 'axios'
//注意写法
export  const getSnInfo = (data) => {
    return axios.post( '/device/Verify/checkDevice', data)
  }


