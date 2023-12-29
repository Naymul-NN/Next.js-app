import React from 'react';
import Layout from '../mainlayout';

export const metadata = {
    title: "About page",
    description: "this is about page",
}
const Aboutpage = () => {
    return (
        <Layout>
            <div>
            <h1 className='text-center pt-10 text-3xl font-bold text-indigo-500'>this is about page</h1>
        </div>
        </Layout>
    );
};

export default Aboutpage;