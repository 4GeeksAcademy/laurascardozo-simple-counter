import React from "react";


//create your first component
export const SecondsCounter = (props) => {
    return(
		<div className="counter rounded d-flex justify-content-center">
			<div className="clock "><i className="fa-regular fa-clock"></i></div>
			<div className="first ">{props.firstDigit %10}</div>
			<div className="second">{props.secondDigit %10}</div>
			<div className="third">{props.thirdDigit %10}</div>
			<div className="fourth">{props.fourthDigit %10}</div>
			<div className="fifth ">{props.fifthDigit %10}</div>
			<div className="sixth">{props.sixthDigit %10}</div>
		</div>
    )
}

export default Home;
