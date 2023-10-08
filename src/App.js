import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import VideosContext from './context/VideosContext'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import GamingVideos from './components/GamingVideos'
import TrendingVideos from './components/TrendingVideos'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, savedVideos: [], activeTab: 'HOME'}

  toggleTheme = () => {
    this.setState(prev => ({
      isDarkTheme: !prev.isDarkTheme,
    }))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  render() {
    const {isDarkTheme, savedVideos, activeTab} = this.state
    return (
      <VideosContext.Provider
        value={{
          isDarkTheme,
          savedVideos,
          activeTab,
          toggleTheme: this.toggleTheme,
          addVideo: this.addVideo,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </VideosContext.Provider>
    )
  }
}

export default App
