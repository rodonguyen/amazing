import React, { useState, useEffect } from 'react';

const TimeIHaveLeft = () => {
	const [percentage, setPercentage] = useState(0);
	const [dob, setDob] = useState(new Date('2001-01-01'));
	const [timeLeft, setTimeLeft] = useState({
		years: 0,
		months: 0,
		days: 0,
	});
	const currentDate = new Date();

	const calculatePercentage = (monthsLeft) => {
		return ((1 - monthsLeft / (80 * 12)) * 100).toFixed(1)
	}


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

		const tempPercentage = calculatePercentage(monthsLeft)
		setPercentage(tempPercentage + '%')
		const progressBar = document.getElementById("life-progress");
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
				min='1950-01-01'
				max='2030-01-01'
				defaultValue='2001-01-01'
				onChange={handleDobChange}
				required
			/>
			<br></br>
			<>
				<p>If you can live up to 80 years old, assumingly don't get any genetec adjustments or have your body frozen, and survive through maybe a few more financial crises, socialeconomic revolutions, artificial intelligent impact, cancers, epidemics, then...</p>
				<p>
					the amount of time you have left is: <b>~{timeLeft.years} years</b> OR{' '}
					<b>~{timeLeft.months} months</b> OR <b>~{timeLeft.days} days</b>
				</p>
			</>

			{// Add case of more than 80yo 
			}

			{/* Progress bar */}
			<div className="progress-container">
				<div className="progress-bar" id="life-progress">
					<div className="progress-text">{percentage}</div>
				</div>
			</div>

			{/*Drawings pointing at some important milestone: 18, 60, */}

			{/*Some sources about what to do with life, optimise life
			- HieuTV cuoc doi 1 nguoi
			- */}


		</div>
	);
};

export default TimeIHaveLeft;
