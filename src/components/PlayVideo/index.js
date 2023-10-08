import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import VideosContext from '../../context/VideosContext'

import {
  VideoPlayer,
  VideoContent,
  VideoContentHeading,
  VideoContentDetails,
  ViewsAndYears,
  VideoContentPlayButtons,
  ButtonContainer,
  SocialButton,
  ButtonText,
  HrLine,
  ChannelContainer,
  ChannelLogo,
  ChannelInfo,
  ChannelName,
  ChannelSubscriber,
  ChannelDesc,
} from './styledComponents'

const PlayVideo = props => {
  const {videoDetails, isLiked, isDisliked, clickLiked, clickDisliked} = props
  const {
    description,
    publishedAt,
    title,
    videoUrl,
    viewCount,
    name,
    profileImageUrl,
    subscriberCount,
  } = videoDetails
  const years = formatDistanceToNow(new Date(publishedAt))

  const onClickLike = () => {
    clickLiked()
  }

  const onClickDislike = () => {
    clickDisliked()
  }

  return (
    <VideosContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        const headingColor = isDarkTheme ? '#f1f1f1' : '#1e293b'
        const colorDesc = isDarkTheme ? '#64748b' : '#616e7c'
        let isSaved
        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetails.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }
        const saveIconColor = isSaved ? '#2563eb' : colorDesc

        const onClickSave = () => {
          addVideo(videoDetails)
        }

        return (
          <VideoPlayer>
            <ReactPlayer url={videoUrl} controls width="100%" />
            <VideoContent>
              <VideoContentHeading color={headingColor}>
                {title}
              </VideoContentHeading>
              <VideoContentDetails>
                <ViewsAndYears color={colorDesc}>
                  {viewCount} views . {years} ago
                </ViewsAndYears>
                <VideoContentPlayButtons>
                  <ButtonContainer>
                    <SocialButton
                      type="button"
                      color={isLiked ? '#2563eb' : '#647489'}
                      onClick={onClickLike}
                    >
                      <AiOutlineLike size={20} />
                      <ButtonText>Like</ButtonText>
                    </SocialButton>
                  </ButtonContainer>
                  <ButtonContainer>
                    <SocialButton
                      type="button"
                      color={isDisliked ? '#2563eb' : '#64748b'}
                      onClick={onClickDislike}
                    >
                      <AiOutlineDislike size={20} />
                      <ButtonText>Dislike</ButtonText>
                    </SocialButton>
                  </ButtonContainer>
                  <ButtonContainer color={colorDesc}>
                    <SocialButton
                      type="button"
                      color={saveIconColor}
                      onClick={onClickSave}
                    >
                      <BiListPlus size={20} />
                      <ButtonText>{isSaved ? 'Saved' : 'Save'}</ButtonText>
                    </SocialButton>
                  </ButtonContainer>
                </VideoContentPlayButtons>
              </VideoContentDetails>
              <HrLine />
              <ChannelContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <ChannelInfo>
                  <ChannelName color={headingColor}>{name}</ChannelName>
                  <ChannelSubscriber color={colorDesc}>
                    {subscriberCount} subscribers
                  </ChannelSubscriber>
                </ChannelInfo>
              </ChannelContainer>
              <ChannelDesc color={headingColor}>{description}</ChannelDesc>
            </VideoContent>
          </VideoPlayer>
        )
      }}
    </VideosContext.Consumer>
  )
}
export default PlayVideo
