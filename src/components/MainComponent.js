import React,{Component} from 'react'
import {Navbar , NavbarBrand} from 'reactstrap'
import Menu from './MenuComponent'
import {DISHES }from '../shared/dishes';
import Dishdetail from './DishdetailComponent'


class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      selectedDish:null
    };
  }
  onDishSelect(dishId){
    this.setState({
      selectedDish:dishId
    })
  }

  render(){
    return(
      <div>
        <Navbar dark color="primary">
          <div>
            <NavbarBrand >My Restorent</NavbarBrand>
          </div>
        </Navbar>
       <Menu dishes={this.state.dishes} 
              onClick ={()=> this.onDishSelect(dishId)}      />
       <Dishdetail dishe= {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish) [0] }  />
      </div>
    )
  }
}
export default Main