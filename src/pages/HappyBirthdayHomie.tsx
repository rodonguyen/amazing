import React, { useState, useEffect } from 'react';
import { changeWindowTitle } from '../components/utils';
import { Birthday, fetchTodayBirthdays } from '../components/api';
import { BirthdayCard3, BirthdayCard4 } from '../components/BirthdayCard';
import { useParams } from 'react-router-dom';
import './HappyBirthdayHomie.css';

const HappyBirthdayHomie = () => {
	changeWindowTitle(window.location.pathname);
	const { code } = useParams();
	const [birthdays, setBirthdays] = useState<Array<Birthday>>([]);

	useEffect(() => {
		fetchTodayBirthdays(code).then((data) => setBirthdays(data));
	}, [code]);

	return (
		<div className='container happy-birthday-homie'>
			<div className='custom-emoji-background'></div>
			<div className='grid-container'>
				{birthdays.map((birthday) => (
					// <BirthdayCard3 {...birthday} />
					<BirthdayCard4 {...birthday} />
				))}
			</div>
		</div>
	);
};

export default HappyBirthdayHomie;
