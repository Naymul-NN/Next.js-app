import React from 'react';

const SingleData = async(_id) => {
    const result = await fetch(
        `https://treehouse-server.vercel.app/displayTree/${_id}`
    );
return result.json();
};

export default SingleData;