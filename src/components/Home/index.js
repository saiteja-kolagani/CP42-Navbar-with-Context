// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgStyle = isDarkTheme ? {backgroundColor: ' #000000'} : null
      const headingStyle = isDarkTheme ? {color: '#ffffff'} : null
      return (
        <>
          <Navbar />
          <div className="home-bg" style={bgStyle}>
            <div>
              <img
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
                }
                alt="home"
                className="home-image"
              />
              <h1 className="heading" style={headingStyle}>
                Home
              </h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
