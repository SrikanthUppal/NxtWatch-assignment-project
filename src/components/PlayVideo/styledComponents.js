import styled from 'styled-components'

export const VideoPlayer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 20px;
  @media (min-width: 768px) {
    padding: 20px;
    padding-top: 40px;
  }
`
export const VideoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 767px) {
    padding: 12px;
  }
`
export const VideoContentHeading = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  margin-top: 18px;
`
export const VideoContentDetails = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const Dot = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
`
export const ViewsAndYears = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
`
export const VideoContentPlayButtons = styled.div`
  display: flex;
  align-items: center;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${props => props.color};
`
export const SocialButton = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 0;
  margin-right: 16px;
  cursor: pointer;
  outline: none;
  color: ${props => props.color};
`
export const ButtonText = styled.span`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-left: 3px;
`
export const HrLine = styled.hr`
  width: 100%;
  border: 1px solid #909090;
  margin-top: 16px;
  margin-bottom: 16px;
`
export const ChannelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const ChannelLogo = styled.img`
  width: 56px;
  height: 56px;
`
export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 10px;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: 10;
  margin-bottom: 0;
  color: ${props => props.color};
`
export const ChannelSubscriber = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 10px;
  color: ${props => props.color};
`
export const ChannelDesc = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 10px;
  color: ${props => props.color};
  @media (min-width: 768px) {
    padding-left: 66px;
  }
`
