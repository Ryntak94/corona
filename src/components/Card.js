import React, { Component } from 'react';
import styled from 'styled-components';

const CardObj = styled.div`
    border: solid 1px black;
    border-radius: 10px;
    width: 300px;
    margin: 10px auto;
    padding: 20px;
    background: tomato;
`

const capitalize = (str) => {
    str = str.split("")
    str[0] = str[0].toUpperCase()
    return str.join("")
}


class Card extends Component {
    constructor(props)  {
        super(props)
        this.state = {

        }
    }

    render()    {
        return (
          <CardObj>
            <h4>{this.props.state.state}</h4>
            {Object.keys(this.props.state).map(elem => {
                if(elem !== "state") {
                    return <div>{capitalize(elem)}: {this.props.state[elem]}</div>
                }
            })}

          </CardObj>
        );
    }

}

export default Card;
