import React from 'react';
import Navbar from './Navbar/Index'
import Footer from './Footer/Index';


export default function MainLayout({ children }) {
	return (
		<div className="w-full" >
			<Navbar />
			<div pt={'50px'}>
				{children}
			</div>
			<Footer />
		</div>
	);
}
