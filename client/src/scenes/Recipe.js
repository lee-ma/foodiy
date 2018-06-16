import React from 'react';
import { connect } from 'react-redux';
import { Text } from '../components';
import axios from 'axios';

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: {}
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/recipes/${id}`)
    .then(res => this.setState({
      recipe: res.data
    }));
  }

  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-8">
            <div style={{
              backgroundImage: `url(https://i.redd.it/oseacqjlboky.png)`,
              width: '100%',
              paddingBottom: '50%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              margin: '0'}} />
            </div>
          <div className="col-xs-12 col-md-4">
            bleh
          </div>
        </div>
      </div>
    )
  }
}

export default Recipe;
