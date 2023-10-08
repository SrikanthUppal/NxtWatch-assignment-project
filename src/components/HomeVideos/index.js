import HomeVideosCard from '../HomeVideosCard'
import VideosContext from '../../context/VideosContext'

import {
  NoVideosView,
  NoVideoImage,
  VideosList,
  NoVideosHeading,
  NoVideosDesc,
  NoVideosRetryButton,
} from './styledComponents'

const HomeVideos = props => {
  const {videosData, onRetry} = props
  const videosLength = videosData.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <VideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const descColor = isDarkTheme ? '#7e858e' : '#475569'

        return videosLength > 0 ? (
          <VideosList>
            {videosData.map(eachVideo => (
              <HomeVideosCard videoDetails={eachVideo} key={eachVideo.id} />
            ))}
          </VideosList>
        ) : (
          <NoVideosView>
            <NoVideoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading headingColor={headingColor}>
              No Search results found
            </NoVideosHeading>
            <NoVideosDesc descColor={descColor}>
              Try different key words or remove search filter
            </NoVideosDesc>
            <NoVideosRetryButton type="button" onClick={onClickRetry}>
              Retry
            </NoVideosRetryButton>
          </NoVideosView>
        )
      }}
    </VideosContext.Consumer>
  )
}
export default HomeVideos
