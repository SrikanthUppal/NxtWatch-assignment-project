import {withRouter} from 'react-router-dom'
import {BsBrightnessHigh, BsMoon} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose, AiFillHome} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import VideosContext from '../../context/VideosContext'
import {
  NavBar,
  NavLink,
  WebLogo,
  ActionContainer,
  ThemeButton,
  ProfileImg,
  LogoutButton,
  ModelContainer,
  ModelDes,
  ButtonsContainer,
  CloseButton,
  ConfirmButton,
  LogoutButtonIcon,
  HamburgerButtonIcon,
  NavigationModelContainer,
  NavCloseButton,
  NavFilterItems,
  NavItem,
  TabName,
} from './styledComponents'

const Header = props => (
  <VideosContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme, activeTab, changeTab} = value
      const color = isDarkTheme ? '#f9f9f9' : '  #4f46e5'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const iconColor = isDarkTheme ? '#ffffff' : 'none'
      const bgColor = isDarkTheme ? '#231f20' : '#ffffff'
      const popupBgColor = isDarkTheme ? '#0f0f0f' : '#ffffff'
      const activeTabBg = isDarkTheme ? '#475569' : '#cbd5e1'

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onChangeTheme = () => {
        toggleTheme()
      }

      const onClickTabHome = () => {
        changeTab('Home')
      }

      const onClickTabTending = () => {
        changeTab('Trending')
      }

      const onClickTabGaming = () => {
        changeTab('Gaming')
      }

      const onClickTabSaved = () => {
        changeTab('Saved')
      }

      return (
        <NavBar bgColor={bgColor}>
          <NavLink to="/">
            <WebLogo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </NavLink>
          <ActionContainer>
            <ThemeButton
              onClick={onChangeTheme}
              type="button"
              data-testid="theme"
            >
              {isDarkTheme ? (
                <BsBrightnessHigh color="#ffffff" size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </ThemeButton>
            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <HamburgerButtonIcon
                  type="button"
                  iconColor={iconColor}
                  bgColor={bgColor}
                >
                  <GiHamburgerMenu size={25} />
                </HamburgerButtonIcon>
              }
              className="popup-content"
            >
              {close => (
                <NavigationModelContainer bgColor={popupBgColor}>
                  <NavCloseButton
                    iconColor={iconColor}
                    data-testid="closeButton"
                    type="button"
                    onClick={() => close()}
                  >
                    <AiOutlineClose size={20} />
                  </NavCloseButton>
                  <NavFilterItems>
                    <NavLink to="/">
                      <NavItem
                        key="home"
                        bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                        onClick={onClickTabHome}
                      >
                        <AiFillHome
                          size={20}
                          color={activeTab === 'Home' ? '#ff0000' : ' #909090'}
                        />
                        <TabName
                          font-weight={activeTab === 'Home' ? 'bold' : 'none'}
                          textColor={textColor}
                        >
                          Home
                        </TabName>
                      </NavItem>
                    </NavLink>
                    <NavLink to="/trending">
                      <NavItem
                        key="trending"
                        bgColor={
                          activeTab === 'Trending' ? activeTabBg : 'none'
                        }
                        onClick={onClickTabTending}
                      >
                        <HiFire
                          size={20}
                          color={
                            activeTab === 'Trending' ? '#ff0000' : ' #909090'
                          }
                        />
                        <TabName
                          font-weight={
                            activeTab === 'Trending' ? 'bold' : 'none'
                          }
                          textColor={textColor}
                        >
                          Trending
                        </TabName>
                      </NavItem>
                    </NavLink>
                    <NavLink to="/gaming">
                      <NavItem
                        key="gaming"
                        bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                        onClick={onClickTabGaming}
                      >
                        <SiYoutubegaming
                          size={20}
                          color={
                            activeTab === 'Gaming' ? '#ff0000' : ' #909090'
                          }
                        />
                        <TabName
                          font-weight={activeTab === 'Gaming' ? 'bold' : 'none'}
                          textColor={textColor}
                        >
                          Gaming
                        </TabName>
                      </NavItem>
                    </NavLink>
                    <NavLink to="/saved-videos">
                      <NavItem
                        key="saved"
                        bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                        onClick={onClickTabSaved}
                      >
                        <CgPlayListAdd
                          size={20}
                          color={activeTab === 'Saved' ? '#ff0000' : ' #909090'}
                        />
                        <TabName
                          font-weight={activeTab === 'Saved' ? 'bold' : 'none'}
                          textColor={textColor}
                        >
                          Saved videos
                        </TabName>
                      </NavItem>
                    </NavLink>
                  </NavFilterItems>
                </NavigationModelContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutButton type="button" color={color} bgColor={bgColor}>
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <ModelContainer bgColor={popupBgColor}>
                  <ModelDes color={color}>
                    Are you sure, you want to logout
                  </ModelDes>
                  <ButtonsContainer>
                    <CloseButton
                      data-testid="closeButton"
                      type="button"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModelContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutButtonIcon
                  type="button"
                  iconColor={iconColor}
                  bgColor={bgColor}
                >
                  <FiLogOut size={25} />
                </LogoutButtonIcon>
              }
              className="popup-content"
            >
              {close => (
                <ModelContainer bgColor={popupBgColor}>
                  <ModelDes color={color}>
                    Are you sure, you want to logout
                  </ModelDes>
                  <ButtonsContainer>
                    <CloseButton
                      data-testid="closeButton"
                      type="button"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModelContainer>
              )}
            </Popup>
          </ActionContainer>
        </NavBar>
      )
    }}
  </VideosContext.Consumer>
)
export default withRouter(Header)
