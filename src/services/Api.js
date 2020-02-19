/* eslint-disable quotes */
import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://localhost:3000`, // replace with API url + env variable
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
