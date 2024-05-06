import React from 'react';
import './BirthdayCard.css';
import { Birthday } from './api';

export const BirthdayCard = (birthday: Birthday) => {
	let cardTitle: string;	
	
	if (!birthday.cardTitle || birthday.cardTitle === '') {
		const name = birthday.nickname || birthday.name;
		cardTitle = 'Have an awesome birthday, ' + name + '! 🎉';
	} else {
		cardTitle = birthday.cardTitle;
	}


	return (
		<div className='card happy-birthday-card'>
			<div className='card-content'>
				<h3 className='card-title'>{cardTitle}</h3>
				<h3 className='card-message'>{birthday.cardMessage}</h3>
			</div>
		</div>
	);
};


// export const BirthdayCard = (birthday: Birthday) => {
// 	return (
// 		<div className='card happy-birthday-card'>
// 			<div className='card-content'>
// 				<h3 className='card-title'>Have a Fking Lit Birthday, {birthday.name}!</h3>
// 				<p className='card-description'>{birthday.message}</p>
// 			</div>
// 		</div>
// 	);
// };

// export const BirthdayCard1 = (birthday: Birthday) => {
// 	return (
// 		<div className='card happy-birthday-card-1'>
// 			<div className='card-content'>
// 				<h3 className='card-title'>Have a Fking Lit Birthday, {birthday.name}!</h3>
// 				<p className='card-description animate-character'>{birthday.message}</p>
// 			</div>
// 		</div>
// 	);
// };

// export const BirthdayCard2 = (birthday: Birthday) => {
// 	return (
// 		<div className='card happy-birthday-card-2'>
// 			<div className='card-content'>
// 				<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
// 					{/* <rect x='0' y='0' width='100%' height='100%' fill='url(#polka-dots)'></rect> */}

// 					<text className='card-title' x='50%' y='60%' text-anchor='middle'>
// 						Have a Fking Lit Birthday, {birthday.name}!
// 					</text>

// 					{/* <text className='card-title' x='50%' y='60%' text-anchor='middle'>
// 						Have a Fking Lit Birthday, {birthday.name}!
// 					</text> */}

// 					{/* <h3><text x='50%' y='60%' text-anchor='middle'>
// 							Have a Fking Lit Birthday, {birthday.name}!
// 						</text></h3> */}
// 				</svg>
// 			</div>
// 			{/* <h3 className='card-title'>Have a Fking Lit Birthday, {birthday.name}!</h3>
// 				<h3 className='card-description animate-character emoji'>{birthday.message}</h3> */}
// 		</div>
// 	);
// };

// export const BirthdayCard3 = (birthday: Birthday) => {
// 	return (
// 		<div className='card happy-birthday-card-3'>
// 			<div className='card-content'>
// 				<h3 className='card-title'>Have a Fking Lit Birthday, {birthday.name}!</h3>
// 				<h3 className='card-description'>{birthday.message}</h3>
// 			</div>
// 		</div>
// 	);
// };
