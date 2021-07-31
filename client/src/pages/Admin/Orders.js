import React from 'react'

const template = (total, orderId) => {
	const subject = 'Your Order from Cleanfits'
	const body = `Thank you for choosing cleanfits. \n\n

    We received your order with id ${orderId}. \n
    Total payment made with paystack was N${total} \n\n

    Thank you for choosing Cleanfits. Best regards.
  `
	return { subject, body }
}

const Orders = ({ orders, viewMore, markAsDelivered }) => {
	const [delivered, setDelivered] = React.useState(0)
	const [delivered2, setDelivered2] = React.useState(0)

	return (
		<div
			className="sortable-pricing-table my-5 px-1"
			style={{
				height: '400px',
				overflowY: 'scroll'
			}}
		>
			{/* <button
        onClick={() => {
          setScrollPosition(0);
          window.scrollTo(0, scrollPosition);
        }}
        type="button"
        className="btn btn-primary float-right"
      >
        Add New
        <i
          className={
            pricing.length > 0
              ? "fas fa-angle-up pl-1"
              : "fas fa-spinner fa-spin pl-1"
          }
        />
      </button> */}

			<table className="table table-hover">
				<thead>
					<tr>
						<th scope="col">Order ID</th>
						<th scope="col">Items/Total</th>
						<th scope="col">Delivered</th>
						{/* <th scope="col">User</th> */}
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					{orders.length > 0 &&
						orders.map((order, i) => (
							<tr key={order._id}>
								<td>{order.orderId}</td>
								<td>
									{order.cart.length} items @ N{order.subTotal}
								</td>
								<td>
									{order.delivered === true ? (
										<span className="text-dark">Yes</span>
									) : (
										<span className="text-danger">No</span>
									)}
								</td>
								{/* <td style={{ overflowX: "scroll" }}>{order.userEmail}</td> */}
								<td>
									<div className="dropdown">
										<button
											type="button"
											className="btn dropdown-toggle"
											id="dropdownMenuButton"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
											style={{
												background: 'transparent',
												color: '#000'
											}}
										>
											<i className="fas fa-cog" />
										</button>
										<div
											className="dropdown-menu"
											aria-labelledby="dropdownMenuButton"
										>
											{/* <button
                        onClick={() => viewMore(order._id)}
                        className="dropdown-item btn btn-light"
                        data-toggle="modal"
                        data-target="#viewCompleteOrder"
                      >
                        View More
                      </button> */}
											<button
												onClick={() => markAsDelivered(order._id)}
												className="dropdown-item btn btn-light"
											>
												Mark as Delivered
											</button>
											{/* <a
												href={`mailto:${order.userEmail}?subject=${
													template(order.subTotal).subject
												}&body=${template(order.subTotal).body}`}
												className="dropdown-item btn btn-light"
											>
												Email User
											</a> */}
										</div>
									</div>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	)
}

export default Orders
