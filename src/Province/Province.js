import React from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';
import { fetchProvinces, provinceSelected } from './actions';

const { Option } = Select;

class Provice extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      options: [(<Option key="loaing">Loading</Option>)],
      loading: true
    };

    this.selectProvince = this.selectProvince.bind(this);
  }

  componentDidMount() {
    this.props.fetchProvinces();
  }
  
  componentWillReceiveProps(props) {    
    let options = props.province.provinces.map(province => 
      (<Option key={province.id} value={province.id}> { province.title } </Option>)
    );    
    this.setState({options: options, loading: false});    
  }

  selectProvince(province) {
    province = this.props.province.provinces.find((p) => p.id == province);    
    this.props.provinceSelected(province);
    this.props.onSelect(province);
  }

  render() {    
    return (    
      <Select style={{width: 120}} onChange={this.selectProvince} loading={this.state.loading}>
        {this.state.options}
      </Select>      
      );        
  }
}

export default connect((state) => state, { fetchProvinces, provinceSelected })(Provice);
