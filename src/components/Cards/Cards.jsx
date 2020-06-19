import React from 'react'
import {Card,CardContent,Typography,Grid, Grow} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

 const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
     if(!confirmed){
         return 'Loading...';
     }
    return (
        <div className={styles.container}>
        <Grid container spacing={3} justify='center'>
            <Grid item component={Card} xs={12} md={3} className = {cx(styles.card, styles.infected)}>
                <CardContent className='tc bg-light-blue grow shadow-5 '>
                    <Typography color='textSecondary' gutterBottom>Infected</Typography>
                    <Typography variant='h5'>
                        <CountUp start ={0} end={confirmed.value} duration={2.5} seperator=',' />
                    </Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant='body2'>Number of active cases from COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className = {cx(styles.card, styles.recovered)}>
                <CardContent className='tc bg-light-green grow shadow-5 '>
                    <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                    <Typography variant='h5'>
                        <CountUp start ={0} end={recovered.value} duration={2.5} seperator=',' />
                    </Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant='body2'>Number of Recoveries from COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className = {cx(styles.card, styles.deaths)}>
                <CardContent className='tc bg-light-red grow shadow-5 '>
                    <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                    <Typography variant='h5'>
                        <CountUp start ={0} end={deaths.value} duration={2.5} seperator=',' />
                    </Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant='body2'>Number of deaths casused by COVID-19</Typography>
                </CardContent>
            </Grid>
        </Grid>
        </div>
    )
}
export default Cards;