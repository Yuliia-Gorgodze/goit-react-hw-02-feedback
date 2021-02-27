import React from 'react';
import FetbackButton from './FetbakOptions'


const SectionTitle=  ({state, incriment}) => {
    const {good, neutral, bad} = state
    return(
     <section>
         <h1>Оставьте свой отзыв</h1>
         <FetbackButton options={state} incriment={incriment} />
     </section>
     )
 }
 export default SectionTitle;
 