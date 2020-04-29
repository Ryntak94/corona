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

const SortBar = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
`

const SortButton = styled.div`
    display: flex;
    margin: 10px auto;
    border: solid 1px black;
    border-radius: 5px;
    padding: 5px;
    background: snow;
    &:hover    {
        cursor: pointer;
    }
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
     onClickHandler = async ({target}) => {
        console.log(target.getAttribute("name"))
        if(target.getAttribute("name") === "aa") {
            let sorted = await this.state.states.sort((a,b) => (a.state < b.state) ? -1 : 1)

            this.setState((state) => ({
                states: sorted
            }), () => console.log(this.state.states))
        }   else if(target.getAttribute("name") === "ad") {
            let sorted = await this.state.states.sort((a,b) => (a.state < b.state) ? 1 : -1)

            this.setState((state) => ({
                states: sorted
            }), () => console.log(this.state.states))
        }   else if(target.getAttribute("name") === "ca") {
            let sorted = await this.state.states.sort((a,b) => (a.cases < b.cases) ? -1 : 1)

            this.setState((state) => ({
                states: sorted
            }), () => console.log(this.state.states))
        }   else if(target.getAttribute("name") === "cd") {
            let sorted = await this.state.states.sort((a,b) => (a.cases < b.cases) ? 1 : -1)

            this.setState((state) => ({
                states: sorted
            }), () => console.log(this.state.states))
        }
    }

    render()    {
        return (
            <>
            <SortBar>
            <SortButton name="aa" onClick={this.onClickHandler}>
            Sort alphabetically, ascending
            </SortButton>
            <SortButton name="ad" onClick={this.onClickHandler}>
            Sort alphabetically, descending
            </SortButton>
            <SortButton name="ca" onClick={this.onClickHandler}>
            Sort by cases, ascending
            </SortButton>
            <SortButton name="cd" onClick={this.onClickHandler}>
            Sort by cases, descending
            </SortButton>
            </SortBar>
          <Container>
            {
                this.state.states.map((item) => {
                    console.log(item)
                    return <Card state={item}/>
                })
            }
          </Container>
          </>
        );
    }

}

export default CardContainer;
