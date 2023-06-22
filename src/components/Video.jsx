function Video(props) {

    const {videoRef} = props;

   return (
    <div>
      <video ref={videoRef} src="media/video.mp4" ></video>
    </div>
  )
}

export default Video