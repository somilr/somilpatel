import React, { useState } from 'react'

export default function Statefu() {
    const [id, setId] = useState(101);
    const [name, setName] = useState('');
    const [city, setCity] = useState('surat');

    const change = () => {
        setId(102);
    }


    return (
        <>
            <div>
                {id}
                <button onClick={() => change()}>Change Id</button>
            </div>
            <div>
                {name}
                <button onClick={() => setName('Amit')}>Change Name</button>
            </div>
            <div>
                {city}
                <button onClick={() => setCity('Ahmedabad')}>Change Name</button>
            </div>
        </>
    )
}
