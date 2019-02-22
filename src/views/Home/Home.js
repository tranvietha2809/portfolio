import React from 'react';
import './Home.css'

const Home = () => {
  return(
    <div className = "Home">
        <div className = "introduction">
          <table>
            <tr>
              <td>
                <h1>Ha Tran</h1>
                <h2>Engineer and Developer</h2>
                <a href="https://www.linkedin.com/in/ha-tran-b91553106/" className= "contact-icon" target = "_blank">
                  <div className = "fa fa-linkedin"></div>
                </a>
                <a href ="https://github.com/tranvietha2809" className = "contact-icon" target ="_blank">
                  <div className = "fa fa-github"></div>  
                </a>    
                <a href ="https://stackoverflow.com/users/8052713/ha-tran" className = "contact-icon" target ="_blank">
                  <div className = "fa fa-stack-overflow"></div>  
                </a>    
              </td>
              <td>          
              </td>
            </tr>
          </table>
      </div>
    </div>
  )
}

export default Home
