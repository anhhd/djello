import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const List = ({ cards, onDeleteCard, onUpdateCard }) => (
  <ul>
    {cards.map(card => (
      <Card 
        key={card.id} 
        {...card} 
        onDeleteCard={() => onDeleteCard(card.id)}
        onUpdateCard={(id, text) => onUpdateCard(id, text)}
      />
    ))}
  </ul>
)

List.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  onUpdateCard: PropTypes.func.isRequired
}

export default List;