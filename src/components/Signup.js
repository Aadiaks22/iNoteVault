import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            //save the authtoken and rediect
            localStorage.setItem('token', json.authtoken);
            navigate('/');
            props.showAlert("Account Created Successfully", "success")
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
                    <div className="row justify-content-center">
                        <div className="col-10 col-xxl-11">
                            <div className="card border-light-subtle shadow-sm">
                                <div className="row g-0">
                                    <div className="col-12 col-md-6">
                                        <img className="img-fluid rounded-start w-100 h-100 object-fit-cover" loading="lazy" src="https://bootstrapbrain.com/demo/components/logins/login-8/assets/img/logo-img-1.webp" alt="Welcome back you've been missed!" />
                                    </div>
                                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                                        <div className="col-12 col-lg-11 col-xl-10">
                                            <div className="card-body p-3 p-md-4 p-xl-5">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="mb-4">
                                                            <h4 className="text-center">New to iNoteVault?</h4><br />
                                                            <h5 className='text-center'>Create a new account here!</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <form onSubmit={handleSubmit}>
                                                    <div className="row gy-3 overflow-hidden">
                                                        <div className="col-12">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" className="form-control" name='name' id="name" placeholder="Name" onChange={onChange} aria-describedby="nameHelp" required />
                                                                <label htmlFor="name" className="form-label">Name</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-floating mb-3">
                                                                <input type="email" className="form-control" name='email' id="email" placeholder="name@example.com" onChange={onChange} aria-describedby="emailHelp" required />
                                                                <label htmlFor="email" className="form-label">Email address</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-floating mb-3">
                                                                <input type="password" className="form-control" name='password' id="password" placeholder="Password" onChange={onChange} minLength={5} required />
                                                                <label htmlFor="password" className="form-label">Password</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-floating mb-3">
                                                                <input type="password" className="form-control" name='cpassword' id="cpassword" placeholder="Confirm Password" onChange={onChange} minLength={5} required />
                                                                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="d-grid">
                                                                <button className="btn btn-dark btn-lg" type="submit">Sign up</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <p className="mb-0 mt-3 text-secondary text-center">Already have an account? <Link to="/login" className="link-primary text-decoration-none">Log in</Link></p>
                                                    </div>
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

export default Signup
