import React from 'react'
import '../styles.css'
import img1 from '../productImages/background-image.jpg'

const Home = () => {
  return (
    <main>

      <div className='imgbanner-container'>
        
        <img src={img1} />


            <div className='img-caption text-center mx-auto'>

            <h1>Welcome to my E-commerce app</h1>


            </div>

        </div>

    </main>
  )
}

export default Home