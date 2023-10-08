import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import VideosContext from '../../context/VideosContext'

import {
  NavBar,
  SideBarContainer,
  NavFilterItems,
  FilterLink,
  FilterItem,
  FilterName,
  BottomPart,
  ContactUs,
  LogoContainer,
  LogoImage,
  ContactUsDesc,
} from './styledComponents'

class NavigationBar extends Component {
  renderSideBar = () => (
    <VideosContext.Consumer>
      {value => {
        const {isDarkTheme, activeTab, changeTab} = value
        const bgColor = isDarkTheme ? '#231f20' : '#ffffff'
        const activeTabBg = isDarkTheme ? '#313131' : '#cbd5e1'
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

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
          <NavBar>
            <SideBarContainer bgColor={bgColor}>
              <NavFilterItems>
                <FilterLink to="/">
                  <FilterItem
                    key="home"
                    bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                    onClick={onClickTabHome}
                  >
                    <AiFillHome
                      size={20}
                      color={activeTab === 'Home' ? '#ff0000' : ' #909090'}
                    />
                    <FilterName
                      font-weight={activeTab === 'Home' ? 'bold' : 'none'}
                      textColor={textColor}
                    >
                      Home
                    </FilterName>
                  </FilterItem>
                </FilterLink>
                <FilterLink to="/trending">
                  <FilterItem
                    key="trending"
                    bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                    onClick={onClickTabTending}
                  >
                    <HiFire
                      size={20}
                      color={activeTab === 'Trending' ? '#ff0000' : ' #909090'}
                    />
                    <FilterName
                      font-weight={activeTab === 'Trending' ? 'bold' : 'none'}
                      textColor={textColor}
                    >
                      Trending
                    </FilterName>
                  </FilterItem>
                </FilterLink>
                <FilterLink to="/gaming">
                  <FilterItem
                    key="gaming"
                    bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                    onClick={onClickTabGaming}
                  >
                    <SiYoutubegaming
                      size={20}
                      color={activeTab === 'Gaming' ? '#ff0000' : ' #909090'}
                    />
                    <FilterName
                      font-weight={activeTab === 'Gaming' ? 'bold' : 'none'}
                      textColor={textColor}
                    >
                      Gaming
                    </FilterName>
                  </FilterItem>
                </FilterLink>
                <FilterLink to="/saved-videos">
                  <FilterItem
                    key="saved"
                    bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                    onClick={onClickTabSaved}
                  >
                    <CgPlayListAdd
                      size={20}
                      color={activeTab === 'Saved' ? '#ff0000' : ' #909090'}
                    />
                    <FilterName
                      font-weight={activeTab === 'Saved' ? 'bold' : 'none'}
                      textColor={textColor}
                    >
                      Saved videos
                    </FilterName>
                  </FilterItem>
                </FilterLink>
              </NavFilterItems>
              <BottomPart>
                <ContactUs textColor={textColor}>CONTACT US</ContactUs>
                <LogoContainer>
                  <LogoImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt=" facebook logo"
                  />
                  <LogoImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt=" twitter logo"
                  />
                  <LogoImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </LogoContainer>
                <ContactUsDesc textColor={textColor}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactUsDesc>
              </BottomPart>
            </SideBarContainer>
          </NavBar>
        )
      }}
    </VideosContext.Consumer>
  )

  render() {
    return <>{this.renderSideBar()}</>
  }
}
export default NavigationBar
