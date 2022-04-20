import React, { useContext } from 'react';
import { LikeContext } from './Context';

export function Section() {
	const { likes } = useContext(LikeContext);

	return (
		<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
			<h1 className="display-4">All likes on page {likes}</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla error, facilis iusto dolorem totam
				tempore, velit saepe odit dolore excepturi consequuntur ipsum inventore eaque quo sit, dicta voluptate
				maiores porro.
			</p>
		</div>
	);
}
