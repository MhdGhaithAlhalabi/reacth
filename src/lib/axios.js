import Axios from 'axios'

const axios = Axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept':'application/json',
    'Access-Control-Allow-Methods':'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers':'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type',
   'Content-Type': 'application/json',
   'Access-Control-Allow-Origin':'*',
   'Access-Control-Allow-Credentials':'true',
  },
  withCredentials: true
})


export default axios
