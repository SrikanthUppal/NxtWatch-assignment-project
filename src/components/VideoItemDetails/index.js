import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import PlayVideo from '../PlayVideo'
import VideosContext from '../../context/VideosContext'

import {
  VideoItemContainer,
  LoaderContainer,
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

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstant.initial,
    videoDetails: [],
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  renderUpdatedData = data => ({
    id: data.video_details.id,
    description: data.video_details.description,
    publishedAt: data.video_details.published_at,
    thumbnailUrl: data.video_details.thumbnail_url,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    viewCount: data.video_details.view_count,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
  })

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = this.renderUpdatedData(data)
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  clickLiked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  clickDisliked = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  renderVideoDetailsSuccessView = () => {
    const {videoDetails, isLiked, isDisliked} = this.state
    return (
      <PlayVideo
        videoDetails={videoDetails}
        isLiked={isLiked}
        isDisliked={isDisliked}
        clickLiked={this.clickLiked}
        clickDisliked={this.clickDisliked}
      />
    )
  }

  renderVideoDetailsLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="35" width="35" />
    </LoaderContainer>
  )

  onClickRetry = () => {
    this.getVideoDetails()
  }

  renderVideoDetailsFailureView = () => (
    <VideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const descColor = isDarkTheme ? '#e2e8f0' : '#475569'
        const failureImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
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
        )
      }}
    </VideosContext.Consumer>
  )

  renderVideoDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderVideoDetailsSuccessView()
      case apiStatusConstant.failure:
        return this.renderVideoDetailsFailureView()
      case apiStatusConstant.inProgress:
        return this.renderVideoDetailsLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <VideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bvgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <div data-testid="videoItemDetails">
              <Header />
              <NavigationBar />
              <VideoItemContainer
                bgColor={bvgColor}
                data-testid="videoItemDetails"
              >
                {this.renderVideoDetails()}
              </VideoItemContainer>
            </div>
          )
        }}
      </VideosContext.Consumer>
    )
  }
}
export default VideoItemDetails
