import React from "react";
import styles from "./Home4.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductThunk } from "../../../redux/reducers/productSlice";

const Home4 = () => {
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
        
        <h1 className={styles.summer}>News</h1>
        <span className={styles.away}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span>
      </div>
      <div className={styles.map}>
      {data?.map((item) => (
        <div className={styles.cardsdata}>
          <div className={styles.card}>
          <img className={styles.imagemeat} src={item.image} alt="" />
          <h1>{item.beer}</h1>
          <span className={styles.name3}>{item.name}</span>
          <button className={styles.order}>Read More</button>
        </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Home4;
