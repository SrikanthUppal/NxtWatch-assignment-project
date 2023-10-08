import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import VideoCard from '../VideoCard'
import VideosContext from '../../context/VideosContext'

import {
  TrendingVideosContainer,
  HeadPart,
  TrendingIconContainer,
  TrendingText,
  LoaderContainer,
  TrendingVideosList,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDesc,
  RetryButton,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingVideos extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderTrendingLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#00306e" height="35" width="35" />
    </LoaderContainer>
  )

  onClickRetry = () => {
    this.getTrendingData()
  }

  renderTrendingFailureView = () => (
    <VideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const descColor = isDarkTheme ? '#e2e8f0' : '#475569'
        const failureImgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureViewContainer>
            <FailureImage src={failureImgUrl} alt="failure view" />
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
        )
      }}
    </VideosContext.Consumer>
  )

  renderSuccessTrendingVideos = () => {
    const {trendingVideos} = this.state
    return (
      <TrendingVideosList>
        {trendingVideos.map(eachVideo => (
          <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </TrendingVideosList>
    )
  }

  renderTrendingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderSuccessTrendingVideos()
      case apiStatusConstant.failure:
        return this.renderTrendingFailureView()
      case apiStatusConstant.inProgress:
        return this.renderTrendingLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <VideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const topBgColor = isDarkTheme ? '#181818' : '#ebebeb'
          const iconBg = isDarkTheme ? '#000000' : '#d7dfe9'
          const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
          return (
            <>
              <Header />
              <NavigationBar />
              <TrendingVideosContainer data-testid="trending" bgColor={bgColor}>
                <HeadPart topBgColor={topBgColor}>
                  <TrendingIconContainer iconBg={iconBg}>
                    <HiFire size={35} color="#ff0000" />
                  </TrendingIconContainer>
                  <TrendingText color={headingColor}>Trending</TrendingText>
                </HeadPart>
                {this.renderTrendingVideos()}
              </TrendingVideosContainer>
            </>
          )
        }}
      </VideosContext.Consumer>
    )
  }
}
export default TrendingVideos
