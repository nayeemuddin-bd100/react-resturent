import React, { Component } from 'react';
import DISHES from '../../data/dishes';
import DishDetails from './DishDetail';
import MenuItem from './MenuItem';

export default class Menu extends Component {
    state = {
        dishes : DISHES
    }
    render() {

        const menu = this.state.dishes.map(item => {
             return <MenuItem dish={item} key={item.id} />
        })
        const dish = this.state.dishes.map((item) => {
          return <DishDetails dish={item} key={item.id} />;
        });

        return (
          <div>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  {menu}
                        </div>
                        <div className="col-md-6">
                           {dish[0]}
                        </div>
              </div>
            </div>
          </div>
        );
    }
}
