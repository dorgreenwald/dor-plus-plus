const Countdown = ({left = 0}) => {
    return (
      <div>
        <div>
            keep going
        </div>
        <div>
            {left} days left
        </div>
        <div className="countdown-bar">

        </div>
      </div>
    )
  };
  
  export default Countdown;