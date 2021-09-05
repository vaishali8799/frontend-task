import React from "react";
import styles from "./styles.module.css";

const Cards = ({ detail }) => {
 // console.log(detail);

  return (
    <div className={styles.container}>
      <div className={styles.cardtop}>
        <div className={styles.param}>
          <div>Best college 2018</div>
          <div>2 Kms away</div>
        </div>
        <div className={styles.rating}>
          {detail.promoted ? (
            <div className={styles.promote}>PROMOTED</div>
          ) : null}

          <div className={styles.ratecard}>
            <p>
              <span className={styles.rate}>{detail.rating}</span>/5
            </p>
            <p>{detail.rating_remarks}</p>
          </div>
          <div className={styles.rank}> # {detail.ranking}</div>
        </div>
      </div>
      <div className={styles.cardbottom}>
        <div className={styles.collegedetails}>
          <p className={styles.head}>
            {detail.college_name}{" "}
            <span className={styles.star}>⭐⭐⭐⭐⭐</span>
          </p>
          <p className={styles.subhead}>
            {detail.nearest_place[0]} |{" "}
            <span className={styles.sub2}> {detail.nearest_place[1]}</span>
          </p>
          <p className={styles.detail}>
            <span className={styles.range}>93% Match : </span>{" "}
            <span className={styles.dis}>2.5 Kms</span> from GTB Nagar,{" "}
            <span className={styles.dis}>7 Kms</span> from Rajiv Chowk
          </p>
          <div className={styles.offer}>
            Flat Rs <span className={styles.range}> 2000</span> off+ upto Rs
            <span className={styles.range}> 500</span> wallet! to avail...
            <span className={styles.login}>LOGIN</span>
          </div>
        </div>
        <div className={styles.collegefees}>
          <div className={styles.originalfee}>
            Rs {detail.original_fees}
            <span>
              {" "}
              <div className={styles.disc}> {detail.discount} %</div>
            </span>
          </div>
          <div className={styles.pay}>
            Rs {detail.discounted_fees}
            <p>{detail.fees_cycle}</p>
          </div>

          <p className={styles.free}>
            {" "}
            {detail.amenties[0]} . {detail.amenties[1]}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
