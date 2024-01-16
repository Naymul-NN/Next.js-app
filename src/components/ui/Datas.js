import React from 'react';

const Datas = async() => {
    const datas = await fetch(
        "http://localhost:5000/displayTree",{
            next:{
                revalidate: 10,
              },  
        }
    );
    return datas.json();
};

export default Datas;