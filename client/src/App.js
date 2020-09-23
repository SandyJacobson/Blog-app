import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import PostDetails from "./screens/PostDetails/PostDetails";
import PostCreate from './screens/PostCreate/PostCreate'
import PostEdit from './screens/PostEdit/PostEdit'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/add-post" component={PostCreate} />
        <Route exact path='/posts/:id' component={PostDetails} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
      </Switch>
    </div>
  );
}

export default App;
