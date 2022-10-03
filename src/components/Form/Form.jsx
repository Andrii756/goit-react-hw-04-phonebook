import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { MainForm, InputWrapper, Label, Input, Button } from './From.styled';

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const phoneInputId = nanoid();

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;

      case 'number':
        setNumber(e.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    formReset();
  };

  return (
    <MainForm onSubmit={handleSubmit}>
      <InputWrapper>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input
          id={nameInputId}
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor={phoneInputId}>Phone</Label>
        <Input
          id={phoneInputId}
          onChange={handleChange}
          value={number}
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

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
