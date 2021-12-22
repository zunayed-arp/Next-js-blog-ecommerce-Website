import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import UserProfile from '../../components/UserProfile';
import { useAuth } from '../../hooks/useAuth';

const ProfileDetail = () => {
	// const router = useRouter();
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		router.push('/profile')
	// 	}, 3000)
	// }, [])

	const {contexts} = useAuth();
	const {user} = contexts;
	console.log(user.uid)
	return (
		<div>
			<UserProfile key={user.uid} />
		</div>
	);
};

export default ProfileDetail;