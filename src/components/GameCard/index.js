import VideosContext from '../../context/VideosContext'

import {
  VideoLink,
  ListItem,
  VideoItemImage,
  VideoDetailsInfo,
  VideoContent,
  VideoTitle,
  NameDateCount,
} from './styledComponents'

const GameCard = props => {
  const {videoDetails} = props
  const {id, thumbnailUrl, title, viewCount} = videoDetails

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
                <VideoContent>
                  <VideoTitle color={headingColor}>{title}</VideoTitle>
                  <NameDateCount color={colorDesc}>
                    {viewCount} Watching Worldwide
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

export default GameCard
