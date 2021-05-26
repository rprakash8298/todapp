import axios from 'axios'

const url = 'http://localhost:3000/task'

export const add_task = (task) => axios.post(`${url}/ADD_TASK`, task)
export const read_task = () => axios.get(`${url}/READ_TASK`)
export const delete_task = (id) => axios.delete(`${url}/DELETE_TASK/${id}`)
