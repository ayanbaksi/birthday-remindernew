import React, { Component } from 'react'
import data from './Data/data'
import List from './List'
import styled from "styled-components";
import EditUserModal from './EditUserModal';

const ContainerStyle = styled.div`
  width: 90vw;
  margin: 5rem 0;
  max-width: var(--fixed-width);
  background: var(--clr-white);
  border-radius: var(--radius);
  padding: 1.5rem 2rem;
  box-shadow: var(--dark-shadow)`;
  
  const ClearButton = styled.button`
  
  color: var(--clr-white);
  display: block;
  width: 100%;
  border-color: transparent;
  background: var(--clr-pink);
  margin: 2rem auto 0 auto;
  text-transform: capitalize;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  letter-spacing: var(--spacing);
  border-radius: var(--radius);
  outline: 1px solid rgba(242, 138, 178, 0.8);
  cursor: pointer;
  
  `;

  const Wrapper = styled.div`
  
    display: block; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.8)`; /* Black w/ opacity */
  
  
  /* Modal Content */
const ModalContainer = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  `;

 class App extends React.Component {
  constructor(props) {
    super(props);
 
  }
  state={
    data:[],
  modalshow:false,
  persondata:null,
  }
  componentDidMount() {
    this.fetchUserData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.fetchUserData();
    }
  }
   fetchUserData=()=>{
     this.setState({data:data})
   }
    clearData=()=>{
     this.setState({data:[]})
    }
    closemodal=()=>{
      this.setState({modalshow:false})
      
    }
    openmodal=(p)=>{
      this.setState({modalshow:true})
      this.setState({persondata:p})
      console.log(p);
      
    };
    
    
  render() {

    
    return (
      <div>
        
        <main>
      <ContainerStyle>
        <h3>{this.state.data.length} birthdays today</h3>
        <List open ={(p)=>this.openmodal(p)} userdata={this.state.data}/>

        <ClearButton onClick={() => this.clearData()}>clear all</ClearButton>
        </ContainerStyle>
    </main>
    {(() => {
          if (this.state.modalshow) {
            return (
              <div>
 
                <Wrapper >
                <EditUserModal  persondata={this.state.persondata} modalclose={()=>this.closemodal()}/>
                
                </Wrapper>
              </div>
            );
          }
        })()}
      </div>
    )
  }
}

export default App

