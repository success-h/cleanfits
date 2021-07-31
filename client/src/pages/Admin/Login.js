import React from 'react'
import { Redirect } from 'react-router-dom'

const AdminLogin = () => {
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [redirect, setRedirect] = React.useState(false)

	const onSubmit = e => {
		e.preventDefault()

		if (email === 'francis.udejiofficial@gmail.com' && password === '111111') {
			setRedirect(true)
		}
	}

	if (redirect) {
		return <Redirect to="/admin" />
	}

	return (
		<div
			className="admin-login"
			style={{
				display: 'flex',
				height: '100vh',
				justifyContent: 'center',
				alignItems: 'center',
				background: '#fff'
			}}
		>
			<div className="row w-100">
				<div
					className="col-xs-12 col-sm-8 col-md-8 col-lg-4 mx-auto bg-light py-5 px-5"
					style={{ borderRadius: '7px' }}
				>
					<h1
						className="bd-title lead text-center mb-4"
						style={{ fontSize: '2.5rem' }}
					>
						Cleanfits Admin
					</h1>
					<form className="admin-login-form" onSubmit={e => onSubmit(e)}>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								name="email"
								id="email"
								value={email}
								onChange={e => setEmail(e.target.value)}
								className="form-control"
								placeholder="Email Address"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Email</label>
							<input
								type="password"
								name="password"
								id="password"
								value={password}
								onChange={e => setPassword(e.target.value)}
								className="form-control"
								placeholder="Password"
							/>
						</div>
						<input type="submit" value="LOGIN" className="btn btn-primary" />
					</form>
				</div>
			</div>
		</div>
	)
}

export default AdminLogin
