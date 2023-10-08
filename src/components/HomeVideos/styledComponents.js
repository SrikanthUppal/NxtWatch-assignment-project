import styled from 'styled-components'

export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: none;
`
export const NoVideoImage = styled.img`
  width: 156px;
  @media (min-width: 768px) {
    width: 226px;
  }
`
export const NoVideosHeading = styled.h1`
  color: ${props => props.headingColor};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`
export const NoVideosDesc = styled.p`
  color: ${props => props.descColor};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  margin-top: 10px;
`
export const NoVideosRetryButton = styled.button`
  color: #f1f1f1;
  font-family: 'Roboto';
  font-size: 14px;
  background-color: #4f46e5;
  border: none;
  border-radius: 4px;
  padding: 6px 14px 6px 14px;
  margin-bottom: 16px;
`
export const VideosList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (min-width: 576px) {
    padding: 16px;
  }
`
