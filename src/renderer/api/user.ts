// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
type Data = {
  name: string
}
const base_url='http://localhost:8000/api'

export const loginRequest = (body:any) => {
  return axios.post('http://localhost:8000/api/.user/login', body)
    .then( (res) => res.data)
}

export const checkRole = (role:string, token:string) => {
  return axios.post('http://localhost:8000/api/.user/checkRole', {role:role}, {
    headers: {
      Authorization: token
    }
  })
    .then( (res) => {
      return res
    })
    .catch( (err) => {
      return err
    })
}

export const inscriptionRequest = (body:any) => {
  return axios.post('http://localhost:8000/api/inscription', body)
    .then( (res) => {
      return res
    })
    .catch( (err) => {
      return err
    })
}
export const getUsers=(token:string) => axios.get(`${base_url}/users`,{headers:{Authorization:token}}).then(res=>res.data);
export const deleteUserRequest = (id:number) => axios.delete('http://localhost:8000/api/.user/delete/?id='+id, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  })
    .then((res) => res.data)


export const valideUserRequest = (token:string,id:any) => 
  axios.post('http://localhost:8000/api/inscription/valide-user/', {id},{headers:{Authorization:token}})
    .then((res) => res.data)




// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

