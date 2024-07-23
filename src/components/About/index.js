// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutStyle = isDarkTheme ? {backgroundColor: '#000000'} : null
      const headingStyle = isDarkTheme ? {color: '#ffffff'} : null
      return (
        <>
          <Navbar />
          <div className="about-bg" style={aboutStyle}>
            <div>
              <img
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
                }
                alt="about"
                className="about-image"
              />
              <h1 className="heading" style={headingStyle}>
                About
              </h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
