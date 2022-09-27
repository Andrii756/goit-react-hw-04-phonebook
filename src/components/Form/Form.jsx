import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { MainForm, InputWrapper, Label, Input, Button } from './From.styled';

class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  phoneInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  formReset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.formReset();
  };

  render() {
    return (
      <MainForm onSubmit={this.handleSubmit}>
        <InputWrapper>
          <Label htmlFor={this.nameInputId}>Name</Label>
          <Input
            id={this.nameInputId}
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor={this.phoneInputId}>Phone</Label>
          <Input
            id={this.phoneInputId}
            onChange={this.handleChange}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputWrapper>

        <Button type="submit">Add contact</Button>
      </MainForm>
    );
  }
}

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
