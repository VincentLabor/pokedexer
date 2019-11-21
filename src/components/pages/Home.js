import React from 'react'
import Search from '../layout/Search';
import Item from '../pokemon/Item';
import Alert from '../layout/Alert';

const Home = () => {
    return (
        <div>
            <Alert />
            <Search />
            <Item/>
        </div>
    )
}

export default Home
