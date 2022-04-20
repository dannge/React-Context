import './Context.css';
import Navigation from './Navigation';
import { Section } from './Section';
import Main from './Main';
import Footer from './Footer';
import { Route, Switch } from 'react-router-dom';
import React, { createContext, useState } from 'react';

export const LikeContext = createContext();

function Context() {
	const [ likes, setLikes ] = useState(0);

	return (
		<div>
			<LikeContext.Provider value={{ likes, setLikes }}>
				<Navigation />
				<Section />
				<Switch>
					<Route exact path="/" component={Main} />
				</Switch>
				<Footer />
			</LikeContext.Provider>
		</div>
	);
}

export default Context;
