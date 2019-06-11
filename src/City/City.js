import React from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';
import { fetchCities, citySelected } from './actions';

const { Option } = Select;

class City extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      options: [(<Option key="loaing">Loading</Option>)],
      loading: true
    };

    this.selectCity = this.selectCity.bind(this);
  }
  
  componentWillReceiveProps(props) {
    if(!props.disabled && props.province) {      
      if(props.province != this.props.province) {
        this.setState({options: [], loading: true, value: ''});    
        this.props.fetchCities(props.province);
      }else{
        let options = props.city.cities.map(city => 
          (<Option key={city.id} value={city.id}> { city.title } </Option>)
        );            
        this.setState({options: options, loading: false});    
      }
    } else {
      this.setState({value: ''})
    }
  }

  selectCity(city) {
    this.setState({value: city});
    city = this.props.city.cities.find((p) => p.id == city);    
    this.props.citySelected(city);
    this.props.onSelect(city);
  }

  render() {    
    return (    
      <Select value={this.state.value} style={{width: 120}} onChange={this.selectCity} loading={this.state.loading && !this.props.disabled} disabled={this.props.disabled}>
        {this.state.options}
      </Select>      
      );        
  }
}

export default connect((state) => ({city: {cities: state.city.cities, selected: state.city.selected}}), { fetchCities, citySelected })(City);
