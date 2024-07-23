// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const navbarStyle = isDarkTheme ? 'navbar-dark' : 'navbar'
      const listItemStyle = isDarkTheme ? 'list-item-dark' : 'list-item'

      return (
        <nav className={navbarStyle}>
          <img
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
            }
            alt="website logo"
            className="logo"
          />
          <ul className="list-container">
            <Link to="/" className="link">
              <li className={listItemStyle}>Home</li>
            </Link>
            <Link to="/about" className="link">
              <li className={listItemStyle}>About</li>
            </Link>
          </ul>
          <button
            type="button"
            className="button"
            onClick={toggleTheme}
            data-testid="theme"
          >
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
              }
              alt="theme"
              className="logo-theme"
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
