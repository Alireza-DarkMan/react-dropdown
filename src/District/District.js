import React from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';
import { fetchDistricts, districtSelected } from './actions';

const { Option } = Select;

class District extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      options: [(<Option key="loaing">Loading</Option>)],
      loading: true
    };

    this.selectDistrict = this.selectDistrict.bind(this);
  }
  
  componentWillReceiveProps(props) {
    if(!props.disabled && props.city) {      
      if(props.city != this.props.city) {
        this.setState({options: [], loading: true, value: ''});    
        this.props.fetchDistricts(props.province, props.city);
      }else{
        let options = props.district.districts.map(district => 
          (<Option key={district.id} value={district.id}> { district.title } </Option>)
        );            
        this.setState({options: options, loading: false});    
      }
    } else {
      this.setState({value: ''})
    }
  }

  selectDistrict(district) {
    this.setState({value: district});
    district = this.props.district.districts.find((p) => p.id == district);    
    this.props.districtSelected(district);
    this.props.onSelect(district);
  }

  render() {    
    return (    
      <Select value={this.state.value} style={{width: 120}} onChange={this.selectDistrict} loading={this.state.loading && !this.props.disabled} disabled={this.props.disabled}>
        {this.state.options}
      </Select>      
      );        
  }
}

export default connect((state) => ({district: {districts: state.district.districts, selected: state.district.selected}}), { fetchDistricts, districtSelected })(District);
