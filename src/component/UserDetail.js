import React from "react";
import "../style/UserDetail.scss"
import axios from "axios";
import { withRouter } from "react-router-dom";
class UserDetail extends React.Component {
    state = {
        friend: {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                friend: res && res.data && res.data.data ? res.data.data : {},
            })
            console.log("check friend: ",res)
        }
    }

    render() {
        let { friend } = this.state;
        let isEmptyObj = Object.keys(friend).length === 0;
        console.log("check objeck: ", isEmptyObj)
        return (
            <div className="us-container">
                <div className="background">
                    <div className="detail">
                        {isEmptyObj === false && <>
                            <div className="avatar">
                                <img src={friend.avatar} />
                            </div>
                            <div className="user-name">
                                <h2><b>{friend.first_name} {friend.last_name}</b> </h2>
                            </div>
                        </>}
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(UserDetail)