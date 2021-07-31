import React from 'react'

const Experience = () => {
	return (
		<div className="container">
			<div className="row pt-5 my-5">
				<div
					className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-item-center text-center"
					style={{ flexDirection: 'column' }}
				>
					<h1 className="bd-title">Experience Premium Servies</h1>
					<p className="lead mt-3">
						We offer free delivery on all orders, simply populate your cart, pay
						and have your laundry picked up and delivered.
					</p>
				</div>
				<div
					className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
					style={{ overflow: 'hidden' }}
				>
					<img
						src="/images/shirts2.webp"
						className="img-fluid"
						alt="Shirts in hangers"
						style={{
							borderRadius: '40px'
						}}
					/>
				</div>
			</div>
			<div className="row pt-5 my-5">
				<div
					className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
					style={{ overflow: 'hidden' }}
				>
					<img
						src="/images/delivery-guy.jpg"
						className="img-fluid"
						alt="Shirts in hangers"
						style={{
							borderRadius: '40px'
						}}
					/>
				</div>
				<div
					className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-item-center text-center"
					style={{ flexDirection: 'column' }}
				>
					<h1 className="bd-title">Fast Delivery</h1>
					<p className="lead mt-3">
						Delivery has never been quicker with{' '}
						<span className="text-primary">Cleanfits</span>'s response time.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Experience
