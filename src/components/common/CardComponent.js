import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const UserCard = (props) => {
  return (
    <Card className="usercard">
      <CardContent>
        <h2>{props.name}</h2>
        <CardContent>
            {props.content}
        </CardContent>
      </CardContent>
    </Card>    
  )
}
export default UserCard;
