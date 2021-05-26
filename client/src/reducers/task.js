import { CREATE,READ, UPDATE, DELETE } from '../actionTypes/actionTypes';

export default (tasks = [], action) => {
    // console.log(action.payload,'hello')
    switch (action.type) {
    case READ:
            return action.payload;
    case CREATE:
            return [...tasks,action.payload] ;
    case DELETE:
      return tasks.filter((task) => task._id !== action.payload);
    default:
      return tasks;
  }
};