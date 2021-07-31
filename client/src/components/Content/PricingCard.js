import React, { useContext, useEffect } from 'react'
import { pathInEnv } from '../../utils'
import { AppContext } from '../../Context'
import styled from 'styled-components'

const Naira = styled.span`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 30px;
	width: 30px;
	color: #fff;

	&:before {
		content: '';
		position: absolute;
		width: 20px;
		height: 2.5px;
		background-color: #fff;
		top: 39%;
	}

	&:after {
		content: '';
		position: absolute;
		width: 20px;
		height: 2.5px;
		background-color: #fff;
		top: 53%;
	}
`

const Badge = styled.div`
	display: flex;
	align-items: center;
`

const PricingCard = ({ item }) => {
	const {
		state: { cart },
		dispatch
	} = useContext(AppContext)

	let myCart = cart

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(myCart))
		if (cart.length === 0) {
			let count = {}
			localStorage.setItem('count', JSON.stringify(count))
		}
	}, [myCart])

	const itemIsInCart = () => {
		let isInCart = false
		cart.forEach(cartItem => {
			if (cartItem._id === item._id) {
				isInCart = true
			}
		})

		return isInCart
	}

	const manageItemInCart = item => {
		if (cart.length === 0 || !itemIsInCart()) {
			dispatch({ type: 'ADD_TO_CART', payload: item })
		} else {
			dispatch({ type: 'REMOVE_FROM_CART', payload: item._id })
		}
	}

	return (
		<div className="card mb-3 w-100" style={{ position: 'relative' }}>
			<div style={{ position: 'relative' }}>
				<img
					src={pathInEnv(`/images/${item.image}`)}
					className="card-img-top"
					alt={String(item.image).split('.')[0]}
					style={{ objectFit: 'cover', height: '250px' }}
				/>
				<Badge
					className="badge badge-danger"
					style={{
						position: 'absolute',
						bottom: 10,
						left: 10,
						fontSize: '1.2rem'
					}}
				>
					<Naira>N</Naira>
					{item.price}
				</Badge>
			</div>
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<button
					type="button"
					className="btn btn-outline-primary"
					onClick={() => manageItemInCart(item)}
				>
					{itemIsInCart() ? 'Remove from Ba' : 'Add to Basket'}
				</button>
			</div>
		</div>
	)
}

export default PricingCard
