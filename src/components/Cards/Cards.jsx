import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
import cx from "classnames";
function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  console.log(confirmed, recovered, deaths, lastUpdate);

  if (!confirmed) {
    return <div>"Loading..."</div>;
  }

  return (
    <div className={styles.container}>
      <Grid container justify="center" spacing={3}>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.infected, styles.card)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" gutterBottom>
              number of active cases from covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.recovered, styles.card)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" gutterBottom>
              number of active cases from covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.deaths, styles.card)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" gutterBottom>
              number of active cases from covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
