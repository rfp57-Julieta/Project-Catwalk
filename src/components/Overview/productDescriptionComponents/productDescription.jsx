import React, { useState, useEffect, useContext } from 'react'
import {  useParams, useLocation } from 'react-router-dom';

import { GlobalContext } from '../../../context/GlobalState.js'
import { OverviewContext } from '../../../context/OverviewState.js'


export const ProductDescription = (props) => {
  const { currentProductId } = useContext(GlobalContext);
  const { getProductStyles, getProductInfo, productStyles, productInfo } = useContext(OverviewContext);
  let id = currentProductId;

  useEffect(() => {
    console.log(id);
    getProductInfo(id)
  }, [id])

  const productSlogan = productInfo.data ? productInfo.data.slogan : ''
  const productDescription = productInfo.data ? productInfo.data.description : ''

  return (
    <div>
      <div>
        {productSlogan}
      </div>
      <div>
        {productDescription}
      </div>
    </div>
  );
}

