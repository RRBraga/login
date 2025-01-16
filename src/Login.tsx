import { Box, Button, TextField, Typography } from "@mui/material"

const Login = () => {
  
  return (
    <Box
    bgcolor="#7159c1"
    display="flex"
    flexDirection="column"
    >
        <Typography 
            variant="h1" align="center">
                Sing in
        </Typography>
        
        <Box
        bgcolor="#7159c1"
        display="flex"
        flexDirection="column"
        >
            <TextField
                type="email"
                placeholder="E-mail"
                variant="outlined"
            />
            <TextField
                type="password"
                placeholder="Password"
                variant="outlined"
            />
            <Button variant="contained">Contained</Button>
        </Box>
    </Box>
  )
}

export default Login
