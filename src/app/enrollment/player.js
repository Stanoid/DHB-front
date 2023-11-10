

import React from 'react';




function Player(props) {
  return (
    <video controls src={props.src} style={{ width:"100%",height:"70vh" }} />
  )
}

export default Player