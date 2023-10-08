import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  background-color: ${props => props.bgColor};
  padding-top: 40px;
  overflow-y: auto;
  height: 100vh;
  margin-left: 256px;
  @media (max-width: 767px) {
    margin-left: 0;
  }
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
