import React from 'react';

const blogData = async () => {
    const data =  await fetch('https://jsonplaceholder.typicode.com/posts')
    return data.json()
};

export default blogData;