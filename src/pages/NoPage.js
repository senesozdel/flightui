import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <main>
    <div className="container">
      <section className="section error-404 mt-2     d-flex flex-column align-items-center justify-content-center">
        <h1>404</h1>
        <h2>The page you are looking for doesn't exist.</h2>
        <Link to="/" className="btn btn-primary" >Back to home</Link>
        <img src="assets/img/not-found.svg" className=" py-5" alt="Page Not Found" />
      </section>
    </div>
  </main>
  
  )
}

export default NoPage