import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './css/Portfolio.css';

import {getportfolio} from '../actions';

import Card from './Card';


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleClick = this.handleClick.bind(this);
    }    

    componentDidMount() {
        this.props.getportfolio();
    }

    handleClick() {
        console.log(this.props.data[0]);
    }

    render() {

        const {loading, data , error} = this.props;
        
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
                <div className="portfolio-title">Портфолио</div>
                <div className='portfolio-onmiddle'>
                {
                    data.map((item) => {
                        return <Card name={item.name} disc={item.disc} link={item.link} photo={item.photo}/>
                    })
                }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {data, loading} = state.getportfolio.portfolioData;
    //const {deletedata, deleteloading} = state.deletemeals.mealsDelete;
    //const {putdata, putloading, payload, payloadcalories, payloadupdatedat}=state.putmeals.mealsPut;
    return {data, loading};
  }
  
function matchDispatchToProps (dispatch) {
return bindActionCreators ({getportfolio: getportfolio}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Portfolio);


