import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';


const DataDisplay = ({ data }) => {

  return (
    <Card style={{ marginTop: '20px' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
            Shop Name: {data.shopName}
        </Typography>
        <Typography variant="body1" gutterBottom>
            Address: {data.address}
        </Typography>
        <Typography variant="body1" gutterBottom>
            Postal Code: {data.postalCode}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Category: {data.category}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Area: {data.area}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Latitude: {data.lat}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Longitude: {data.lng}
        </Typography>
      </CardContent>
    </Card>
    
  );
};

export default DataDisplay;