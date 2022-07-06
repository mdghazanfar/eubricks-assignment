import React, { useEffect, useState } from 'react'
import Cards from '../../Compnents/Cards/Cards';

export interface userDetailsType {
    username: string,
    password: string
}

const Home = () => {
    const [names, setNames] = useState([{}])
    useEffect(() => {
        (
            async () => {
                try {
                    const response = await fetch('http://localhost:4040/get-behaviours', {
                        method: 'GET',
                        mode: 'cors',
                    });
                    const { data } = await response.json();
                    console.log(data);
                    setNames(data)
                } catch (error) {
                    throw error;
                }
            }
        )()
    }, [])

    return (
        <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between' >
            <div className='grid md:grid-cols-3 gap-4 pt-32 px-14 pb-12 m-auto'>
                {
                    names.map((name, index) => (
                        <Cards name={name} key={index} />
                    ))}
            </div>
        </div>
    );
}

export default Home;