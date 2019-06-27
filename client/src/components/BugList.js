import React, { Component } from 'react';
import  { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class BugList extends Component {
    state = {
        bugs: [
            { id: uuid(), name: 'Navbar is not responsive' },
            { id: uuid(), name: 'Bugs are not rendering correctly'},
            { id: uuid(), name: 'Database is not connecting'},
            { id: uuid(), name: 'Image is too large on mobile devices.'}
        ]
    }
    render(){
        const bugs  = this.state.bugs;
        console.log(bugs)
        return (
            <Container>
                <Button 
                color="dark" 
                style={{marginBottom: '2rem'}}
                onClick={() => {
                    const name = prompt('Enter ticket:');
                    if(name){
                        this.setState(state => ({
                            bugs: [...state.bugs, {id: uuid(), name}]
                        }))
                    }
                }}
                >Add Ticket</Button>
                <ListGroup>
                    <TransitionGroup className="bugList">
                       {bugs.map(({id, name}) => {
                           return <CSSTransition key={id} timeout={500} classNames="fade">
                               <ListGroupItem>
                                    <Button
                                        className="remove-btn mr-3"
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                bugs: state.bugs.filter(bug => bug.id !== id)
                                            }));
                                        }}
                                    > &times; </Button>
                                   {name}
                               </ListGroupItem>
                           </CSSTransition>
                       })}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default BugList;