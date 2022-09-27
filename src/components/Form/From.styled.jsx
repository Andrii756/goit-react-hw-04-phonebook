import styled from '@emotion/styled';

export const MainForm = styled.form`
  padding: 20px;
  border: 1px dashed #c9c9c9;
  border-radius: 4px;
`;
export const InputWrapper = styled.div`
  margin-bottom: 18px;
`;
export const Label = styled.label`
  display: block;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  color: #000;
  line-height: 1.2;
  font-size: 18px;
  margin-bottom: 4px;
`;
export const Input = styled.input`
  width: 100%;
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  font-weight: 400;
  border-radius: 4px;
  padding: 8px 12px;
  border: 1px solid grey;
  &:focus {
    outline: 1px solid #42a1ec;
  }
`;
export const Button = styled.button`
  margin-left: auto;
  margin-right: auto;

  background-image: linear-gradient(#42a1ec, #0070c9);
  border: 1px solid #0077cc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: block;
  font-family: 'SF Pro Text', 'SF Pro Icons', 'AOS Icons', 'Helvetica Neue',
    Helvetica, Arial, sans-serif;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.022em;
  line-height: 1.47059;
  min-width: 30px;
  overflow: visible;
  padding: 4px 15px;
  text-align: center;
  vertical-align: baseline;
  user-select: none;

  &:disabled {
    cursor: default;
    opacity: 0.3;
  }
  &:hover {
    background-image: linear-gradient(#51a9ee, #147bcd);
    border-color: #1482d0;
    text-decoration: none;
  }
  &:active {
    background-image: linear-gradient(#3d94d9, #0067b9);
    border-color: #006dbc;
    outline: none;
  }

  &:focus {
    box-shadow: rgba(131, 192, 253, 0.5) 0 0 0 3px;
    outline: none;
  }
`;
