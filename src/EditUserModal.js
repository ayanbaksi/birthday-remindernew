import React, { Component } from "react";
import styled from "styled-components";
import { FaTimesCircle, FaEllipsisV } from "react-icons/fa";
const ModalContainer = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  height: 400px;
`;

class EditUserModal extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  state = {
    data: [],
    currentuserdata: null,
  };
  componentDidMount() {
    this.setCurrentuserdata();

    console.log("hdwifiwd=======>>>>>", this.props);
    console.log(this.props);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      console.log(this.props);
      console.log("datain", this.props.persondata);
      this.setCurrentuserdata();
      console.log("hdwifiwd=======>>>>>", this.props);
    }
  }
  closeModal = () => {
    this.props.modalclose();
  };
  setCurrentuserdata = () => {
    this.setState({ currentuserdata: this.props.persondata });
    console.log("hdwifiwd=======>>>>>", this.props);
  };

  render() {
    if (this.state.currentuserdata == null) {
      return <p>loading</p>;
    } else {
      return (
        <ModalContainer>
          <div style={{ padding: "10px", width: "100%" }}>
          <div style={{height:"40px",width:"100%",marginBottom:"1px solid black"}}>
            <FaTimesCircle style={{ float: "right", fontSize: "40px", }} onClick={() => this.closeModal()} />
            </div>

            <article key={this.state.currentuserdata.id} className="person">
              <img src={this.state.currentuserdata.image} alt={this.state.currentuserdata.name} />
              <div>
                <h4>{this.state.currentuserdata.name}</h4>
                <p>{this.state.currentuserdata.age} years</p>
              </div>
            </article>
          </div>
        </ModalContainer>
      );
    }
  }
}

export default EditUserModal;