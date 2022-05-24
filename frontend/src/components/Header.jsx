import { FaSignInAlt, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
          <div className='logo'>
            <Link to='/'>Grype</Link>
          </div>
          <ul>
              <li>
                  <Link to='/login'>
                    <FaSignInAlt />
                  </Link>
              </li>
              <li>
                  <Link to='/register'>
                    <FaUserPlus />
                  </Link>
              </li>
          </ul>
        </header>
      )
}

export default Header