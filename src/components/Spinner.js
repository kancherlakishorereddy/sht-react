import React, { useEffect, useState } from 'react';

export default function Spinner() {
    const [msg, setMsg] = useState('')
    useEffect(() => {
        let timer = setTimeout(() => {
            setMsg('This is taking longer than expected..');
        }, 5000);
        return () => clearTimeout(timer);
    }, [])
    return (
        <div className="text-center">
            <div className="spinner-border text-primary mx-auto" role="status"></div>
            <p className="d-inline mx-2">{msg}</p>
        </div>
    )
}
