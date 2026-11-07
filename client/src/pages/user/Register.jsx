import { Box, Typography, TextField, Button, Stack } from "@mui/material";

import { PersonAddOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

import AuthLayout from "../../components/AuthLayout.jsx";

const Register = () => {
    return (
        <AuthLayout>
            <Stack spacing={2.5}>
                <Box>
                    <Box
                        sx={{
                            width: 45,
                            height: 45,
                            borderRadius: 2,
                            backgroundColor: "#2563EB",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 2,
                        }}
                    >
                        <PersonAddOutlined sx={{ color: "#fff" }} />
                    </Box>

                    <Typography variant="h4" fontWeight={700} color="#111827">
                        Create an account
                    </Typography>

                    <Typography color="text.secondary" mt={1}>
                        Start your journey with us today.
                    </Typography>
                </Box>

                <Stack spacing={2}>
                    <TextField
                        fullWidth
                        label="Full name"
                        placeholder="John Doe"
                    />

                    <TextField
                        fullWidth
                        label="Email address"
                        placeholder="you@example.com"
                        type="email"
                    />

                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        placeholder="Create a password"
                    />

                    <TextField
                        fullWidth
                        label="Confirm password"
                        type="password"
                        placeholder="Confirm your password"
                    />
                </Stack>

                <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: 600,
                        backgroundColor: "#2563EB",
                        boxShadow: "none",
                        "&:hover": {
                            backgroundColor: "#1D4ED8",
                            boxShadow: "none",
                        },
                    }}
                >
                    Create account
                </Button>

                <Typography
                    sx={{
                        textAlign: "center",
                        fontSize: 14,
                        color: "text.secondary",
                    }}
                >
                    Already have an account?{" "}
                    <Typography
                        component={Link}
                        to="/login"
                        fontWeight={600}
                        color="#2563EB"
                        sx={{ textDecoration: "none" }}
                    >
                        Sign in
                    </Typography>
                </Typography>
            </Stack>
        </AuthLayout>
    );
};

export default Register;
