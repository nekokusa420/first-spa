import React from 'react'
import {useParams, Link} from "react-router-dom"
import Title from './Title'


export default function ProductDetail() {

  let params = useParams()

  return (
    <div>
      <Title mainTitle = {'#' + params.id  +" "+ '產品資料'}/>

        <Link to = "/">
        返回主頁
        </Link>
    </div>
  )
}
