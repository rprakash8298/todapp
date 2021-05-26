import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add_task,read_task,delete_task} from './actions/tasks'

function App() {

  const [task, setTask] = useState({ name: '', status: false })
  // const [filters, setFilters] = useState(false)
  const dispatch = useDispatch()
  const [filteredData,setFilteredData] = useState([])
  const datas = useSelector((state) => state.task)
  console.log(datas)
  console.log(filteredData)
  const inputHandler = (e) => {
    setTask({
      ...task,
      [e.target.name]:e.target.value
    })
  }
  const onChangeHandler = (e) => {
    if (task.status) {
      setTask({
        ...task,
        status:false
      })
      
    } else {
      setTask({
        ...task,
        status:true
      })
    }
  }
  

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(task)
    dispatch(add_task(task))
  }

  const filterData = (type) => {
    const updatedFilter = datas.filter((el) => {
      return el.status === type
    })
    setFilteredData(updatedFilter)
  }
  useEffect(() => {
    dispatch(read_task())
  }, [dispatch,filteredData])
  
  console.log(task)
  return (
    <>
    <div className="container">
      <div className="row text-center">
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">todo</label>
            <input type="text" class="form-control" name="name" value={task.name} onChange= {inputHandler } id="exampleFormControlInput1" placeholder="add task" />
            
          </div>
             <div class="mb-3">
              <label for="taskStatus" class="form-label">Status</label>
            <input type="checkbox" name="status" value={task.status} onChange= {onChangeHandler } id="taskStatus" />
            
          </div>
          <button type="submit" className="btn btn-info">submit</button>
        </form>
      </div>
      <div className="row mt-5">
        <div className="col text-center">
            <button type="button" onClick={() => setFilteredData(datas)} >All</button>
          <button type="button" onClick={() =>filterData(true)} >Completed</button>
          <button type="button" onClick={() =>filterData(false)} >Remaining</button>
            
        </div>
      </div>
      <div className="row mt-5">
          <div className="col">
            {filteredData.map((el) => {
              return (
                <ul key={el._id}>
                  <li>{el.name } <button className="btn mx-5 btn-danger rounded-pill" onClick={() =>dispatch(delete_task(el._id))}>DELETE</button></li>
                </ul>
              )
            }) }
          </div>
      </div>
    </div>
    </>
  );
}

export default App;
