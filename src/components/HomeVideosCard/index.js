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
  NameDateCount,
} from './styledComponents'

const HomeVideosCard = props => {
  const {videoDetails} = props
  const {
    id,
    name,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoDetails
  const date = formatDistanceToNow(new Date(publishedAt))
  return (
    <VideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f1f1' : '#424242'
        const colorDesc = isDarkTheme ? '#64748b' : '#616e7c'

        return (
          <VideoLink to={`/videos/${id}`}>
            <ListItem>
              <VideoItemImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsInfo>
                <LogoImage src={profileImageUrl} alt="channel logo" />
                <VideoContent>
                  <VideoTitle color={headingColor}>{title}</VideoTitle>
                  <NameDateCount color={colorDesc}>
                    {name}
                    {' . '}
                    {viewCount} views {' . '}
                    {date} ago
                  </NameDateCount>
                </VideoContent>
              </VideoDetailsInfo>
            </ListItem>
          </VideoLink>
        )
      }}
    </VideosContext.Consumer>
  )
}

export default HomeVideosCard
