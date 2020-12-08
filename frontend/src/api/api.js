import axios from 'axios'


export const login = data => {
    return axios
      .post('/login', data)
      .then(response => {
          if(response.data.token){
            localStorage.setItem('usertoken', response.data.token)
          }
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
}

export const register = data => {
    return axios
     .post('/signup', data)
     .then(response => {
        if(response.data.token){
            localStorage.setItem('usertoken', response.data.token)
          }
       return response.data
     })
     .catch(err => {
       console.log(err)
     })
 }
 

 export const getUser = (data,token)=> {
  return axios
  .get(`/user/user_id=${data}`,{headers: {
    Authorization: `${token}`
  }})
  .then(response => {
    return response.data
  })
  .catch(err => {
    console.log(err)
  })
 }