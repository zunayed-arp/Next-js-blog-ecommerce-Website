import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import UserProfile from '../../components/UserProfile';

const ProfileDetail = () => {
	// const router = useRouter();
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		router.push('/profile')
	// 	}, 3000)
	// }, [])

	return (
		<div>
			<UserProfile />
		</div>
	);
};

export default ProfileDetail;