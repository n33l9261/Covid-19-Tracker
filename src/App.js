import React from 'react';
import {Cards, Chart, CountryPicker} from './Components';
import styles from './App.module.css';
import { fetchData } from './api';
import coro from './images/logo.png'

class App extends React.Component{
state = {
  data: {},
  country: '',

}

async componentDidMount(){
  const fetcheddata = await fetchData();

  this.setState({ data: fetcheddata });
  // console.log(data);
}
handleCountryChange = async (country) => {
  if(country === 'global')
  {
    country = '';
  }
  const fetchedData = await fetchData(country);

 

  this.setState({ data:fetchedData, country: country });
  // console.log(fetcheddata);
  console.log(country);
}


  render(){
    const { data, country } = this.state;
    return(
      <div className={styles.container}>
        <img className={styles.image} src={coro} alt="n33l"></img>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        
      </div>
    )
  }
}

export default App;
