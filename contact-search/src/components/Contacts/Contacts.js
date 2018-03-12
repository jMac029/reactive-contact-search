import React, { Component } from 'react';
import styled from 'styled-components';

const ContactCard = styled.div`{
  float: left;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 10px;
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-gap: 20px;
  color: #1f1f1f;
  font-weight: 100;
  margin: 10px;
  height: 150px;
  width: 350px;
  border: 2px solid #516BE0;
  .avatar {
    width: 100%;
  }

  .name {
    font-size: 24px;
    line-height: 0;
    font-weight: 400;
  }

  .email {
    font-size: 16px;
    line-height: 1;
    font-weight: 400;
    color: #686868;
  }

  .contactDetails {
    font-size: 12px;
    font-weight: 800;
    line-height: 0;
  }

  .contactDetails span {
    font-weight: 400;
  }
}
`;

class Contacts extends Component{

  renderContacts(){
    return (this.props.contacts.map(contact => {
      return (
        <ContactCard className="contactCard" key={contact._id}>
          <div className="imgContainer">
            <img className="avatar" src={contact.avatar} alt="" />
          </div>
          <div className="contactInfo">
            <h2 className="name">{contact.name}</h2>
            <h3 className="email">{contact.email}</h3>
            <h5 className="contactDetails"> Category: <span>{contact.category}</span></h5>
            <h5 className="contactDetails"> Company: <span>{contact.company}</span></h5>
          </div>
        </ContactCard>
      )
    }))
  }

  render(){

    return (<div>{this.renderContacts()}</div>)
  }
}


export default Contacts;
