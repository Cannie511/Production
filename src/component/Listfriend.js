import React from "react";
import "../style/Listfriend.scss"
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class Listfriend extends React.Component {
    state = {
        listfriend: []
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
        this.props.history.push(`/user/${friend.id}`)
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
                                <li key={item.id} onClick={() => this.handleDeltail(item)}>
                                    <span><img src={item.avatar}/> {item.first_name} {item.last_name}</span>
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