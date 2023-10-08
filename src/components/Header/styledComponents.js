import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${props => props.bgColor};
  @media (min-width: 768px) {
    padding: 20px 40px 16px 40px;
  }
`
export const WebLogo = styled.img`
  width: 100px;
  @media (min-width: 768px) {
    width: 120px;
  }
`
export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ThemeButton = styled.button`
  background: none;
  border: none;
  margin-right: 12px;
  cursor: pointer;
  outline: none;
`
export const ProfileImg = styled.img`
  width: 30px;
  margin-right: 16px;
  @media (max-width: 767px) {
    display: none;
  }
`
export const HamburgerButtonIcon = styled.button`
  background: none;
  border: none;
  margin-right: 16px;
  color: ${props => props.iconColor};
  background-color: ${props => props.bgColor};
  cursor: pointer;
  outline: none;
  @media (min-width: 768px) {
    display: none;
  }
`
export const LogoutButton = styled.button`
  border: 1px solid;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-color: ${props => props.color};
  padding: 6px 16px 6px 16px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  @media (max-width: 767px) {
    display: none;
  }
`
export const LogoutButtonIcon = styled.button`
  background: none;
  border: none;
  color: ${props => props.iconColor};
  background-color: ${props => props.bgColor};
  cursor: pointer;
  outline: none;
  @media (min-width: 768px) {
    display: none;
  }
`
export const ModelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  background-color: ${props => props.bgColor};
  border-radius: 10px;
`
export const NavigationModelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  background-color: ${props => props.bgColor};
  width: 90vw;
`
export const ModelDes = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  text-align: center;
  color: ${props => props.color};
  @media (min-width: 768px) {
    font-size: 22px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid #909090;
  color: #909090;
  font-family: 'Roboto';
  padding: 8px 20px 8px 20px;
  border-radius: 5px;
  font-size: 14px;
  margin: 10px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  @media (min-width: 768px) {
    font-size: 16px;
    padding: 12px 26px 12px 26px;
  }
`
export const NavCloseButton = styled.button`
  margin-top: 16px;
  margin-right: 16px;
  align-self: flex-end;
  background: none;
  border: none;
  color: ${props => props.iconColor};
  cursor: pointer;
  outline: none;
`
export const ConfirmButton = styled(CloseButton)`
  color: #f9f9f9;
  background-color: #3b82f6;
  cursor: pointer;
  outline: none;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavFilterItems = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const NavItem = styled.li`
  display: flex;
  padding-left: 30%;
  align-items: center;
  background-color: ${props => props.bgColor};
  width: 256px;
`
export const TabName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 12px;
  margin-bottom: 16px;
  color: ${props => props.textColor};
`
