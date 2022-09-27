import React from 'react';
import PropTypes from 'prop-types';

import { Form, Label, Input, FindLabel } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Form>
      <Label>
        <FindLabel>Find contacts by name</FindLabel>
        <Input type="text" value={value} onChange={onChange} />
      </Label>
    </Form>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
