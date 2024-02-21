import React from "react";
import "../style/UserDetail.scss";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Newfeed from "./newfeed";
import Space from "./Space";
import newImg from "../assets/image/baidang.jpg";
import newImg2 from "../assets/image/baidang2.jpg";
import { Button } from "react-bootstrap";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
class UserDetail extends React.Component {
  state = {
    friend: {},
    showMess: false,
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        friend: res && res.data && res.data.data ? res.data.data : {},
      });
      console.log("check friend: ", this.state.friend);
    }
  }
  handleShowMess = () => {
    this.props.history.push("/login");
  };
  render() {
    let { friend, showMess } = this.state;
    let isEmptyObj = Object.keys(friend).length === 0;
    console.log("check objeck: ", isEmptyObj);
    return (
      <>
        <div className="us-container">
          <div className="background">
            <div className="detail">
              {isEmptyObj === false && (
                <>
                  <div className="avatar">
                    <img src={friend.avatar} alt="" />
                  </div>
                  <div className="user-name">
                    <span>
                      <h2>
                        <b>
                          {friend.first_name} {friend.last_name}
                        </b>{" "}
                      </h2>
                      <Button
                        variant="primary"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "50%",
                          margin: "0 auto",
                        }}
                        onClick={() => this.handleShowMess()}
                      >
                        <IoChatbubbleEllipsesSharp />
                        &nbsp; Login
                      </Button>
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <Space />
        <Newfeed
          name={friend.first_name + " " + friend.last_name}
          avt={friend.avatar}
          email={friend.email}
          newimg={newImg}
        />
        {/* {showMess === true ? <ChatBoxELement />: ''} */}
      </>
    );
  }
}
export default withRouter(UserDetail);
