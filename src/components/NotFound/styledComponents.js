import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  height: 90.85vh;
  width: 100%;
  background-color: ${props => props.bgColor};
  margin-top: 60px;
`
export const NavigationBarAndNotFound = styled.div`
  display: flex;
`
export const NotFoundContext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotFoundImage = styled.img`
  width: 200px;
  height: 200px;
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${props => props.headingColor};
  @media (min-width: 768px) {
    font-size: 20px;
  }
`
export const NotFoundDesc = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: ${props => props.descColor};
  @media (min-width: 768px) {
    font-size: 16px;
  }
`
