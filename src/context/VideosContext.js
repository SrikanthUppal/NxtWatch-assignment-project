import React from 'react'

const VideosContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'HOME',
  toggleTheme: () => {},
  addVideo: () => {},
  changeTab: () => {},
})
export default VideosContext
