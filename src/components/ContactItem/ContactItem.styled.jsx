import styled from '@emotion/styled';

export const Card = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  &:before {
    position: absolute;
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='logo_x5F_contacts_x5F_192px_1_' x='0px' y='0px' viewBox='0 0 500 500' enable-background='new 0 0 500 500' xml:space='preserve'%3E%3Cg id='art_layer'%3E%3Ccircle id='bg_circle' fill='%231A73E8' cx='250' cy='250' r='250'/%3E%3Cpath id='body_shadow' fill='%23185ABC' d='M332.4,375H170.5c-19.6,0-36.9-11.8-36.9-31.2V358c0,19.4,17.3,34.1,36.9,34.1h161.9 c19.6,0,36.9-14.7,36.9-34.1v-14.2C369.3,363.2,352,375,332.4,375z'/%3E%3Cpath id='head_shadow' fill='%23185ABC' d='M250,227.3c-29.3-0.1-52.4-20.4-54-48.3v11.4c0,28.9,24.2,54,54,54s54-25.1,54-54V179 C301.7,207.1,279.3,227.4,250,227.3z'/%3E%3Cg id='subject'%3E%3Cpath id='body' fill='%23FFFFFF' d='M250,261.4c-57,0-116.5,27.8-116.5,65.3v17c0,19.4,15.9,34.1,35.5,34.1h164.7 c19.6,0,35.5-14.7,35.5-34.1v-17C369.3,289.1,307,261.4,250,261.4z'/%3E%3Ccircle id='head' fill='%23FFFFFF' cx='250' cy='176.1' r='54'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`;
export const CardText = styled.div`
  margin-right: 20px;
  padding-left: 30px;
`;

export const DeleteBtn = styled.button`
  background-image: linear-gradient(#42a1ec, #0070c9);
  border: 1px solid #0077cc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: block;
  font-family: 'SF Pro Text', 'SF Pro Icons', 'AOS Icons', 'Helvetica Neue',
    Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.022em;
  line-height: 1;
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
