// // import React, { useState, useRef } from "react";

// // import { useRecordWebcam } from 'react-record-webcam'
// // const Component = () => {


// //   const {
// //     activeRecordings,
// //     createRecording,
// //     openCamera,
// //     startRecording,
// //     stopRecording,
// //   } = useRecordWebcam()

// //   const example = async () => {
// //     try {
// //       const recording = await createRecording();
// //       if (!recording) return;
// //       await openCamera(recording.id);
// //       await startRecording(recording.id);
// //       await new Promise((resolve) => setTimeout(resolve, 500));
// //       await stopRecording(recording.id);
// //       download(recording)
// //        console.log(recording);
// //     } catch (error) {
// //       console.error({ error });
// //     }
// //   };



// //   return (
// //     <div>
// //       <button onClick={example}>Start</button>
// //       {activeRecordings.map(recording => (
// //         <div key={recording.id}>
// //           <video ref={recording.webcamRef} autoPlay muted />
// //           <video ref={recording.previewRef} autoPlay muted loop />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default Component;





// // import { useReactMediaRecorder } from "react-media-recorder";
// // import VideoRecorder from "react-video-recorder";
// import { useState } from "react";
// import {
//   RecordWebcam,
//   useRecordWebcam,
//   CAMERA_STATUS
// } from "react-record-webcam";
// const OPTIONS = {
//   filename: "test-filename",
//   fileType: "mp4",
//   width: 1920,
//   height: 1080
// };
// const RecordView = () => {
//   const {
//     status,
//     startRecording,
//     stopRecording,
//     mediaBlobUrl
//   } = useReactMediaRecorder({
//     video: true,
//     facingMode: { exact: "environment" }
//   });

//   return (
//     <div>
//       <p>{status}</p>
//       <button onClick={startRecording}>Start Recording</button>
//       <button onClick={stopRecording}>Stop Recording</button>
//       <video src={mediaBlobUrl} controls autoPlay loop />
//     </div>
//   );
// };

// export default function App(props) {

//   const [vid, setVid] = useState({});

//   return (
// <div style={{width:"100%",height:"100%"}}>
// <VideoRecorder
//     onRecordingComplete={(videoBlob) => {
//       // Do something with the video...
//       props.getVid(videoBlob)
//       console.log('videoBlob', videoBlob);
//       // var data = new Blob([videoBlob], {type: 'video/webm;codecs=vp8,opus'});
//       // var csvURL = window.URL.createObjectURL(data);
//       // console.log(csvURL)
//       // var tempLink = document.createElement('a');
//       // tempLink.href = csvURL;
//       // tempLink.setAttribute('download', 'filename.webm');
//       // tempLink.click();
//     }}
//   />



// </div>


//   );
// }


import React from 'react'

function App() {
  return (
    <div>App</div>
  )
}

export default App