import React from 'react'

const Landing = () => {
  return (
    <>
        	<header class="header">
		<div class="container">
			<h1>My Landing Page</h1>
		</div>
	</header>

	<div class="jumbotron">
		<div class="container">
			<h1>Welcome to my landing page!</h1>
			<p class="lead">This is where you can learn more about my product or service.</p>
			<a href="#" class="btn btn-primary btn-lg">Learn More</a>
		</div>
	</div>

	<div class="middle-container">
		<div class="row">
			<div class="col-md-4">
				<h2>Section 1</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
			</div>
			<div class="col-md-4">
				<h2>Section 2</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
			</div>
			<div class="col-md-4">
				<h2>Section 3</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
			</div>
		</div>
	</div>

	<footer class="footer">
		<div class="container">
			<p>&copy; 2023 My Company. All rights reserved.</p>
		</div>
	</footer>

    </>
  )
}

export default Landing