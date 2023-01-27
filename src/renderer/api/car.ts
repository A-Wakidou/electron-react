import axios from 'axios'
const base_url = "http://localhost:8000/api/.car";
export const getCars = (token: string) => axios.get(`${base_url}`, { headers: { Authorization: token } }).then(res => res.data);
export const addCarRequest = (form: any) => axios.post(`${base_url}`, form,
    { headers: { Authorization: localStorage.getItem('token') } }
).then((res) => res.data)
export const deleteCarRequest = (id:number) =>axios.delete(`${base_url}/${id}`, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  })
    .then( (res) =>res.data)
