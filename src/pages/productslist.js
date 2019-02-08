import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


import Skus from "../components/Products/skus"

const ProductsList = () => (
  <Layout>
    <h1>Products</h1>
    <Skus /> 
  </Layout>
)

export default ProductsList