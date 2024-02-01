import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import "../style/ChatButton.scss"
class ChatButton extends Component {
    state = {
        showMess: false
    }
    handleShowMessage = ()=>{
        let showstt = true;
        this.setState({
            showMess: showstt
        })
        this.props.onShowStt(showstt)
    }
    render() {
        return (
            <div>
                <Button onClick={()=>this.handleShowMessage()} variant="primary" className="rounded-circle position-fixed bottom-0 end-0 m-3 p-3">
                    <IoChatbubbleEllipsesSharp size={24} color="white" />
                </Button>
            </div>
        )
    }
}
export default ChatButton