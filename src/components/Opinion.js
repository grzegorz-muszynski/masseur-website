import React from 'react';
import './Opinion.css';

export default function Opinion ({ first_name, last_name, rank, review }) {
    return (
        <div className="container">
            {rank === 5 && <div className="rank">{"*****"}</div>}
            <div className="review">{review}</div>
            <div className="author">{`${first_name} ${last_name[0]}.`}</div>
        </div>
    );
}