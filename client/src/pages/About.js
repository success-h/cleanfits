import React from 'react'
import Layout from '../Layout'

const About = ({ location }) => {
	return (
		<Layout pathname={location.pathname}>
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
					<h2 className="text-muted text-center">About Cleanfits</h2>
				</div>
			</div>
		</Layout>
	)
}

export default About
