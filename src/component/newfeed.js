import React from "react";
import { Card, Button, Image, ListGroup } from "react-bootstrap";
import "../style/newfeed.scss";
import { AiOutlineLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
class Newfeed extends React.Component {
  render() {
    let { name, newimg, avt, email} = this.props;
    return (

        <Card style={{ width: '40%', height: 'fit-content', marginTop: '20px' }}>
        <Card.Header>
          <Image src={avt} alt="" className="rounded-circle" width="30" height="30" /> &nbsp;
         <b>{name}</b>  &nbsp;&nbsp;&nbsp;&nbsp; 2 hours ago
        </Card.Header>
        <Card.Body>
          <Card.Text>
          {email} 🤧🤧
          </Card.Text>
          <Image src={newimg} alt="Post" className="img-fluid" />
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Button ><AiOutlineLike /> Like</Button>&nbsp;
            <Button ><FaCommentAlt /> Comment</Button>&nbsp;
            <Button variant="secondary"><FaShare /> Share</Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    );
  }
}
export default Newfeed;
