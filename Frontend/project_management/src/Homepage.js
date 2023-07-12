import { useState, useEffect } from 'react';

export function Homepage() {
    const [homepage, setHomepage] = useState([])
    async function fetchHomepage() {
        const response = await fetch('/api');
        const homeData = await response.json();
        console.log(homeData)
        setHomepage(homeData)  
    }
    
    useEffect(() => {
        fetchHomepage()
    }, [])
    console.log({ homepage })

    return (
        <>
        <h1>{homepage.name}</h1>
        </> 
    )

}