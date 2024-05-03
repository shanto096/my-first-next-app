import React from 'react';

const singleBlogData = async (id) => {
    const data =  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return data.json()
};

export default singleBlogData;