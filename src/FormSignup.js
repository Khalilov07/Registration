import React from 'react'
import useForm from './UseForm'
import validate from './Validateinfo';
import './Form.css'


const FormSignup = ({submitForm}) => {

    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get started with us today! Create your account be fillind out the infomation below.</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input className='form-input' type='text'name='username'placeholder='Enter your username' value={values.username} onChange={handleChange}/>
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input type="email" placeholder="Enter yuor email" name="email" className="form-input" id="email" value={values.email} onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}               
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input type="password" placeholder="Enter yuor password" name="password" className="form-input" id="password" value={values.password} onChange={handleChange} />
                    {errors.password && <p>{errors.password}</p>}               

                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                        Confirm Password
                    </label>
                    <input type="password2" placeholder="Enter yuor password" name="password2" className="form-input" id="password2" value={values.password2} onChange={handleChange} />
                    {errors.password2 && <p>{errors.password2}</p>}               
                </div>
                <button className="form-input-btn" type="submit">Signup</button>
                <span className="form-input-login">
                    Already have an account? Login <a href="#">here</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignup
