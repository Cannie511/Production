import React from "react";
import "../style/Listfriend.scss"
import axios from "axios";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { Button } from "react-bootstrap";

class Listfriend extends React.Component {
    state = {
        listfriend: [],
        showMess: false
    }
    async componentDidMount() {
        let friends = await axios.get('https://reqres.in/api/users?page=1');
        console.log(">>check friends: ", friends)
        this.setState({
            listfriend: friends && friends.data && friends.data.data ? friends.data.data : []
        })

    }
    handleDeltail = (friend) => {
        console.log(">>check id: ", friend.id)
        this.props.history.push('/user');
        setTimeout(() => {
            this.props.history.push(`/user/${friend.id}`);
          }, 100);
    }
    handleShowMess = () =>{
        let show = true;
        this.setState({
            showMess: show
        })
        this.props.showMess(show)
    }
    render() {
        let { listfriend } = this.state;
        return (
            <div className="listfriend" >
                
                <ul>
                <h2><b>Friends</b></h2>
                    {listfriend && listfriend.length > 0 &&
                        listfriend.map((item, index) => {
                            return (
                                <li style={{}} key={item.id} onClick={() => this.handleDeltail(item)}>
                                    <span><img src={item.avatar} alt=""/> {item.first_name} {item.last_name}
                                    
                                </span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default withRouter(Listfriend)