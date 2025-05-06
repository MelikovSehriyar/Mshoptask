import React from 'react'
import styles from "./Home4.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../../redux/reducers/productSlice'
const Home4 = () => {
    const dispatch = useDispatch()


    const data = useSelector(state => state.products.products)
    const loading = useSelector(state => state.products.loading)
    const error = useSelector(state => state.products.error)
    console.log(data);
    
    useEffect(() => {
        dispatch(getProducts)
    },[])
  return (
    <div>
      {data && data.map(item => {
        <div className={styles.card}>
            <img src={item.image} alt="" />
            <span>{item.name}</span>
            <span>{item.span}</span>
        </div>
      })}
    </div>
  )
}

export default Home4
