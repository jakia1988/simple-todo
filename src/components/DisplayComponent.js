import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Data = (props) => {  
 const rows = props.data;
  return (    
    <Paper style={{width: '100%', marginTop: 3, overflowX: 'auto',}}>
      <Table style={{minWidth: 300}}>
        <TableHead>
          <TableRow>
            <TableCell >Serial</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Created On</TableCell>
            <TableCell >Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {             
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell >{row.name}</TableCell>
                <TableCell >{row.created}</TableCell>
                <TableCell><i className="material-icons" style={{cursor:'pointer'}}
                 onClick={() => props._handleDelete(row.id)}>delete</i></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>    
  )
}
export default Data;
