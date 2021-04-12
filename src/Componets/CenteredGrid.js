import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import RapService from './../services/RapService.js';

import SmallChips from './SmallChips';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function CenteredGrid() {
  const classes = useStyles();
  const [value, setValue] = React.useState([]);

  RapService.getData().then(
    resp => {
      const array1 = [];
      for (var i = 0; i < resp.data.length; i++) {
        array1.push(resp.data[i].word);
      }
       setValue(array1)
    }
  );

  return (
    <div className={classes.root}>
      <Grid container>
        {
          value.splice(1,10).map(
            function(item, i){
              return <Grid item xs={3}><SmallChips word={item}/></Grid>
            })
      }
      </Grid>
    </div>
  );
}
