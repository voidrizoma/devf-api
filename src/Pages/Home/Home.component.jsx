import React, { useState, useEffect } from 'react'
import { getRequest } from '../../Utils/Axios/AxiosIntance';

export default function Home() {
    const [data, setData] = useState({})

    useEffect(async () => {
        const covidCases = await getRequest("cases")
        setData(covidCases.data.Global)
    }, [])
    console.log(data)

    return (
        <div>
            Chalemente
        </div>
    )
}
