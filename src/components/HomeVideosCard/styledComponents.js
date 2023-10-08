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
  @media (min-width: 576px) {
    width: 220px;
  }
`
export const VideoItemImage = styled.img`
  width: 100%;
`
export const VideoDetailsInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 12px;
  @media (max-width: 767px) {
    padding: 12px;
  }
`
export const LogoImage = styled.img`
  width: 30px;
  height: 30px;
`
export const VideoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 12px;
  margin-top: 0;
`
export const VideoTitle = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
`
export const NameDateCount = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 12px;
`
