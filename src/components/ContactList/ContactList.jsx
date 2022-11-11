import React from 'react';
//Додавання контакту

const ContactsList = ({ contacts, onRemove }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name} : {number}
        <button onClick={() => onRemove(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

// ????????
// const ContactListItem = ({ id, name, phone, onRemove }) => {
//   return (
//     <li key={id}>
//       {name}: {phone} <button onClick={() => onRemove(id)}>Delete</button>
//     </li>
//   );
// };

// // Компонент для розмітки списку
// const ContactsList = ({ contacts, onRemove }) => {
//   if (contacts.lengh === 0) return null;
//   return (
//     <ul>
//       {contacts.map(contact => (
//         <ContactListItem {...contact} onRemove={onRemove} />
//       ))}
//     </ul>
//   );
// };

export default ContactsList;
