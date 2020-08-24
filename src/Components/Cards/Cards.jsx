import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ({data:props}) => {
    if(!props.confirmed){
        return 'Loading....';
    }
    console.log(props);
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component = {Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Infected </Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={props.confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(props.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Active Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Recovered </Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={props.recovered.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(props.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Recovered Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Deaths </Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={props.deaths.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(props.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Deaths</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards;