import Header from '../Header'
import NavigationBar from '../NavigationBar'

import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDesc,
  NotFoundContext,
  NavigationBarAndNotFound,
} from './styledComponents'

import VideosContext from '../../context/VideosContext'

const NotFound = () => (
  <VideosContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const descColor = isDarkTheme ? '#e2e8f0' : '#475569'
      const notFoundImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NavigationBarAndNotFound>
            <NavigationBar />
            <NotFoundContainer bgColor={bgColor}>
              <NotFoundContext>
                <NotFoundImage src={notFoundImageUrl} alt="not found" />
                <NotFoundHeading headingColor={headingColor}>
                  Page Not Found
                </NotFoundHeading>
                <NotFoundDesc descColor={descColor}>
                  we are sorry, the page you requested could not be found.
                </NotFoundDesc>
              </NotFoundContext>
            </NotFoundContainer>
          </NavigationBarAndNotFound>
        </>
      )
    }}
  </VideosContext.Consumer>
)
export default NotFound
