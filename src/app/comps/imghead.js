import React from 'react';

const CenteredDiv = (props) => {
 
    const divStyle = {
        backgroundImage: `url(${props.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '400px',
        backgroundColor:"",
        backgroundBlendMode:"overlay",
        display: 'flex',
        fontSize:25,
        marginBottom:15,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
      };

  


  return (
    <div style={divStyle}>
    <h1  style={{fontSize:30,backgroundColor:"rgba(0,0,0,0.3)",padding:10,borderRadius:5}}>{props.text}</h1>
  </div>
  );
};

export default CenteredDiv;