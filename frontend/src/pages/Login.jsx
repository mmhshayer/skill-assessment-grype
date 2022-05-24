import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

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
        <FaSignInAlt /> Sign In
        </h1>
        <p>Welcome Come on In!</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>

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
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login