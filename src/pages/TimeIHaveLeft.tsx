import React, { useState, useEffect } from 'react';
import {createHyperlink, changeWindowTitle} from '../components/utils';
import lifebarAnnotation from '../media/TimeIHaveLeft_Lifebar_annotation.jpg';

const TimeIHaveLeft = () => {
	changeWindowTitle(window.location.pathname)

	const [over100yoMessage, setOver100yoMessage] = useState("");
	const [percentage, setPercentage] = useState(0);
	const [dob, setDob] = useState(new Date('2001-01-01'));
	const [timeLeft, setTimeLeft] = useState({
		years: 0,
		months: 0,
		days: 0,
	});
	const currentDate = new Date();

	/** Add a fun message if current age is over 100 years old. */
	const changeOver100Message = (monthsLeft) => {
		let percentage = ((1 - monthsLeft / (80 * 12)) * 100)

		if (percentage > 125) {
			setOver100yoMessage("(Looks like you're not human, dude!)")
		}
		else {
			setOver100yoMessage("")
		}
	}

	const calculatePercentage = (monthsLeft) => {
		let percentage = ((1 - monthsLeft / (80 * 12)) * 100)
		percentage = Math.max(0, percentage)
		return percentage.toFixed(1);
	};

	const handleDobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newDob = new Date(event.target.value);
		setDob(newDob);
	};

	const calculateTotalMonths = (deathDate: Date, currentDate: Date): number => {
		console.log(deathDate, dob);
		const differenceInMonths =
			(deathDate.getFullYear() - currentDate.getFullYear()) * 12 +
			(deathDate.getMonth() - currentDate.getMonth());
		return differenceInMonths;
	};

	const calculateTimeLeft = () => {
		const deathDate = new Date(dob);
		deathDate.setFullYear(dob.getFullYear() + 80);

		// Calculate the difference in milliseconds
		const differenceMs = deathDate.getTime() - currentDate.getTime();

		// Calculate years, months, and days left
		const yearsLeft = 80 - (currentDate.getFullYear() - dob.getFullYear());
		const monthsLeft = calculateTotalMonths(deathDate, currentDate);
		const daysLeft = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

		const tempPercentage = calculatePercentage(monthsLeft);
		setPercentage(tempPercentage + '%');
		changeOver100Message(monthsLeft)
		const progressBar = document.getElementById('life-progress');
		progressBar.style.width = `${tempPercentage}%`;
		setTimeLeft({ years: yearsLeft, months: monthsLeft, days: daysLeft });
	};

	useEffect(() => {
		calculateTimeLeft();
		// eslint-disable-next-line
	}, [dob]);

	return (
		<div className='container'>
			<h1>Time I Have Left</h1>
			<label htmlFor='dob'>Your date of birth:</label>&ensp;
			<input
				type='date'
				name='dob'
				min='1900-01-01'
				max='2100-01-01'
				defaultValue='2001-01-01'
				onChange={handleDobChange}
				required
			/>
			<br></br>
			<>
				<p>
					If you can live up to 80 years old, assumingly don't get any genetec adjustments
					or have your body frozen, and survive through maybe a few more financial crises,
					social revolutions, artificial intelligent impact, cancers, epidemics, then...
				</p>
				<p>
					the amount of time you have left is: <b>~{timeLeft.years} years</b> OR{' '}
					<b>~{timeLeft.months} months</b> OR <b>~{timeLeft.days} days</b> {over100yoMessage}
				</p>
				<p>
					Through this new len of looking at life expectancy, I hope you now think about
					your life a bit differently.{' '}
				</p>
			</>
			

			{/* Progress bar */}
			<div className='lifebar-illustration-container'>
				<div className='annotation-container'>
					<img
						className='lifebar-annotation'
						src={lifebarAnnotation}
						alt='Life bar annotations'
					/>
				</div>
				<div className='lifebar-container'>
					<div className='lifebar' id='life-progress'>
						<div className='lifebar-text'>{percentage}</div>
					</div>
				</div>
			</div>
			

			<h1>Resources you may need:</h1>
			<ul>
				<li>
					{createHyperlink(
						'https://youtu.be/gGLxPY3qDYY',
						'Một cuộc đời đáng sống - HieuTV (vietnamese)'
					)}
				</li>
				<li>
					{createHyperlink(
						'https://www.youtube.com/shorts/Wa7-n9j_ARM?feature=share',
						'Life advice for your 20s, 30s, 40s, 60s - Koskas'
					)}
				</li>
				<li>Suggestion? Send it to rodonguyendd@gmail.com</li>
			</ul>
		</div>
	);
};

export default TimeIHaveLeft;
