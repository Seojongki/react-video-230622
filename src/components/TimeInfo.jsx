function TimeInfo(props) {

    const {currentTime, duration} = props;
    
    
  return (
    <div className="time-info">
        <p> {currentTime.toFixed(1)}s / {duration.toFixed(1)}s </p>
        <progress 
            min='0' 
            max='100' 
            value={duration ? (currentTime*100)/duration : 0} 
        />
    </div>
  )
}

export default TimeInfo