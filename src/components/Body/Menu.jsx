import React, { Component } from "react";
import DISHES from "../../data/dishes";
import DishDetails from "./DishDetail";
import MenuItem from "./MenuItem";

export default class Menu extends Component {
  state = {
    dishes: DISHES,
    selectDish: null,
    };
    
    onDishSelect = dish => {
        this.setState({selectDish: dish})
    }
  render() {
    const menu = this.state.dishes.map((item) => {
      return (
        <MenuItem
          dish={item}
          key={item.id}
          DishSelect={() => this.onDishSelect(item)}
        />
      );
    });
    // const dish = this.state.dishes.map((item) => {
    //   return <DishDetails dish={item} key={item.id} />;
    // });
      
      let dishDetail = null
      if (this.state.selectDish != null) {
          dishDetail = <DishDetails dish={this.state.selectDish}></DishDetails>
      }

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">{menu}</div>
            <div className="col-md-6">{dishDetail}</div>
          </div>
        </div>
      </div>
    );
  }
}
