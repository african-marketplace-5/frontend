import axios from 'axios'

const axiosWithAuth = () => {

  const token = localStorage.getItem("token")

  return axios.create({
    baseURL: 'https://african-marketplace-5.herokuapp.com/api',
    headers: {
      authorization: token
    }
  })
}

export default axiosWithAuth;