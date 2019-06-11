import React from 'react';
import Province from '../Province/Province';
import City from '../City/City';
import District from '../District/District';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      province: {selected: {}, disabled: false},
      city: {disabled: true},
      district: {disabled: true}
    }

    this.provinceSelected = this.provinceSelected.bind(this);
    this.citySelected = this.citySelected.bind(this);
    this.districtSelected = this.districtSelected.bind(this);
  }

  provinceSelected(province) {
    if(province.id != this.state.province.id) {
      this.setState({city: {selected: {}}, district: {disabled: true}})
    }
    this.setState({province: {selected: province}, city: {disabled: false}});
  }

  citySelected(city) {
    this.setState({city: {selected: city}, district: {disabled: false}});
  }

  districtSelected(district) {
    this.setState({district: {selected: district}});
  }

  render() {    
    return (
      <div className="Location">
        <Province onSelect={this.provinceSelected} />
        <City province={this.state.province.selected} onSelect={this.citySelected} disabled={this.state.city.disabled} />
        <District province={this.state.province.selected} city={this.state.city.selected} onSelect={this.districtSelected} disabled={this.state.district.disabled} />
      </div>
    );
  }
}

export default App;
