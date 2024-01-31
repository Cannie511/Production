import React from "react";

class ChatMessage extends React.Component {
  render() {
    let { message, id } = this.props;

    return (
      <>
        {id === 1 ? (
          <div className="message sent">
            <p>{message}</p>
          </div>
        ) : (
          <div className="message received">
            <p>{message}</p>
          </div>
        )}
      </>
    );
  }
}
export default ChatMessage;
