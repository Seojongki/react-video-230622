import { useState, useRef, useEffect } from 'react'
import './App.css'
import Video from './components/Video'
import TimeInfo from './components/TimeInfo'
import BtnGroup from './components/BtnGroup'

function App() {
  
  const [duration, setDuration] = useState(0) ;//영상길이
  const [currentTime, setCurrentTime] = useState(0);//현재시간
  const videoRef = useRef();//video 이름(참조: ref) 만들기

      //비디오 재생 hook
      useEffect(() => {
        setDuration(videoRef.current.duration);//재생시간
        setCurrentTime(videoRef.current.currentTime);//현재시간
    
        //비디오 메타데이터가 로드될 때 duration을 업데이트합니다.
        //duration Nan 처리
        const handleLoadedMetadata = () => {
          setDuration(videoRef.current.duration);      
        }
        videoRef.current.addEventListener('loadedmetadata',handleLoadedMetadata);
    
        //매 초마다 비디오 시간 hook
        let videoInterval = setInterval(() => {
          setCurrentTime(videoRef.current.currentTime);//현재시간
        }, 1000)
    
        //clean up 인터벌 함수 제거
        return () => {clearInterval(videoInterval)}
    
      }, [currentTime]);

  return (
    <div className='App'>
      <h1>React Video Player</h1>
      <Video videoRef={videoRef}/>
      <TimeInfo currentTime={currentTime} duration={duration} />
      <BtnGroup videoRef={videoRef}/>
    </div>     
  )
}

export default App
