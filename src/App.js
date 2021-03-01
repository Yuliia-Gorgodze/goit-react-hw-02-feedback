import React, {Component} from 'react';

import Statistic from './Components/Statistic'
import Notification from './Components/Notification'
import SectionTitle from './Components/SectionTitle'
import FetbackButton from './Components/FetbakOptions'

 class App extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
    incrimentFetback =(fetback)=>{
        this.setState(prevState => ({   
            [fetback]: prevState.[fetback] +1
     
        }))   
         
    }
    procentFetback  = () => {
        const result = this.state.good / (this.state.good + this.state.bad) * 100 ;
        if(isNaN(result)){
            
            return `нужно больше отзывов`
        }else{
            return `${result}%`
        }
       
    }
     render(){
        const {good, neutral, bad} = this.state
         return(
             <div>
                 <SectionTitle title="Please leave feedback">
                 <FetbackButton options={this.state} incriment={this.incrimentFetback} />
                 </SectionTitle> 
                 {(good > 0 || neutral > 0 || bad > 0) ? <div>
                 <Statistic options={this.state} procentFetback={this.procentFetback}/></div> : <Notification message={'No feetback given'}/>}
             </div> 
         )
     }
 }
 export default App;