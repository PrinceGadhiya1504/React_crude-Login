import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const Update = () => {

    
  // const [data, setData] = useState([])
  const { id } = useParams();

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    username: ''
  })

  useEffect(() => {
    axios.get('http://localhost:1000/student/' + id)
      .then(res => setValues(res.data))
      .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate();


  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put('http://localhost:1000/student/' + id, values)
      .then(res => {
        console.log(res);
        navigate('/login');
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
        <div className="card d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
                <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                    <h1>Update From</h1>
                    <form onSubmit={handleUpdate}>
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className='col-md-9 col-lg-7 col-xl-5'>
                                <div className='mb-3'>
                                    <label  >Name : </label>
                                    <input type='text' name='name' value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} className='form-control' placeholder='Enter Name' autoComplete='off' />
                                </div>
                                <div className='mb-3'>
                                    <label  >Course : </label>
                                    <input type='text' name='course' value={values.course} onChange={e => setValues({ ...values, course: e.target.value })} className='form-control' placeholder='Enter Course' autoComplete='off' />
                                </div>
                                <div className='mb-3'>
                                    <label  >Username : </label>
                                    <input type='text' name='username' value={values.username} onChange={e => setValues({ ...values, username: e.target.value })} className='form-control' placeholder='Enter Username' autoComplete='off' />
                                </div>
                                <div className='mb-3'>
                                    <label  >Password : </label>
                                    <input type='text' name='password' value={values.password} onChange={e => setValues({ ...values, password: e.target.value })} className='form-control' placeholder='Enter Password' autoComplete='off' />
                                </div>
                                <div className='mb-3'>
                                    <label  >Conform Password : </label>
                                    <input type='text' name='conformpassword' value={values.conformpassword} onChange={e => setValues({ ...values, conformpassword: e.target.value })} className='form-control' placeholder='Enter Conform Password' autoComplete='off' />
                                </div>
                                <div className='mb-3'>
                                    <button className='btn btn-success'>Update</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Update