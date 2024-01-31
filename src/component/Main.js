import React from "react";
import "../style/Main.scss";
import UserDetail from "./UserDetail";
import { Switch } from "react-router-dom/cjs/react-router-dom.min.js";
import { Route } from "react-router-dom";
import Newfeed from "./newfeed";
import avatar from "../assets/image/unnamed.webp"
import Thanh from "../assets/image/ThanhThanh.jpg"
import newImg2 from "../assets/image/baidang2.jpg"
import newImg3 from "../assets/image/baidang3.jpg"
import newImg4 from "../assets/image/baidang4.jpg"
import ChatBoxElement from "./ChatBoxElement";
class Main extends React.Component {

    render() {
        return (
            <div className="main">

                <Switch>
                    <Route path="/user" exact>
                        <Newfeed name={'Phúc Cảnh'} avt={avatar} email={'Xin chào React Blog'} newimg={newImg2} />
                        <Newfeed name={'Thanh Thanh'} avt={Thanh} email={'Happy Birthday chúm toyyy 🎉'} newimg={newImg3} />
                        <Newfeed name={'Thanh Thanh'} avt={Thanh} email={'Ví anh là xấp Dollar Vì em lỡ "tiêu" mất mụt "tờ"'} newimg={newImg4} />
                    </Route>
                    <Route path="/home" exact>
                        <Newfeed name={'Phúc Cảnh'} avt={avatar} email={'Xin chào React Blog'} newimg={newImg2} />
                        <Newfeed name={'Thanh Thanh'} avt={Thanh} email={'Happy Birthday chúm toyyy 🎉'} newimg={newImg3} />
                        <Newfeed name={'Thanh Thanh'} avt={Thanh} email={'Ví anh là xấp Dollar Vì em lỡ "tiêu" mất mụt "tờ"'} newimg={newImg4} />
                        <ChatBoxElement />
                    </Route>
                    <Route path="/" exact>
                        <Newfeed name={'Phúc Cảnh'} avt={avatar} email={'Xin chào React Blog'} newimg={newImg2} />
                        <Newfeed name={'Thanh Thanh'} avt={Thanh} email={'Happy Birthday chúm toyyy 🎉'} newimg={newImg3} />
                        <Newfeed name={'Thanh Thanh'} avt={Thanh} email={'Ví anh là xấp Dollar Vì em lỡ "tiêu" mất mụt "tờ"'} newimg={newImg4} />
                    </Route>
                    <Route path="/news">
                        <Newfeed name={'Thanh Thanh'} avt={Thanh} email={'Ví anh là xấp Dollar Vì em lỡ "tiêu" mất mụt "tờ"'} newimg={newImg4} />
                        <Newfeed name={'Thanh Thanh'} avt={Thanh} email={'Happy Birthday chúm toyyy 🎉'} newimg={newImg3} />

                        <Newfeed name={'Phúc Cảnh'} avt={avatar} email={'Xin chào React Blog'} newimg={newImg2} />

                    </Route>
                    <Route path="/notifications">Notification here!</Route>
                    <Route path="/user/:id" exact><UserDetail /></Route>
                </Switch>
            </div>
        )
    }
}
export default Main