import React from "react";
import "./css/Pagenator.css";
import Card from "./Card";

//view of pagenator
class Pagenator extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //take number of page
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { data, pagesCount, limit } = this.props;
    // logic displaying current cards
    const indexOfLastCard = this.state.currentPage * limit;
    const indexOfFirstCard = indexOfLastCard - limit;
    const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);
    
    //rendering card logic
    const renderCards = currentCards.map(item => {
      return <Card key={item.id} item={item} />;
    });

    // logic displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= pagesCount; i++) {
      pageNumbers.push(i);
    }

    //rendering page numbers
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return (
      <div>
        <div>{renderCards}</div>
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </div>
    );
  }
}

export default Pagenator;
