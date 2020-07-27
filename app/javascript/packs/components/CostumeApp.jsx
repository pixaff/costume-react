import React from 'react'
import ReactDOM from 'react-dom'
import axios from "axios";

import Scripts from "./Scripts";
import Script from "./Script";

class CostumeApp extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      scripts: []
    };
    this.getScripts = this.getScripts.bind(this);
  }
  componentDidMount() {
    this.getScripts();
  }
  getScripts() {
    axios
      .get("/api/v1/scripts")
      .then(response => {
        const scripts = response.data;
        this.setState({ scripts });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <Scripts>
        {this.state.scripts.map(script => (
          <Script key={script.id} script={script} />
        ))}
      </Scripts>
    );
  }
}

document.addEventListener('turbolinks:load', () => {
  const app = document.getElementById('costume-app')
  app && ReactDOM.render(<CostumeApp />, app)
})
