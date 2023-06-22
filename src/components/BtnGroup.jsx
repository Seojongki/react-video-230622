import { IoPlaySharp, IoPauseSharp, IoStopSharp } from "react-icons/io5";

function BtnGroup(props) {

    const {videoRef} = props;


    //play
    const playVid = () => {
        //비디오이름.play();
//        console.log(videoRef.current);
        videoRef.current.play();
    }

    //pause
    const pauseVid = () => {
        videoRef.current.pause();
    }

    //stop (중단하고 처음으로 돌아가기)
    const stopVid = () => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    }
  
  
  return (
    <div className='btn-group'>
        <button className='play' onClick={playVid}><IoPlaySharp/></button>
        <button className='pause' onClick={pauseVid}><IoPauseSharp/></button>
        <button className='stop' onClick={stopVid}><IoStopSharp/></button>
    </div>

  )
}

export default BtnGroup