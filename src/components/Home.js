import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const Home = () => {
  const [data, setData] = useState([])
  const {id} = useParams();

  useEffect(() => {
      axios.get('http://localhost:1000/student/' +   id)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h3>Details of Users</h3>
        <div className='mb-2'>
          <strong>Name : </strong>{data.name}
        </div>
        <div className='mb-2'>
          <strong>Course : </strong>{data.course}
        </div>
        <div className='mb-2'>
          <strong>Username : </strong>{data.username}
        </div>
        <div className='mb-2'>
          <strong>Password : </strong>{data.password}
        </div>
        <Link to={`/update/${id}`} className='btn btn-success me-2'>Edit</Link>
        <Link to="/login" className='btn btn-primary'>Back</Link>
      </div>
    </div>
  )
}

export default Home