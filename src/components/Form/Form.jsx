import { Component } from 'react';
import { nanoid } from 'nanoid';
import 'components/Form/Form.css';
import 'components/App/App.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  // Внесення змін у форму
  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  //Сабміт форми
  handleFormSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    // const { name, number } = this.state;
    const { onAdd } = this.props;
    const isValidateForm = this.validateForm();

    if (!isValidateForm) return;
    onAdd(contact);
    this.resetForm();
  };
  // Перевіряє на валідність введені дані
  validateForm = () => {
    const { name, number } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !number) {
      alert('Some field is empty');
      return false;
    }
    return onCheckUnique(name);
  };

  // Метод очистки форми
  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handleChangeForm}
          className="input"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <input
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={this.handleChangeForm}
          className="input"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

// class Form extends Component {
//   state = {
//     contacts: [],
//     name: '',
//   };

//   nameInput = nanoid();
//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     console.log(this.state);
//   };
//   render() {
//     const { name, phone } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name{' '}
//           <input
//             id={this.nameInput}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//         </label>

//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }

export default Form;
