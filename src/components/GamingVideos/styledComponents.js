import styled from 'styled-components'

export const GamingVideosContainer = styled.div`
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
export const GamingIconContainer = styled.div`
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
export const GamingText = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
  padding-left: 16px;
  @media (min-width: 768px) {
    font-size: 22px;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const GamingVideosList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 16px;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  height: 100%;
`
export const FailureImage = styled.img`
  width: 156px;
  height: 156px;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0;
  color: ${props => props.headingColor};
  @media (min-width: 768px) {
    font-size: 20px;
  }
`
export const FailureDesc = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  margin-top: 3px;
  color: ${props => props.descColor};
  @media (min-width: 768px) {
    font-size: 16px;
  }
`
export const RetryButton = styled.button`
  color: #f1f1f1;
  font-family: 'Roboto';
  font-size: 14px;
  background-color: #4f46e5;
  border: none;
  border-radius: 4px;
  padding: 6px 14px 6px 14px;
  margin-bottom: 16px;
`
