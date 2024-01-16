import React from 'react';

const SingleData = async(_id) => {
    const result = await fetch(
        `http://localhost:5000/displayTree/${_id}`
    );
return result.json();
};

export default SingleData;