import React from 'react';

export default ({ contact, index, onDelete }) => (
  <tr>
    <td><img src={contact.pictureUrl} style={{width: '100px'}}/></td>
    <td>{contact.name}</td>
    <td>{contact.popularity}</td>
    <td><button onClick={() => onDelete(index)}>Delete</button></td>
  </tr>
);