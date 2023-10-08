import {formatDistanceToNow} from 'date-fns'
import VideosContext from '../../context/VideosContext'
import {
  VideoLink,
  ListItem,
  VideoItemImage,
  VideoDetailsInfo,
  LogoImage,
  VideoContent,
  VideoTitle,
  Name,
  ViewsAndYears,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    name,
    title,
    viewCount,
    profileImageUrl,
    thumbnailUrl,
    publishedAt,
  } = videoDetails
  const date = formatDistanceToNow(new Date(publishedAt))
  return (
    <VideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f9f9f9' : '#1e293b'
        const colorDesc = isDarkTheme ? '#64748b' : '#616e7c'
        return (
          <VideoLink to={`/videos/${id}`}>
            <ListItem>
              <VideoItemImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsInfo>
                <LogoImage src={profileImageUrl} alt="channel logo" />
                <VideoContent>
                  <VideoTitle color={headingColor}>{title}</VideoTitle>
                  <Name color={colorDesc}>{name}</Name>
                  <ViewsAndYears color={colorDesc}>
                    {viewCount} views {' . '}
                    {date} ago
                  </ViewsAndYears>
                </VideoContent>
              </VideoDetailsInfo>
            </ListItem>
          </VideoLink>
        )
      }}
    </VideosContext.Consumer>
  )
}
export default VideoCard
