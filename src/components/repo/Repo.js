import React, {Component} from 'react';
import './Repo.css'
const Repo = props =>{
    return(
        <li className = 'repo'>
            <a className = "repo-url" href = {props.html_url}>{props.name}</a>
            <hr/>
            <h2 className = "repo-desc">{props.description}</h2>    
        </li>
    )
}

export default Repo;