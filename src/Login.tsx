import { Box, Button, Checkbox, FormControl, FormControlLabel, TextField, Typography} from "@mui/material"

const Login = () => {
  
  return (
    <Box
        bgcolor="#7159c1"
        display="flex"
        flexDirection="column"
        minHeight="100vh"
    >
        <Typography 
            variant="h6" align="center">
                Sing in
        </Typography>
        
        <Box
            component="form"
            bgcolor="#7159c1"
            display="flex"
            flexDirection="column"
        >
            <FormControl>
                <TextField
                    type="email"
                    placeholder="E-mail"
                    variant="outlined"
                    required
                />
                <TextField
                    type="password"
                    placeholder="Password"
                    variant="outlined"
                />
            </FormControl>

            <FormControlLabel
                control={<Checkbox value="remember" color="primary" required />}
                label="Remember"
            />

            <Button type="submit" onClick={() => alert("Entrar")} variant="contained">Login</Button>
        </Box>
    </Box>
  )
}

export default Login
