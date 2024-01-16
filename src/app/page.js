import React from 'react';
import Data from "@/components/ui/Data"
import Layout from './mainlayout';
import Banner from '@/components/Banner';

const HomePage = () => {
    return (
       <Layout>
         <div>
            <Banner></Banner>
            <Data></Data>
        </div>
       </Layout>
    );
};

export default HomePage;