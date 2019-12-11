import React, { Component } from 'react'
import Menu from './MenuComponent'
import DishDetail from './DishdetailComponent'
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/Comments'
import { PROMOTIONS } from '../shared/Promotions'
import { LEADERS } from '../shared/Leaders'

import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './HomeComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Aboutus from './AboutComponent'
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
            // selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    

    render() {

        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                        comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />

            )
        };

        const HomePage = () => {
            return (
                <Home 
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
            );
        }

        return (
            <div>             
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}/>
                    <Route exact path='/contactus' component={Contact} />} />
                    <Route path='/aboutus' component={() => <Aboutus leaders={this.state.leaders}/>} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Redirect to="/home"/>
                </Switch>
                {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
                <Footer />
            </div>
        );
    }
  }
  export default Main;