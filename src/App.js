import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Feed from "./components/Feed.js";
import Profile from "./components/Profile.js";
import ArticleView from "./components/ArticleView.js";
import Editor from "./components/Editor.js";
import requireAuthentication from "./utils/requireAuth";
import SignInWith from "./components/SignInWith.js";
function App() {
  const pathname = window.location.pathname;
  return (
    <div>
      {!pathname.includes("editor") ? <Header /> : ""}
      <SignInWith />
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/articleview/:id" component={ArticleView} />
        <Route path="/editor" component={requireAuthentication(Editor)} />{" "}
        <Route path="**" component={Feed} />
      </Switch>
    </div>
  );
}

export default App;
