import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import {COMMENTS} from '../shared/Comments'
import {LEADERS} from '../shared/Leaders'
import {PROMOTIONS} from '../shared/Promotions'
import {Switch , Route, Redirect} from 'react-router-dom'



class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
        
    };
  }
  Render
  render() {
    const HomePage = ()=> {
      return(
        <Home dish= {this.state.dishes.filter((dishes)=> dishes.featured)[0]}
          promotion = {this.state.promotions.filter((promo) => promo.featured)[0]}
          leader = {this.state.leaders.filter((leader)=> leader.featured)[0]}

        
        />
      )
    }
 
    const DishWithId = (match) =>{
      return(
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.dishId,10))[0]}
        comments = {this.state.comments.filter((comment) => comment.dishId === parseInt(match.dishId,10))}
        />
      )
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/Aboutus" component={()=> <About leaders={this.state.leaders}/>} />
          <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>} />
          <Route path="/menu/:dishId"  component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}


export default Main;