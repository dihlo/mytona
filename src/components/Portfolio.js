import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './css/Portfolio.css';

import {getportfolio} from '../actions';
import {openModal} from '../actions';

import Pagenator from './Pagenator';
import Modal from './Modal';
import Edit from './Edit';
import Add from './Add';
import Del from './Del';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleClick = this.handleClick.bind(this);
        this.openModalHandler = this.openModalHandler.bind(this);
        this.closeModalHandler = this.closeModalHandler.bind(this);
        this.renderChildren = this.renderChildren.bind(this);
    }  

    renderChildren = (type) => {
        const {obj} = this.props;
        switch (type) {
            case 'edit':
            return <Edit />;
            case 'add':
            return <Add />;
            case 'del':
            return <Del />;
        }    
    }

    openModalHandler = () => {
        console.log(this.props.show);
        this.props.openModal(true, null, 'add');
      }
    
    closeModalHandler = () => {
        this.props.openModal(false, null, '');
    }

    componentDidMount() {
        this.props.getportfolio(5);
    }

    handleClick() {
        console.log(this.props.data[0]);
    }

    render() {

        const {loading, data , error, pagesCount, limit} = this.props;
        
        //check error
        if (loading) {
            return null;
        }
        if (error) {
            return <div>error</div>
        }
        if (data.length === 0) {
            return <div>Пустой запрос</div> 
        }

        //render
        return (
            <div className="portfolio-container">
                { this.props.show ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
                <Modal
                    show={this.props.show}
                    close={this.closeModalHandler}>    
                    {this.renderChildren(this.props.param)}          
                </Modal>
                <div  style={{display: this.props.show ? 'none' : ''}} className='portfolio-onmiddle'>
                    <div className="portfolio-title">
                        <p>Портфолио</p> 
                        <button className="buttonadd" onClick={this.openModalHandler}>Добавить</button>
                    </div>
                    <Pagenator data={data} pagesCount={pagesCount} limit={limit}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {data, loading, pagesCount, limit} = state.getportfolio.portfolioData;
    const {show, param, obj} = state.modal.modal;
    console.log({data, loading, pagesCount, limit, show});
    //const {deletedata, deleteloading} = state.deletemeals.mealsDelete;
    //const {putdata, putloading, payload, payloadcalories, payloadupdatedat}=state.putmeals.mealsPut;
    return {data, loading, pagesCount, limit, show, param, obj};
  }
  
function matchDispatchToProps (dispatch) {
    return bindActionCreators ({getportfolio: getportfolio, openModal: openModal}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Portfolio);


