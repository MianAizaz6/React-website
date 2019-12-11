import React, { Component } from 'react'
import {Media} from 'reactstrap';
import { LEADERS } from '../shared/Leaders';

 class RenderLeader extends Component {
    constructor(props){
        super(props);
        this.state={
            Leaders:LEADERS,
        }
       
    }
    render() {

        const leader = this.state.Leaders.map((leader) => {
            return(
                <div key={leader.id} className="col-12 mt-5" >
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={leader.image} alt={leader.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{leader.name} </Media>
                             <h1>{leader.designation} </h1>
                             <p>{leader.description} </p>
                        </Media>
                    </Media>
                </div>
            )
        })
        return (
            <Media list>
              {leader}
            </Media>
            
        )
    }
}


export default RenderLeader
