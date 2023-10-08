import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  padding-top: 60px;
  overflow-y: auto;
  height: 100vh;
  margin-left: 256px;
  @media (max-width: 767px) {
    margin-left: 0;
  }
`
export const HeadPart = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  background-color: ${props => props.topBgColor};
  width: 100%;
  height: 70px;
  @media (min-width: 768px) {
    height: 90px;
    padding-left: 35px;
  }
`
export const SaveIconContainer = styled.div`
  background-color: ${props => props.iconBg};
  border-radius: 100%;
  width: 50px;
  height: 50px;
  padding: 10px 5px 5px 10px;
  @media (min-width: 768px) {
    width: 65px;
    height: 65px;
    padding: 18px 8px 8px 18px;
  }
`
export const SavedText = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
  padding-left: 16px;
  @media (min-width: 768px) {
    font-size: 22px;
  }
`
export const SavedVideosList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  @media (min-width: 576px) {
    padding: 16px;
  }
`
export const NoSavedView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`
export const NoSavedImage = styled.img`
  width: 200px;
  height: 200px;
`
export const NoSavedHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${props => props.headingColor};
  @media (min-width: 768px) {
    font-size: 20px;
  }
`
export const NoSaveDesc = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: ${props => props.descColor};
  @media (min-width: 768px) {
    font-size: 16px;
  }
`
