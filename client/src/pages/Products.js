import React from 'react'
import Layout from '../Layout'

const Products = ({location}) => {
  return(
    <Layout pathname={location.pathname}>
      <p className="lead">products</p>
    </Layout>
  )
}

export default Products
