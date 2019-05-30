import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/home.jsx";
import Header from './components/header.jsx';

class Main extends React.Component {
  render() {
    return (      
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/nopage" component={()=><div>Not Found</div>} />
         </Switch>
   );
  }
}

class App extends React.Component
{
  render()
  {
     return <Provider store={store}> 
            <Router>
            <Header/>
            <Main/>
            </Router>
            </Provider>
           
  }  
}

ReactDOM.render(<App />, document.getElementById("root"));





