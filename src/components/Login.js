import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        //console.log(json)
        if (json.success) {
            //save the authtoken and rediect
            localStorage.setItem('token', json.authToken);
            localStorage.setItem('username', json.username);
            props.showAlert("Login Successfully", "success");
            navigate('/');
        }
        else {
            props.showAlert("Invalid Credentials", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <div className='container'>
            <section className="bg-light p-2">
                <div className="container">
                    <h6 className='text-center mb-4'>Welcome Back! Unlock your notes and continue your journey with iNoteVault. Access your secure, organized workspace and stay productive!</h6>
                    <div className="row justify-content-center">
                        <div className="col-10 col-xxl-11">
                            <div className="card border-light-subtle shadow-sm">
                                <div className="row g-0">
                                    <div className="col-12 col-md-6">
                                        <img className="img-fluid rounded-start w-100 h-100 object-fit-cover" loading="lazy" src="https://bootstrapbrain.com/demo/components/logins/login-8/assets/img/logo-img-1.webp" alt="Welcome back you've been missed!" />
                                    </div>
                                    <div className="col-12 col-md-6 d-flex justify-content-center">
                                        <div className="col-12 col-lg-11 col-xl-10">
                                            <div className="card-body mt-2 p-2 p-md-4 p-xl-5">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="my-4">
                                                            <h5 className="text-center mt-3">Log in to access your iNoteVault</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <form onSubmit={handleSubmit}>
                                                    <div className="row gy-2 overflow-hidden">
                                                        <div className="col-12">
                                                            <div className="form-floating mb-3">
                                                                <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" required />
                                                                <label htmlFor="email" className="form-label">Email</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-floating mb-3">
                                                                <input type="password" className="form-control" name="password" id="password" placeholder="Password" value={credentials.password} onChange={onChange} required />
                                                                <label htmlFor="password" className="form-label">Password</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="d-grid">
                                                                <button className="btn btn-dark btn-lg" type="submit">Log in now</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className='col-12 mt-3 text-center'>
                                                    <p>Don't have an account?<Link to="/signup"> SignUp</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
