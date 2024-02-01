import React from "react";
import "../style/ChatBox.scss";
import ChatMessage from "./ChatMessage";
import { IoSend } from "react-icons/io5";
import { IoHome } from "react-icons/io5";

class ChatBoxELement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ChatContent: [
        { id: 1, message: "Hello Bae" },
        { id: 2, message: "Tell me" },
        { id: 1, message: "Can we go to Vung Tau beach at this Lunar ?" },
      ],
      messageContent: {},
      flag: 0,
    };
    this.chatboxBodyRef = React.createRef();
  }
  componentDidMount() {
    console.log(">> check flag: ", this.state.flag);
    this.scrollToBottom();
  }

  componentDidUpdate(prevProps, prevState) {
    // Kiểm tra nếu có sự thay đổi trong nội dung và cuộn xuống nếu cần thiết
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  }
  scrollToBottom() {
    if (this.chatboxBodyRef.current) {
      this.chatboxBodyRef.current.scrollTop =
        this.chatboxBodyRef.current.scrollHeight + 100;
    }
  }
  handleTypeMessage = (event) => {
    let mess = { ...this.state.message };
    mess.id = 1;
    mess.message = event.target.value;
    this.setState({
      messageContent: mess,
    });
  };

  sendMessage = (event) => {
    event.preventDefault();
    let input = document.getElementById("chatbox-input");
    if (input.value === "") {
      return;
    }
    this.setState({
      ChatContent: [...this.state.ChatContent, this.state.messageContent],
      messageContent: {},
      flag: 1,
    });

    input.value = "";
    console.log("check flag: ", this.state.flag);
    this.scrollToBottom();
  };
  hideChatBox = () =>{
    let hidestt = false;
    this.props.hideCB(hidestt)
  }
  render() {
    let { ChatContent, message } = this.state;
    return (
      <div id="chatbox-container">
        <div id="chatbox-header" onClick={()=>this.hideChatBox()}>ChatBox</div>
        <div id="chatbox-body" ref={this.chatboxBodyRef}>
          <div className="chat-body">
            {ChatContent &&
              ChatContent.length > 0 &&
              ChatContent.map((item, index) => {
                return (
                  <>
                    <ChatMessage message={item.message} id={item.id} />
                  </>
                );
              })}
          </div>
        </div>
        <form>
          <input
            type="text"
            id="chatbox-input"
            placeholder="Type your message..."
            onChange={(event) => this.handleTypeMessage(event)}
          />
          <button
            type="submit"
            style={{
              width: "13%",
              height: "fit-content",
              float: "right",
              marginRight: "10px",
              marginTop: "5px",
            }}
            className="btn btn-primary btnsend"
            onClick={(event) => this.sendMessage(event)}
          >
            <IoSend style={{ marginRight: "5px" }} />
            
          </button>
        </form>
      </div>
    );
  }
}

export default ChatBoxELement;
