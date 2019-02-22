import React, {Component} from 'react';
import Repo from '../../components/repo/Repo';
import "./Portfolio.css"
class  Portfolio extends Component {
  constructor(){
    super(); 
    this.state = {
      repos : [],
    }
  }

  componentDidMount(){
    const api = "https://api.github.com/users/tranvietha2809/repos"
    fetch(api)
      .then(res => res.json())
      .then(data => {
        this.setState({
          repos: data
        })
      })
  }
  render(){
    let repo = this.state.repos.map((e) => {
      return (
        <Repo name = {e.name} html_url= {e.html_url} description={e.description === null ? "No description :(": e.description}/>
      )
      
    })
    return(
      <div className = "portfolio">
        <h1>What I am up to?</h1>
        <h3>When I'm not too busy, I like to turn coffee into code</h3>
        <div className = "portfolio-frame">
          <ul className = "portfolio-list">{repo}</ul>
        </div>
      </div>
    )
  }
}

export default Portfolio
