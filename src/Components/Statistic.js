import React from 'react';
import propTypes from 'prop-types';

const Statistic = ({options, procentFetback}) => {
    const nameFetback = Object.keys(options);
 return (
  <div>
   <ul>
    {nameFetback.map(fetback => <li key={fetback} >{fetback} : {options[fetback]}</li>)}
   </ul>
   {<span>Позитивные отзывы: { procentFetback()}</span>}
   </div>
 )
}
export default Statistic;

Statistic.propTypes={
  options: propTypes.objectOf(propTypes.number),
  procentFetback: propTypes.func.isRequired

}