import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-top: 60px;
  background-color: ${props => props.bgColor};
  height: 100vh;
  margin-left: 256px;
  @media (max-width: 767px) {
    margin-left: 0;
  }
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 200px;
  display: ${props => props.display};
  justify-content: space-between;
  padding: 16px;
`
export const LeftPart = styled.div`
  width: 50%;
`
export const BannerRight = styled.div`
  display: flex;
  align-self: flex-start;
  padding-right: 16px;
`
export const BannerImage = styled.img`
  width: 142px;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #1e293b;
  font-weight: 500;
`
export const BannerButton = styled.button`
  background-color: transparent;
  border: 1px solid #1e293b;
  padding: 8px 14px 8px 14px;
  color: #1e293b;
  font-weight: 600;
  font-family: 'Roboto';
`
export const BannerCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`
export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 90%;
  margin: 20px;
  border: 1px solid #909090;
  border-radius: 4px;
  @media (min-width: 768px) {
    height: 60px;
    width: 50%;
  }
`
export const Input = styled.input`
  color: ${props => props.color};
  background: none;
  width: 100%;
  height: 100%;
  font-family: 'Roboto';
  font-size: 16px;
  border: none;
  padding: 6px 16px 6px 16px;
  outline: none;
`
export const SearchButton = styled.button`
  height: 100%;
  background-color: ${props => props.searchBg};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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
