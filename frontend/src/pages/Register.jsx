import { useState, useEffect } from 'react';
import { FaUserPlus } from 'react-icons/fa';

function Register() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    role: '',
  });

  const { first_name, last_name, email, password, password2, role } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const onSubmit = (e) => {}

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUserPlus /> Register
        </h1>
        <p>Sign up with Us</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input 
              type="text"
              className='form-control'
              id='first_name'
              placeholder='First Name'
              value={first_name}
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <input
              type="text"
              className='form-control'
              id='last_name'
              placeholder='Last Name'
              value={last_name}
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <input
              type="email"
              className='form-control'
              id='email'
              placeholder='Email'
              value={email}
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <input
              type="password"
              className='form-control'
              id='password'
              placeholder='Password'
              value={password}
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <input
              type="password"
              className='form-control'
              id='password2'
              placeholder='Confirm Password'
              value={password2}
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <input
              type="text"
              className='form-control'
              id='role'
              placeholder='Role'
              value={role}
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register