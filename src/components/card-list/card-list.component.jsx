import React, { Component } from "react";
import "./card-list.styles.css";
import CardComponent from "../card/card.component";
class CardList extends Component {
  render() {
    // console.log(this.props);
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardComponent monster={monster} />;
        })}
      </div>
    );
  }
}
// https://robohash.org/3?set2&size=180x180

export default CardList;
