import React from "react";
import "../style/Main.scss";
import UserDetail from "./UserDetail";
import { Switch } from "react-router-dom/cjs/react-router-dom.min.js";
import { Route } from "react-router-dom";
import Newfeed from "./newfeed";
import avatar from "../assets/image/unnamed.webp";
import Thanh from "../assets/image/ThanhThanh.jpg";
import newImg2 from "../assets/image/baidang2.jpg";
import newImg3 from "../assets/image/baidang3.jpg";
import newImg4 from "../assets/image/baidang4.jpg";
import ChatBoxElement from "./ChatBoxElement";
import Listfriend from "./Listfriend";
import ChatButton from "./ChatButton";
import Noti from "./Noti";
class Main extends React.Component {
  state = {
    showMessage: false,
  };
  handleChatBox = (stt) => {
    this.setState({
      showMessage: stt,
    });
  };
  hideChatBox = (stt) => {
    this.setState({
      showMessage: stt,
    });
  };
  render() {
    let { showMessage } = this.state;
    return (
      <>
        <div className="main">
          <Listfriend showMess={this.handleShowMessChange} />
          <Switch>
            <Route path="/user" exact>
              <Newfeed
                name={"Phúc Cảnh"}
                avt={avatar}
                email={"Xin chào React Blog"}
                newimg={newImg2}
              />
              <Newfeed
                name={"Thanh Thanh"}
                avt={Thanh}
                email={"Happy Birthday chúm toyyy 🎉"}
                newimg={newImg3}
              />
              <Newfeed
                name={"Thanh Thanh"}
                avt={Thanh}
                email={'Ví anh là xấp Dollar Vì em lỡ "tiêu" mất mụt "tờ"'}
                newimg={newImg4}
              />
            </Route>
            <Route path="/home" exact>
              <Newfeed
                name={"Phúc Cảnh"}
                avt={avatar}
                email={"Xin chào React Blog"}
                newimg={newImg2}
              />
              <Newfeed
                name={"Thanh Thanh"}
                avt={Thanh}
                email={"Happy Birthday chúm toyyy 🎉"}
                newimg={newImg3}
              />
              <Newfeed
                name={"Thanh Thanh"}
                avt={Thanh}
                email={'Ví anh là xấp Dollar Vì em lỡ "tiêu" mất mụt "tờ"'}
                newimg={newImg4}
              />
            </Route>
            <Route path="/" exact>
              <Newfeed
                name={"Phúc Cảnh"}
                avt={avatar}
                email={"Xin chào React Blog"}
                newimg={newImg2}
              />
              <Newfeed
                name={"Thanh Thanh"}
                avt={Thanh}
                email={"Happy Birthday chúm toyyy 🎉"}
                newimg={newImg3}
              />
              <Newfeed
                name={"Thanh Thanh"}
                avt={Thanh}
                email={'Ví anh là xấp Dollar Vì em lỡ "tiêu" mất mụt "tờ"'}
                newimg={newImg4}
              />
            </Route>
            <Route path="/news">
              <Newfeed
                name={"Thanh Thanh"}
                avt={Thanh}
                email={'Ví anh là xấp Dollar Vì em lỡ "tiêu" mất mụt "tờ"'}
                newimg={newImg4}
              />
              <Newfeed
                name={"Thanh Thanh"}
                avt={Thanh}
                email={"Happy Birthday chúm toyyy 🎉"}
                newimg={newImg3}
              />
              <Newfeed
                name={"Phúc Cảnh"}
                avt={avatar}
                email={"Xin chào React Blog"}
                newimg={newImg2}
              />
            </Route>
            <Route path="/notifications">
              <Noti notiContent={"this is noti 1"} />
              <Noti notiContent={"this is noti 2"} />
              <Noti notiContent={"this is noti 3"} />
              <Noti notiContent={"this is noti 4"} />
            </Route>
            <Route path="/user/:id" exact>
              <UserDetail showMess={this.handleShowMessChange} />
            </Route>
          </Switch>
          {showMessage === true ? (
            <ChatBoxElement hideCB={this.hideChatBox} />
          ) : (
            <ChatButton onShowStt={this.handleChatBox} />
          )}
        </div>
      </>
    );
  }
}
export default Main;
