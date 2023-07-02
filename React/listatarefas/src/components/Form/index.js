import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import './Form.css';

// Fazendo destruction na função direta
export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    /* Pegando o evento Submit do form */
    <form onSubmit={handleSubmit} action="#" className="form">
      {/* Se eu quiser escrever JS eu preciso usar o {} */}
      <input onChange={handleChange} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

// Se eu quiser o um campo que não é requerido preciso fazer isso
/*
Form.defaultProps = {
  novaTarefa: 'Valor padrão',
};
*/

// Validando os props
Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
