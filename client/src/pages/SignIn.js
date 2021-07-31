import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { firebase, isAuthenticated } from '../auth'
import { Link, Redirect } from 'react-router-dom'

const SignInPage = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-conteSignInenter;
  align-items: center;
`

const ErrorMessage = ({ message }) => {
	return (
		<div
			className="alert alert-danger alert-dismissible fade show"
			role="alert"
		>
			{message}
			<button
				type="button"
				className="close"
				data-dismiss="alert"
				aria-label="Close"
			>
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	)
}

const SignIn = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [user, setUser] = useState(null)
	const [error, setError] = useState(null)
	const [redirect, setRedirect] = useState(false)
	const [previousEmail, setPreviousEmail] = useState('')

	useEffect(() => {
		firebase
			.auth()
			.onAuthStateChanged(user =>
				user ? setRedirect(true) : setRedirect(false)
			)

		console.log(isAuthenticated)
	}, [])

	const forgotPassword = () => {}

	const loginWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider()
		provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
		firebase.auth().useDeviceLanguage()

		firebase
			.auth()
			.signInWithRedirect(provider)
			.then(user => {
				setIsLoading(false)
				setUser(user)
				console.log(user)
			})
			.catch(err => {
				setIsLoading(false)
				setError(err.message)
				setPassword('')
				console.log(err)
			})
	}
	/**
	 *
	 * @param {*} e
	 * Function to log users in
	 */
	const login = e => {
		e.preventDefault()

		setIsLoading({ isLoading: true })

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(user => {
				setIsLoading(false)
				setUser(user)
				setError(null)
				setRedirect(true)
				console.log(user)
			})
			.catch(err => {
				setIsLoading(false)
				setError(err.message)
				//setTimeout(() => setError(null), 3000)
				console.log(err)
			})
	}

	if (redirect) {
		let cart = JSON.parse(localStorage.getItem('cart'))
		if (cart !== null) {
			return <Redirect to="/cart" />
		} else {
			return <Redirect to="/" />
		}
	}
	return (
		<SignInPage>
			<div
				className="modal fade"
				id="exampleModalCenter"
				tabindex="-1"
				role="dialog"
				aria-labelledby="exampleModalCenterTitle"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalCenterTitle">
								Reset Your Password
							</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form
								onSubmit={e => {
									e.preventDefault()

									firebase
										.auth()
										.sendPasswordResetEmail(previousEmail)
										.then(success =>
											alert('We sent you an email, follow the link to verify')
										)
										.catch(err =>
											alert('Sorry, we were unable to send an email')
										)
								}}
							>
								<div className="form-group">
									<label htmlFor="previousemail">Your Email Address</label>
									<input
										type="email"
										id="previousemail"
										className="form-control"
										value={previousEmail}
										onChange={e => setPreviousEmail(e.target.value)}
										placeholder="Type your email address"
									/>
								</div>
								<input
									type="submit"
									value="Send me a reset Link"
									className="btn btn-primary btn-block"
								/>
							</form>
						</div>
						{/* <div className="modal-footer">
							<span className="text-muted">
								We'll email you a reset link to change your password
							</span>
						</div> */}
					</div>
				</div>
			</div>
			<div className="row w-100 ml-0">
				<div className="col-xs-12 col-sm-10 col-md-6 col-lg-4 mx-auto card card-body">
					<h2 className="text-center my-4">Login to Cleanfits</h2>
					{error !== null && <ErrorMessage message={error} />}

					<form className="user-login-form w-100" onSubmit={e => login(e)}>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								className="form-control"
								id="email"
								placeholder="johndoe@example.com"
								required
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								className="form-control"
								id="password"
								placeholder="Your Password"
								required
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<button type="submit" className="btn btn-block btn-primary mb-3">
							{isLoading && (
								<span
									className="spinner-border spinner-border-sm mr-4"
									role="status"
									aria-hidden="true"
								/>
							)}
							LOGIN
						</button>
						{/* <button
							onClick={() => loginWithGoogle()}
							type="button"
							className="btn btn-danger btn-block mb-3"
						>
							<i className="fab fa-google mr-1" /> {''} Signin With Google
						</button> */}

						{/* <button
							type="button"
							data-toggle="modal"
							data-target="#exampleModalCenter"
							onClick={e => forgotPassword()}
							className="btn btn-link"
						>
							Forgot Password
						</button> */}

						<p className="pt-2 text-muted">
							Don't have an account? Click{' '}
							<Link to="/signup" className="btn-link">
								here
							</Link>
						</p>
					</form>
				</div>
			</div>
		</SignInPage>
	)
}

export default SignIn
