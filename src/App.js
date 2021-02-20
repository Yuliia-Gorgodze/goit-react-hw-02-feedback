import React, {Component} from 'react';
import FetbackButton from './Fetback/FetbakButton'
import Statistic from './Fetback/Statistic'

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
        this.procentFetback() 
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
         return(
             <div>
                 <h1>Оставьте свой отзыв</h1>
                 <FetbackButton options={this.state} incriment={this.incrimentFetback} />
                 <h2>Статистика</h2>
                 <Statistic options={this.state} procentFetback={this.procentFetback}/> 
             </div> 
         )
     }
 }
 export default App;