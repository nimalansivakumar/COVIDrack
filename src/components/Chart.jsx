import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "./Charts.module.css";

const ChartAnime = (props) => {
  const isMounted = props.data.mounted;
  const { confirmed, recovered, deaths } = props.data.data;

  const BarChart =
    isMounted === true ? (
      <Bar
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [
            {
              label: "People",
              data: [confirmed.value, recovered.value, deaths.value],
              backgroundColor: [
                "rgb(255, 213, 107)",
                "rgb(89, 245, 128)",
                "rgb(245, 92, 71)",
              ],
              hoverBorderWidth: 3,
              hoverBorderColor: "#2e2e2e",
            },
          ],
        }}
        options={{
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    ) : null;

  return (
    <div className={styles.container}>
      {isMounted === true ? BarChart : null}
    </div>
  );
};

export default ChartAnime;
