import React from 'react'
import Layout from '../Layout'
import GetInTouch from '../components/Content/GetInTouch';

const Contact = ({location}) => {
  return(
    <Layout pathname={location.pathname}>
      <GetInTouch title="Contact Us" />
    </Layout>
  )
}

export default Contact