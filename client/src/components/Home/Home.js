import React from 'react';
import {Link} from "react-router-dom";
import "./pricing.css";
import "./marketing.css";

class Home extends React.Component {
  render() {
    return (<div className="App">
    <div class="header">
        <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">

            <ul class="pure-menu-list">
                <li class="pure-menu-item"><Link to="/Articles" class="pure-menu-link">Search</Link></li>
                <li class="pure-menu-item"><Link to="#" class="pure-menu-link">Tour</Link></li>
                <li class="pure-menu-item"><Link to="#" class="pure-menu-link">Sign Up</Link></li>
            </ul>
        </div>
    </div>

    <div class="splash-container">
        <div class="splash">
            <h1 class="splash-head">Welcome to PediaPedia</h1>
            <p class="splash-subhead">
                A place for parents to find useful information to help navigate through parenthood.
            </p>
            <p>
                <Link to="/Articles" class="pure-button pure-button-primary">Get Started!</Link>
            </p>
        </div>
    </div>

<div class="footer">
  PediaPedia &copy
</div>


  </div>);
  }
}

export default Home;
