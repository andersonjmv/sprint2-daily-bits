import React, { useState, useEffect } from 'react'


const App = () => {

    const [pregunta, setPregunta] = useState([]);

    useEffect(() => {
        getQuestions();
    }, [])

    const getQuestions = async () => {
        const url = 'https://fake-api-daily.herokuapp.com/results-1';
        const res = await fetch(url);
        const data = await res.json();
        //const {results} = data;
        setPregunta(data)
    }

    console.log(pregunta);
    return (
        <div>
        {
            pregunta.map(pre => (

                <div className='container' key={pre.[0]}>

                    <h1>{pre.title}</h1>
                    <div>{pre.options[0]}</div>
                    <div>{pre.options[1]}</div>
                    <div>{pre.options[2]}</div>
                    <div>{pre.options[3]}</div>
                </div>
            ))
        }
        </div>
    )
}

export default App
