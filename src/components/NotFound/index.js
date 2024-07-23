// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgStyle = isDarkTheme ? {backgroundColor: '#000000'} : null
      const textStyle = isDarkTheme ? {color: '#ffffff'} : null
      return (
        <>
          <Navbar />
          <div className="not-found-bg" style={bgStyle}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 style={textStyle}>Lost Your Way</h1>
            <p style={textStyle}>We cannot seem to find the page</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
