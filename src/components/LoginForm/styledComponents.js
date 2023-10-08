import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: auto;
  background-color: ${props => props.bgColor};
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-around;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 350px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  background-color: ${props => props.formBgColor};
  @media (min-width: 992px) {
    width: 350px;
    flex-shrink: 0;
    padding: 56px 48px 56px 48px;
  }
`
export const WebsiteLogo = styled.img`
  width: 134px;
  @media (min-width: 992px) {
    width: 154px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`
export const Label = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${props => props.color};
`
export const Input = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: ${props => props.inputBgColor};
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`
export const CheckBoxInput = styled.input`
  margin-right: 6px;
`
export const CheckBoxLabel = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  color: ${props => props.checkBoxColor};
`
export const FromButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #3b82f6;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  outline: none;
`
export const ErrorMessage = styled.p`
  align-self: start;
  margin-top: 5px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  color: #ff0b37;
`
