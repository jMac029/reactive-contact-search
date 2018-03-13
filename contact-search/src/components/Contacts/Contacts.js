import React from 'react';
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
  margin: 10px;
  height: 150px;
  width: 350px;
  border: 4px solid rgb(32, 119, 6);
  border-radius: 10px;
  .avatar {
    width: 100%;
    border-radius: 100px;
  }
  .name {
    font-size: 20px;
    line-height: 0;
    font-weight: 800;
    text-transform: uppercase;
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
  @media screen and (max-width: 799px){
    width: 100%;
  }
}
`;

export default ({data, filterSearch}) => {
  const Contacts = data
  .filter(name =>{
    return name.name.toLowerCase().indexOf(filterSearch.toLowerCase()) >= 0
  })
  .map(name =>{
    return (
        <ContactCard className="contactCard" key={name._id}>
          <div className="imgContainer">
            <img className="avatar" src={name.avatar} alt="avatar" />
          </div>
          <div className="contactInfo">
            <h2 className="name">{name.name}</h2>
            <h3 className="email">{name.email}</h3>
            <h5 className="contactDetails"> Category: <span>{name.category}</span></h5>
            <h5 className="contactDetails"> Company: <span>{name.company}</span></h5>
          </div>
        </ContactCard>
    )
  })
  return (
    <div>
      {Contacts}
    </div>
  );
}