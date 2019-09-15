import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
export default function  Home()  {
  return (
    <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
            <Box
                textAlign="center" 
                fontStyle="oblique" 
                fontFamily="Monospace"
                fontWeight="fontWeightBold"
                 m={1}>
                <h1>
                    Basic React And Redux Example
                </h1>
                <h2>
                    Adding Displaying Deleting Post
                </h2>
            </Box>
            </Typography>
    </Container>
  )
}
