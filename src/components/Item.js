import React from 'react'
import { Card, CardMedia, CardContent, Typography} from '@mui/material'

function Item({title, subTitle, image}) {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="product-banner"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subTitle}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Item