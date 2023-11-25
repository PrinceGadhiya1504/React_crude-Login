import React, { useEffect, useState } from 'react'
import login from '../images/Login.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [data, setData] = useState()
  const [error, setError] = useState({
    status: false,
    type: '',
    msg: ''
  })
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:1000/student')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    const val = new FormData(e.currentTarget);
    const actualData = {
      username: val.get('username'),
      password: val.get('password'),
    }
    if (actualData.username && actualData.password) {
      data.map((d) => {
        if (actualData.username === d.username && actualData.password === d.password) {
          navigate(`/home/${d.id}`);
          console.log('done');
        }
        return 0;
      })
    } else {
      setError({ status: true, msg: "All fields are require", type: "Error" })
    }

  }
  return (
    <>
      <div className="card d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
          <h1>Registration From</h1>
          <form onSubmit={handleSubmit}>
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className='col-md-8 col-lg-5 col-xl-4'>
                <img src={login} alt="..." style={{ height: 200, width: 200 }} />
              </div>
              <div className='col-md-9 col-lg-7 col-xl-5'>
                <div className='mb-3'>
                  <label  >Username : </label>
                  <input type='text' name='username' className='form-control' placeholder='Enter Username' autoComplete='off' />
                </div>
                <div className='mb-3'>
                  <label  >Password : </label>
                  <input type='password' name='password' className='form-control' placeholder='Enter Password' autoComplete='off' />
                </div>
                {error.status ? <div className='mb-3 alert alert-danger'>{error.type}, {error.msg}</div> : ''}
                <div className='mb-3'>
                  <button className='btn btn-success'>Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login