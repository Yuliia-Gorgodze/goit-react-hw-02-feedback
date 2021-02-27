import React from 'react';
import styles from './fetback.module.css';
import propTypes from 'prop-types';
 const FetbackOptions =  ({options, incriment}) => {

     const nameButton = Object.keys(options);
    
    return(
            nameButton.map(button => <button key={button}
             class={styles.butoon_fetback}
             onClick={() => incriment(button)}>{button}</button>)
     )
 }
 export default FetbackOptions;

 FetbackOptions.propTypes ={
  options: propTypes.objectOf(propTypes.number),
  incriment: propTypes.func.isRequired
 }