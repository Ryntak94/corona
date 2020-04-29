import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Card from './Card.js'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1100px;
    margin: 0 auto;
`


class CardContainer extends Component {
    constructor(props)  {
        super(props)
        this.state = {
            states: []
        }
    }
    componentDidMount() {
        axios.get('https://corona.lmao.ninja/v2/states')
            .then(({data})    =>  {
                console.log(data)
                this.setState((state)   =>  ({
                    states: data
                }))
            })
    }

    render()    {
        return (
          <Container>
            {
                this.state.states.map((item) => {
                    console.log(item)
                    return <Card state={item}/>
                })
            }
          </Container>
        );
    }

}

export default CardContainer;
