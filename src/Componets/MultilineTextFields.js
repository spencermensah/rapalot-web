import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '90%'
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Verse');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <p id="bars">{value}</p>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
