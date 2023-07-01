import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Tarefas.css';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {/* Exibindo a tarefa e Pegando o index */}
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            {/* Pegando o evento do click e do index e enviando ambos */}
            <FaEdit
              className="edit"
              onClick={(event) => handleEdit(event, index)}
            />

            <FaWindowClose
              onClick={(event) => handleDelete(event, index)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

// Validando props
Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
