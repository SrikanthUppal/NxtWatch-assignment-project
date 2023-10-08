import {CgPlayListAdd} from 'react-icons/cg'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import VideoCard from '../VideoCard'
import VideosContext from '../../context/VideosContext'

import {
  SavedVideosContainer,
  HeadPart,
  SaveIconContainer,
  SavedText,
  SavedVideosList,
  NoSavedView,
  NoSavedImage,
  NoSavedHeading,
  NoSaveDesc,
} from './styledComponents'

const SavedVideos = () => (
  <VideosContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const topBgColor = isDarkTheme ? '#181818' : '#ebebeb'
      const iconBg = isDarkTheme ? '#000000' : '#d7dfe9'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const descColor = isDarkTheme ? '#e2e8f0' : '#475569'
      return (
        <>
          <Header />
          <NavigationBar />
          <SavedVideosContainer bgColor={bgColor} data-testid="savedVideos">
            <HeadPart topBgColor={topBgColor}>
              <SaveIconContainer iconBg={iconBg}>
                <CgPlayListAdd size={35} color="#ff0000" />
              </SaveIconContainer>
              <SavedText color={headingColor}>Saved Videos</SavedText>
            </HeadPart>
            {savedVideos.length > 0 ? (
              <SavedVideosList>
                {savedVideos.map(eachVideo => (
                  <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
                ))}
              </SavedVideosList>
            ) : (
              <NoSavedView>
                <NoSavedImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedHeading headingColor={headingColor}>
                  No saved videos found
                </NoSavedHeading>
                <NoSaveDesc descColor={descColor}>
                  You can save your videos while watching them
                </NoSaveDesc>
              </NoSavedView>
            )}
          </SavedVideosContainer>
        </>
      )
    }}
  </VideosContext.Consumer>
)
export default SavedVideos
