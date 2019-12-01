import React  from 'react';
import { Card,CardImg,CardTitle } from 'reactstrap';

   function RenderMenuItem({dish , onClick}){
          return(
            <Card onClick={() => onClick(dish.id)} >              
              <CardImg width="100%" object src={dish.image} alt={dish.name} />
              <CardTitle>{dish.name}</CardTitle>
            </Card>
          );

   }
   
   const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
      return (
            <div key={dish.id} className="col-4 col-md-3 mt-1">
                <RenderMenuItem dish ={ dish} onClick ={ props.onClick}/>
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
        

export default Menu;