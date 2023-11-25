import React, { useState } from 'react'
import registration from '../images/Registration.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const [values, setValues] = useState({
        name: '',
        course: '',
        username: '',
        password: '',
        conformpassword: ''
    })

    const [error, setError] = useState({
        status: false,
        type: '',
        msg: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const actualData = {
            name: data.get('name'),
            course: data.get('course'),
            username: data.get('username'),
            password: data.get('password'),
            conformpassword: data.get('conformpassword'),
        }
        if (actualData.name && actualData.course && actualData.username && actualData.password && actualData.conformpassword) {
            if (actualData.password === actualData.conformpassword) {
                axios.post("http://localhost:1000/student", values)
                .then(res => navigate('/login'))
                .catch(err => console.log(err))
            }
            else {
                setError({ status: true, msg: "Password does not match", type: "Error" })

            }
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
                                <img src={registration} alt="..." style={{ height: 200, width: 200 }} />
                            </div>
                            <div className='col-md-9 col-lg-7 col-xl-5'>
                                <div className='mb-3'>
                                    <label  >Name : </label>
                                    <input type='text' name='name' onChange={e => setValues({ ...values, name: e.target.value })} className='form-control' placeholder='Enter Name' autoComplete='off' />
                                </div>
                                <div className='mb-3'>
                                    <label  >Course : </label>
                                    <input type='text' name='course' onChange={e => setValues({ ...values, course: e.target.value })} className='form-control' placeholder='Enter Course' autoComplete='off' />
                                </div>
                                <div className='mb-3'>
                                    <label  >Username : </label>
                                    <input type='text' name='username' onChange={e => setValues({ ...values, username: e.target.value })} className='form-control' placeholder='Enter Username' autoComplete='off' />
                                </div>
                                <div className='mb-3'>
                                    <label  >Password : </label>
                                    <input type='password' name='password' onChange={e => setValues({ ...values, password: e.target.value })} className='form-control' placeholder='Enter Password' autoComplete='off' />
                                </div>
                                <div className='mb-3'>
                                    <label  >Conform Password : </label>
                                    <input type='password' name='conformpassword' onChange={e => setValues({ ...values, conformpassword: e.target.value })} className='form-control' placeholder='Enter Conform Password' autoComplete='off' />
                                </div>
                                {error.status ? <div className='mb-3 alert alert-danger'>{error.type}, {error.msg}</div> : '' }
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

export default Register