import React, { Component } from 'react';
import './css/Add.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {postportfolio} from '../actions';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', link: '', photo: '', disc:''};

    this.onNameChange = this.onNameChange.bind(this);
    this.onLinkChange = this.onLinkChange.bind(this);
    this.onPhotoChange = this.onPhotoChange.bind(this);
    this.onDiscChange = this.onDiscChange.bind(this);    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
   
    const data = {
      name: this.state.name,
      link: this.state.link,
      photo: this.state.photo,
      disc: this.state.disc,
    }

    console.log(data);

    this.props.postportfolio(data);
  }

  onLinkChange(event){
    this.setState({link: event.target.value});
  }

  onNameChange(event) {
    this.setState({name: event.target.value});
  }

  onPhotoChange(event){
    this.setState({photo: event.target.value});
  }

  onDiscChange(event) {
    this.setState({disc: event.target.value});
  }




  render() {
    return (
        <div className="add-container form-style">
          <div class="form-style-heading">Добавить проект</div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <span>Имя проекта <span class="required">*</span></span>
              <input required type="text" class="input-field" name="name" value={this.state.name} onChange={this.onNameChange}/>
            </label>
            <label>
              <span>Ссылка <span class="required">*</span></span>
              <input required type="text" class="input-field" name="link" value={this.state.link} onChange={this.onLinkChange} />
            </label>
            <label>
              <span>URl криншот</span>
              <input type="text" class="input-field" name="photo" value={this.state.photo} onChange={this.onPhotoChange}/>
            </label>
            <label>
              <span>Описание</span>
              <input type="text" class="input-field" name="disc" value={this.state.disc} onChange={this.onDiscChange}/>
            </label>
            <label><span> </span><input type="submit" value="Отправить" /></label>
          </form>
        </div>
    );
  }
}

function mapStateToProps(state) {
    const {data, loading,} = state.postportfolio.portfolioData;
    return {data, loading};
  }
  
function matchDispatchToProps (dispatch) {
    return bindActionCreators ({postportfolio: postportfolio}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Add);

