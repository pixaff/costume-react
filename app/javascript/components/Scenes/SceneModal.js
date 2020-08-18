import React, { useState, useEffect } from 'react';
import axios from 'axios'
import SceneEditForm from './SceneEditForm'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  console.log(props)
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [scene, setScene] = useState({})


  useEffect(() => {
  const url = `/api/v1/scenes/${props.id}`
      axios.get(url)
      .then( (resp) => {
        console.log(resp.data)
        setScene(resp.data)
      })
      .catch( data => console.log('Error', data) )
    }, [])

  const handleChange = (e) => {
    e.preventDefault()
    setScene(Object.assign({}, scene, {[e.target.name]: e.target.value}))
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted")
    if (noError) {
      handleClose();
    }
    else console.log("Error")
  };

  const noError = true

  return (
    <div>
      <IconButton aria-label="edit" onClick={handleOpen}>
        <EditIcon fontSize="small" />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <SceneEditForm
              id={props.id}
              scene={scene}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleClose={handleClose}
            />
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">ID {props.id} is going to be edited</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
