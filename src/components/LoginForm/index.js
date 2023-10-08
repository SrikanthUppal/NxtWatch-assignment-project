import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import VideosContext from '../../context/VideosContext'
import {
  LoginFormContainer,
  Form,
  WebsiteLogo,
  InputContainer,
  Label,
  Input,
  CheckboxContainer,
  CheckBoxInput,
  CheckBoxLabel,
  FromButton,
  ErrorMessage,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isShowPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({
      isShowPassword: !prevState.isShowPassword,
    }))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    history.replace('/')
  }

  onSubmitFailure = message => {
    this.setState({showErrorMsg: true, errorMsg: message})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      errorMsg,
      showErrorMsg,
      username,
      password,
      isShowPassword,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <VideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const color = isDarkTheme ? '#ffffff' : '#475569'
          const checkBoxColor = isDarkTheme ? '#ffffff' : '#0f0f0f'
          const bgColor = isDarkTheme ? '#231f20' : '#ffffff'
          const formBgColor = isDarkTheme ? '#0f0f0f' : '#ffffff'
          const inputBgColor = isDarkTheme ? '#0f0f0f' : '#e2e8f0'
          return (
            <LoginFormContainer bgColor={bgColor}>
              <Form onSubmit={this.onSubmitForm} formBgColor={formBgColor}>
                <WebsiteLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <InputContainer>
                  <Label color={color} htmlFor="username">
                    USERNAME
                  </Label>
                  <Input
                    inputBgColor={inputBgColor}
                    bgColor={bgColor}
                    color={color}
                    type="text"
                    id="username"
                    value={username}
                    onChange={this.onChangeUsername}
                    placeholder="Username"
                  />
                </InputContainer>
                <InputContainer>
                  <Label color={color} htmlFor="password">
                    PASSWORD
                  </Label>
                  <Input
                    inputBgColor={inputBgColor}
                    color={color}
                    type={isShowPassword ? 'text' : 'password'}
                    id="password"
                    className="password-input-field"
                    value={password}
                    onChange={this.onChangePassword}
                    placeholder="Password"
                  />
                  <CheckboxContainer>
                    <CheckBoxInput
                      type="checkbox"
                      id="checkbox"
                      checked={isShowPassword}
                      onChange={this.onChangeCheckbox}
                    />
                    <CheckBoxLabel
                      checkBoxColor={checkBoxColor}
                      htmlFor="checkbox"
                    >
                      Show Password
                    </CheckBoxLabel>
                  </CheckboxContainer>
                </InputContainer>
                <FromButton type="submit">Login</FromButton>
                {showErrorMsg && <ErrorMessage>*{errorMsg}</ErrorMessage>}
              </Form>
            </LoginFormContainer>
          )
        }}
      </VideosContext.Consumer>
    )
  }
}
export default LoginForm
