import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
	<>
		<Helmet />
		<Header />
		{children}
		<Footer />
	</>
);

export default Layout;
