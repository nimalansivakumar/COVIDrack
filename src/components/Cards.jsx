import React from "react";
import styles from "./Cards.module.css";
import Countup from "react-countup";
import InfectedSvg from "../images/infected.svg";
import RecoveredSvg from "../images/recovered.svg";
import DeathsSvg from "../images/death.svg";

const Cards = (props) => {
  const { data, country, mounted } = props.data;
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2 className={styles.country_name}>Country: {country}</h2>
        <p>
          Last Updated :{" "}
          {mounted === true ? new Date(data.lastUpdate).toDateString() : null}
        </p>
      </div>
      <div className={styles.cards_container}>
        <div className={styles.card}>
          <h2>Infected</h2>
          <div className={styles.img_container}>
            <img src={InfectedSvg} alt="..."></img>
          </div>
          <p>
            <Countup
              end={mounted === true ? data.confirmed.value : 0}
              separator=","
            ></Countup>
          </p>
          <p className={styles.subtext}>No.of Active COVID-19 cases</p>
        </div>
        <div className={styles.card}>
          <h2>Recovered</h2>
          <div className={styles.img_container}>
            <img src={RecoveredSvg} alt="..."></img>
          </div>
          <p>
            <Countup
              end={mounted === true ? data.recovered.value : 0}
              separator=","
            ></Countup>
          </p>
          <p className={styles.subtext}>No.of Recovered COVID-19 cases</p>
        </div>
        <div className={styles.card}>
          <h2>Deaths</h2>
          <div className={styles.img_container}>
            <img src={DeathsSvg} alt="..."></img>
          </div>
          <p>
            <Countup
              end={mounted === true ? data.deaths.value : 0}
              separator=","
            ></Countup>
          </p>
          <p className={styles.subtext}>No.of Deaths COVID-19 cases</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
