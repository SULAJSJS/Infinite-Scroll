import React from 'react';
import './scss/header.scss';

const Header = () => {
  return (
    <div className="header">
      <div><p>№</p></div>
      <h5>ФИО</h5>
      <h5>ВОЗРАСТ</h5>
      <h5>РЕЙТИНГ</h5>
      <h5>СТАТУС ТРАНСФЕР</h5>
      <h5>ДЕЙСТВУЮЩИЙ КЛУБ</h5>
      <h5>СТОИМОСТЬ</h5>
    </div>
  );
};

export default Header;
