import React from "react";
import styles from "./Home3.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductThunk } from "../../../redux/reducers/productSlice";

const Home3 = () => {
  const addToCart = async (data) => {
    const res = await axios.post("")
    const result = res.data
  console.log();
  alert(`${result.name} Sebete elave olundu`)
  
  }
  const dispatch = useDispatch();

  const data = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  console.log(data);

  useEffect(() => {
    dispatch(getProductThunk());
  }, [dispatch]);
  return (
    <div>
      <div className={styles.textss3}>
       <span className={styles.devo}>Devoted to wonderful beauty</span>
       <h2 className={styles.pri}>Flowers Pricing</h2>
      </div>
      <div className={styles.map}>
      {data?.map((item) => (
        <div className={styles.cardsdata}>
          <div className={styles.card}>
          <img className={styles.imageflw} src={item.image} alt="" />
          <h1>{item.mazus}</h1>
          <span className={styles.prices}>{item.price}</span>
        </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Home3;
