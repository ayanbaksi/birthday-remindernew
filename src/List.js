import React, { Component } from 'react'
import styled from "styled-components";
import { FaTimesCircle ,FaEllipsisV} from "react-icons/fa";
import data from './Data/data';

const ModalHeaderSlogan = styled.div`
  font-weight: 700;
  font-size: 100px;
  float: left;
  margin-top: 24px;
  margin-left: 10px;
  margin-bottom: 20px;
`;
 class List extends Component {
    constructor(props) {
        super(props);
     console.log(props);
      }
      state={
        data:[]
      }
      componentDidMount() {
this.getData ();
console.log(this.props);

      }
    
      componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
          this.getData();
          console.log(this.props);

        }
      }
      getData=()=>{
this.setState({data:this.props.userdata})
      }
      openmodal=(persondata)=>{
        this.props.open(persondata);
      }
    render() {
        console.log(this.props.userdata)
        return (
            <div>
                {this.state.data.map((person) => {
        return (
          <article key={person.id} className='person'>
            <img src={person.image} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
              <FaEllipsisV  style={{float:"right"}} onClick={()=>this.openmodal(person)}/>
            </div>
          </article>
        );
      })}
            </div>
        )
    }
}

export default List
