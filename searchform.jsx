import React from 'react'; 
import { TextField, Button } from '@mui/material'; 
export default function SearchForm({ onSearch }) { 
return ( 
<div className="p-4 bg-white rounded shadow-md flex flex-col md:flex-row 
gap-4 items-center"> 
<TextField label="Destination" variant="outlined" size="small" /> 
<TextField type="date" label="Check-in" InputLabelProps={{ shrink: true 
}} size="small" /> 
<TextField type="date" label="Check-out" InputLabelProps={{ shrink: 
true }} size="small" /> 
<TextField type="number" label="Guests" variant="outlined" size="small" 
/>
<Button variant="contained" onClick={onSearch}>Search</Button> 
</div>
);
}