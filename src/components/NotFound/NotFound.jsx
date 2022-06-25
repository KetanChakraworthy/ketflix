import React from 'react'

export default function NotFound() {
    return (
        <main className='notfound'
            style={{
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                width: '100%',
                height:'100vh'
            }} >
            <h1>404 Not Found</h1>
        </main>
    )
}
