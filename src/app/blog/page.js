import React from 'react';
import Layout from '../mainlayout';
export const metadata = {
    title: "Blog page",
    description:"this is blog page",
}
const BlogPage = () => {
    return (
       <Layout>
         <div>
            <h1 className=' text-center pt-10 text-lg'>write a bloge here</h1>
        </div>
       </Layout>
    );
};

export default BlogPage;