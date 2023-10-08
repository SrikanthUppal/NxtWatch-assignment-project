import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import HomeVideos from '../HomeVideos'
import VideosContext from '../../context/VideosContext'

import {
  HomeContainer,
  BannerContainer,
  LeftPart,
  BannerImage,
  BannerText,
  BannerButton,
  BannerRight,
  BannerCloseButton,
  SearchInputContainer,
  Input,
  SearchButton,
  LoaderContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDesc,
  RetryButton,
} from './styledComponents'

const apiStatusConstant = {
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {
    displayBanner: 'flex',
    searchInput: '',
    videosData: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
      }))
      this.setState({
        videosData: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  onClickDisplay = () => {
    this.setState({displayBanner: 'none'})
  }

  onClickSearch = () => {
    this.getVideosData()
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#00306e" height="35" width="35" />
    </LoaderContainer>
  )

  onClickRetry = () => {
    this.setState({searchInput: ''}, this.getVideosData)
  }

  renderFailureView = () => (
    <VideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const descColor = isDarkTheme ? '#e2e8f0' : '#475569'
        const failureImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <>
            <FailureViewContainer>
              <FailureImage src={failureImageUrl} alt="failure view" />
              <FailureHeading headingColor={headingColor}>
                Oops! Something Went Wrong
              </FailureHeading>
              <FailureDesc descColor={descColor}>
                We are having some trouble to complete your request. <br />
                Please try again.
              </FailureDesc>
              <RetryButton type="button" onClick={this.onClickRetry}>
                Retry
              </RetryButton>
            </FailureViewContainer>
          </>
        )
      }}
    </VideosContext.Consumer>
  )

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideosData)
  }

  renderHomeVideos = () => {
    const {videosData} = this.state
    return <HomeVideos videosData={videosData} onRetry={this.onRetry} />
  }

  renderVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderHomeVideos()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      case apiStatusConstant.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    const {displayBanner, searchInput} = this.state
    return (
      <VideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const searchBg = isDarkTheme ? ' #313131' : '#d7dfe9'
          const display = displayBanner === 'flex' ? 'flex' : 'none'
          const color = isDarkTheme ? '#f9f9f9' : '#231f20'
          return (
            <>
              <Header />
              <NavigationBar />
              <HomeContainer data-testid="home" bgColor={bgColor}>
                <BannerContainer data-testid="banner" display={display}>
                  <LeftPart>
                    <BannerImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BannerText>Buy Nxt Watch Premium</BannerText>
                    <BannerButton type="button">GET IN NOW</BannerButton>
                  </LeftPart>
                  <BannerRight>
                    <BannerCloseButton
                      data-testid="close"
                      onClick={this.onClickDisplay}
                    >
                      <AiOutlineClose size={20} />
                    </BannerCloseButton>
                  </BannerRight>
                </BannerContainer>
                <SearchInputContainer>
                  <Input
                    color={color}
                    value={searchInput}
                    type="search"
                    placeholder="Search"
                    onChange={this.onChangeSearch}
                  />
                  <SearchButton
                    data-testid="searchButton"
                    searchBg={searchBg}
                    onClick={this.onClickSearch}
                  >
                    <AiOutlineSearch size={20} />
                  </SearchButton>
                </SearchInputContainer>
                {this.renderVideos()}
              </HomeContainer>
            </>
          )
        }}
      </VideosContext.Consumer>
    )
  }
}
export default Home
