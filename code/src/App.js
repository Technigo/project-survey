import * as React from 'react'
import { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import { ButtonGroup, Card, CardContent } from '@material-ui/core'

import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'

export const useStyles = makeStyles((theme) => ({
  palette: {
    type: 'dark',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing(1),
  },
  formControl: {
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export const App = () => {
  const [name, setName] = useState('')
  const [favourite, setFavourite] = useState('')
  const [knowledge, setKnowledge] = useState('')
  const [section, setSection] = useState(1)

  const handleName = (name) => {
    setName(name)
  };

  const handleFavourite = (favourite) => {
    setFavourite(favourite)
  };

  const handleKnowledge = (knowledge) => {
    setKnowledge(knowledge)
  };

  const classes = useStyles()

  return (
    <Container component='main' maxWidth='xs'>
      <AppBar>
        <Toolbar style={{ justifyContent: 'center' }}>
          <Typography variant='h6' className={classes.title}>
            We would like to know more about you
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>

        {section !== 4 && (
          <form className={classes.form} noValidate>
            {section === 1 && <Step1 onNameChange={handleName} />}
            {section === 2 && <Step2 onFavouriteChange={handleFavourite} />}
            {section === 3 && <Step3 onKnowledgeChange={handleKnowledge} />}
          </form>
        )}
        {section === 4 && (
          <Card variant='outlined' raised='True'>
            <CardContent>
              <Typography component='h1' variant='h5'>
                Your name: {name}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography component='h1' variant='h5'>
                Your Favourite: {favourite}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography component='h1' variant='h5'>
                Your Knowledge: {knowledge}
              </Typography>
            </CardContent>
          </Card>
        )}
        <ButtonGroup>
          {section < 4 && (
            <Button
              fullWidth
              variant='contained'
              className={classes.submit}
              onClick={() => setSection(section - 1)}
            >
              Previous Step
            </Button>
          )}
          {section < 3 && (
            <Button
              fullWidth
              variant='contained'
              className={classes.submit}
              onClick={() => setSection(section + 1)}
            >
              Next Step
            </Button>
          )}
          {section === 3 && (
            <Button
              fullWidth
              variant='contained'
              className={classes.submit}
              onClick={() => setSection(section + 1)}
            >
              Submit
            </Button>
          )}
          {section === 4 && (
            <Button
              fullWidth
              variant='contained'
              className={classes.submit}
              onClick={() => setSection(1)}
            >
              Start Over
            </Button>
          )}
        </ButtonGroup>
        <Stepper activeStep={section - 1}>
          <Step>
            <StepLabel>Step 1</StepLabel>
          </Step>
          <Step>
            <StepLabel>Step 2</StepLabel>
          </Step>
          <Step>
            <StepLabel>Step 3</StepLabel>
          </Step>
        </Stepper>
      </div>
    </Container>
  );
};
