import * as api from '../api/index'
import { CREATE,READ, UPDATE, DELETE } from '../actionTypes/actionTypes';
// import { createSelectorHook } from 'react-redux';

export const add_task = (task) => async (dispatch) => {
    try {
        const { data } = await api.add_task(task)
        dispatch({type:CREATE,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const read_task = () => async (dispatch) => {
    try {
        const { data } = await api.read_task()
        console.log(data)
        dispatch({type:READ,payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const delete_task = (id) => async (dispatch) => {
    try {
        await api.delete_task(id)
        dispatch({type:DELETE,payload:id})
    } catch (error) {
        console.log(error)
    }
}