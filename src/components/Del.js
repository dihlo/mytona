import React, { Component } from 'react';
import './css/Del.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {delportfolio} from '../actions';

class Del extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleSubmit(event){
   
    const id = this.props.obj.id;
    console.log(id);

    this.props.delportfolio(id);
  }

  render() {
    return (
        <div className="del-container form-style">
          <form onSubmit={this.handleSubmit}>
            <label><input type="submit" value="Удалить" /></label>
          </form>
        </div>
    );
  }
}

function mapStateToProps(state) {
  const {data, loading,} = state.delportfolio.portfolioData;
  return {data, loading};
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({delportfolio: delportfolio}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Del);
