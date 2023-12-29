import React from 'react';
import Data from "@/components/ui/Data"
import Layout from './mainlayout';
const HomePage = () => {
    return (
       <Layout>
         <div>
            <h1 className=' text-center font-bold text-red-400'>this is one of the best way to buils a next app</h1>
            <Data></Data>
        </div>
       </Layout>
    );
};

export default HomePage;