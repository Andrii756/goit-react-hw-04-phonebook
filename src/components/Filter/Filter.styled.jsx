import styled from '@emotion/styled';

export const Form = styled.form`padding: 20px;
    border: 1px dashed #c9c9c9;
    border-radius: 4px;
}`;
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
export const FindLabel = styled.span`
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
`;
