import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.div`
  display: flex;
  @media (max-width: 767px) {
    display: none;
  }
`

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
  width: 256px;
  height: 91.85vh;
  position: fixed;
  top: 60px;
`
export const NavFilterItems = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  padding-top: 0;
`
export const FilterLink = styled(Link)`
  text-decoration: none;
`
export const FilterItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 18px;
  background-color: ${props => props.bgColor};
`
export const FilterName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin-left: 16px;
  color: ${props => props.textColor};
`
export const BottomPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 18px;
  padding-bottom: 26px;
`
export const ContactUs = styled.p`
  font-family: 'Roboto';
  font-weight: 600;
  color: ${props => props.textColor};
  font-size: 16px;
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
`
export const LogoImage = styled.img`
  width: 32px;
  margin-right: 16px;
`
export const ContactUsDesc = styled.p`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 14px;
  color: ${props => props.textColor};
  padding-right: 10px;
`
