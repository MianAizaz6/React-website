import React, { Component } from 'react';
import { Card,CardImg,CardTitle } from 'reactstrap';


class Menu extends Component {
    constructor(props) {
        super(props);

      
    }
    
   render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-4 col-md-3 mt-1">
                <Card onClick={() => this.props.onClick(dish.id)} >
                 
                      <CardImg width="100%" object src={dish.image} alt={dish.name} />
                 
                  
                    <CardTitle>{dish.name}</CardTitle>
                   
                 
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              
                  {menu}
            </div>
            
          
          </div>
        );
    }
}

export default Menu;