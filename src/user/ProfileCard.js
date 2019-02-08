import React, { Component } from 'react';
import { UserContext } from '../App.js'
import './Profile.css'

export default class ProfileCard extends Component{
    render(){
        return (
            <UserContext.Consumer>
                {(user)=> {
                    return (                        
                        <div className="container">
                            <div className="avatar-flip">
                                <img src={user.avatar} height="150" width="150" alt="" />
                            </div>
                            <h2>{user.fullName}</h2>
                            <h3>{user.job}</h3>
                            <h4><a href={user.github} target="_blank" rel="noopener noreferrer">github</a> | <a href={user.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a></h4>
                            <p>{user.summary}</p>
                        </div>
                    )
                }}
            </UserContext.Consumer>
        )
    }
}