import React from 'react';


const homeData = async() => {
    const Data = await fetch('https://jsonplaceholder.typicode.com/users')

    return Data.json();
};

export default homeData;