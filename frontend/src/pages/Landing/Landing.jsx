import React from 'react'

const Landing = () => {
  return (
    <>

        <div className="jumbotron">
            <div className="jumbotron-container">
                <h1>Welcome to ConnectMe</h1>
                <p className="lead">The ultimate social media platform where junior developers can interact.</p>
                <a href="#" className="btn btn-primary btn-lg">Learn More</a>
            </div>
        </div>

        <div className="middle-container">
            <div className="row">
                <div className="col-md-4">
                    <h2>Build a Portfolio</h2>
                    <img src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <p>This application provides the ability to build a showcase a portfolio with a easy to use interface. No code required!</p>
                </div>
                <div className="col-md-4">
                    <h2>Build Connections</h2>
                    <img src="https://images.pexels.com/photos/3228715/pexels-photo-3228715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <p>The ability to real-time chat with fellow juniors allows for you to make quality connections as you grow in the industry.</p>
                </div>
                <div className="col-md-4">
                    <h2>Get Hired</h2>
                    <img src="https://images.pexels.com/photos/3746957/pexels-photo-3746957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>                    
                    <p>Employers will be able to see your showcased work and decide if your skills are necessary for their organization.</p>
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