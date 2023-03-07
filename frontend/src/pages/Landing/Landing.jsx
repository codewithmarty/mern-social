import React from 'react'

const Landing = () => {
  return (
    <>

        <div className="jumbotron">
            <div className="jumbotron-container">
                <h1>Welcome to my landing page!</h1>
                <p className="lead">This is where you can learn more about my product or service.</p>
                <a href="#" className="btn btn-primary btn-lg">Learn More</a>
            </div>
        </div>

        <div className="middle-container">
            <div className="row">
                <div className="col-md-4">
                    <h2>Section 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
                </div>
                <div className="col-md-4">
                    <h2>Section 2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
                </div>
                <div className="col-md-4">
                    <h2>Section 3</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
                </div>
            </div>
        </div>

        <footer className="footer">
            <div className="footer-container">
                <p>&copy; 2023 My Company. All rights reserved.</p>
            </div>
        </footer>

    </>
  )
}

export default Landing