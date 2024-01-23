import React from 'react';

const Datas = async() => {
    const datas = await fetch(
        "https://treehouse-server.vercel.app/displayTree",{
            next:{
                revalidate: 10,
              },  
        }
    );
    return datas.json();
};

export default Datas;