import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';

const Alert =  (props) => {        
    return (
    <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
     
    }}
    onClose = {props._handleSnackbarAction}
    open={props.active}
    autoHideDuration={500}
    ContentProps={{
      'aria-describedby': 'msg',
    }}
    message={<span id="msg">{props.message}</span>}/>
  )
}
export default Alert;
