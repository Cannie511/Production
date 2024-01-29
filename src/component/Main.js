import React from "react";
import "../style/Main.scss";
import UserDetail from "./UserDetail";
import { Switch } from "react-router-dom/cjs/react-router-dom.min.js";
import { BrowserRouter, Route } from "react-router-dom";
class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Switch>
                    <Route path="/" exact>aaa</Route>
                    <Route path="/user/:id" exact><UserDetail /></Route>
                </Switch>
            </div>
        )
    }
}
export default Main