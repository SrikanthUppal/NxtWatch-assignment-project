import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  text-decoration: none;
`
export const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  background: none;
  margin-bottom: 16px;
  cursor: pointer;
  outline: none;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 20px;
  }
`
export const VideoItemImage = styled.img`
  width: 100%;
  @media (min-width: 768px) {
    width: 250px;
    height: 150px;
  }
  @media (min-width: 992px) {
    width: 350px;
    height: 200px;
  }
`
export const VideoDetailsInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 12px;
  @media (min-width: 768px) {
    padding-top: 6px;
  }
`
export const LogoImage = styled.img`
  width: 30px;
  height: 30px;
  @media (min-width: 768px) {
    display: none;
  }
`
export const VideoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 12px;
  margin-top: 0;
  @media (min-width: 768px) {
    padding-top: 0;
  }
`
export const VideoTitle = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  @media (min-width: 992px) {
    font-size: 18px;
  }
`
export const Name = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 12px;
  margin-bottom: 0;
  @media (min-width: 992px) {
    font-size: 16px;
  }
`
export const ViewsAndYears = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 12px;
  @media (min-width: 992px) {
    font-size: 16px;
  }
`
