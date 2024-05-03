import singleBlogData from '@/api/sigleBlog';
import React from 'react';

export const generateMetadata = async({params})=>{
   const {id} = params;
   const mData = await singleBlogData(id)
  
   return {
    title : mData.title,
    description :mData.body
   }
}
const page = async ({ params }) => {
    const {id} = params;
    
  
    const data = await singleBlogData(id)
    return (
        <div className='bg-gray-500 p-10 rounded-md mx-20 my-10'>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        </div>
    );
};

export default page;