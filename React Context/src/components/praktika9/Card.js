import React, { useState, useContext } from 'react';
import { LikeContext } from './Context';

export default function Card({ name, email, id, image, location }) {
	const [ count, setCount ] = useState(0);
	const { likes, setLikes } = useContext(LikeContext);

	function AddLike() {
		setCount(count + 1);
		setLikes(likes + 1);
	}

	return (
		<div className="card mb-4 box-shadow">
			<div className="card-header">
				<h4 className="my-0 font-weight-normal">{name} </h4>
			</div>
			<div className="card-body">
				<img src={image} alt={name} />
				<ul className="list-unstyled mt-3 mb-4">
					<li>{email}</li>
					<li>{location}</li>
				</ul>
				<button onClick={() => AddLike()} type="button" className="btn btn-lg btn-block btn-outline-primary">
					Like {count}
				</button>
			</div>
		</div>
	);
}
