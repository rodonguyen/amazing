import React, { useState, useEffect } from 'react';
import { changeWindowTitle } from '../components/utils';
import { Birthday, fetchTodayBirthdays } from '../components/api';
import { BirthdayCard } from '../components/BirthdayCard';
import { useParams } from 'react-router-dom';
import './HappyBirthdayHomie.css';

const HappyBirthdayHomie = () => {
	changeWindowTitle(window.location.pathname);
	const { code } = useParams();
	const [birthdays, setBirthdays] = useState<Array<Birthday>>([]);

	useEffect(() => {
		fetchTodayBirthdays(code).then((data) => {
			if (!Array.isArray(data)) return;
			setBirthdays(data as Array<Birthday>);
		});
	}, [code]);

	return (
		<div className='container happy-birthday-homie'>
			<div className='custom-emoji-background'></div>
			<div className='flex'>
				{birthdays.map((birthday) => (
					<BirthdayCard {...birthday} />
				))}
			</div>
		</div>
	);
};

export default HappyBirthdayHomie;
