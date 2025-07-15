import React from 'react'; 
import { Card, CardMedia, CardContent, Typography, Button } from 
'@mui/material'; 
export default function RoomCard({ room, onBook }) { 
return ( 
<Card className="w-full md:w-1/3 m-2"> 
<CardMedia component="img" height="140" image={room.image} alt="room" 
/> 
<CardContent> 
<Typography variant="h6">{room.name}</Typography> 
<Typography variant="body2" 
color="textSecondary">{room.description}</Typography> 
<Typography variant="subtitle1">₹{room.price}/night</Typography> 
<Button variant="outlined" onClick={() => onBook(room)}>Book 
Now</Button> 
</CardContent> 
</Card> 
); 
}