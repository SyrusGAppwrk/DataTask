import React from 'react'
import resphoto from '../Resourcemanagement.jpg'

function Home() {
    return (
        <div className='container mt-3'>
           
           <img src={resphoto} className='img-fluid' width='100%'/>
        </div>
    )
}

export default Home