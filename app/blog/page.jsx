import blogData from '@/api/blog';
import Link from 'next/link';
import React from 'react';

const blog =  async() => {
    const data = await blogData()
    return (
        <div className='my-10 space-y-3 mx-10'>
           {
        data?.map(({title, id}, i) =>(
          <div key={i} className="text-white bg-slate-400 rounded-md p-5">
            <h1>{title}</h1>
            <Link href={`/blog/${id}`}>
            <button className='bg-green-500 py-1 px-5 rounded-md'>see more</button>
            </Link>
          </div>
        ))
      }

        </div>
    );
};

export default blog;