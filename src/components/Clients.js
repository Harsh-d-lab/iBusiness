import { Grid } from '@mui/material';
import React from 'react'
import Item from './Item';
import Sidebar from './Sidebar'

function Clients() {

  const clientData = [
    {"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},
    {"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},
    {"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},
    {"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},
    {"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},
    {"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}
]

  return (
    <div>
        <Sidebar />
        <main>
            <h1>Our Clients</h1>

           <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{
          padding: '25px',
          gap: '10px',
          margin: 'auto'
        }}>
             {
              clientData.map((props) => {
                const {first_name, last_name, email, avatar} = props;

                return (
                  <Item 
                  title={first_name + ' ' + last_name}
                  image ={avatar}
                  subTitle={email}
                  />
                )
              })
            }
           </Grid>
        </main>
    </div>
  )
}

export default Clients