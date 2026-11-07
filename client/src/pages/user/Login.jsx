import {
    Box,
    Typography,
    TextField,
    Button,
    Stack,
    InputAdornment,
} from "@mui/material";

import { LockOutlined, EmailOutlined } from "@mui/icons-material";

import { Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout.jsx";

const Login = () => {
    return (
        <AuthLayout>
            <Stack spacing={3}>
                {/* Header */}
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
                        <LockOutlined sx={{ color: "#fff" }} />
                    </Box>

                    <Typography variant="h4" fontWeight={700} color="#111827">
                        Welcome back
                    </Typography>

                    <Typography color="text.secondary" mt={1}>
                        Please enter your details to sign in.
                    </Typography>
                </Box>

                {/* Input Fields */}
                <Stack spacing={2}>
                    {/* Email */}
                    <TextField
                        fullWidth
                        label="Email address"
                        placeholder="you@example.com"
                        type="email"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailOutlined color="action" />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />

                    {/* Password */}
                    <Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mb: 1,
                            }}
                        >
                            <Typography fontSize={14} fontWeight={600}>
                                Password
                            </Typography>

                            <Typography
                                component="span"
                                sx={{
                                    color: "#2563EB",
                                    fontSize: 13,
                                    cursor: "pointer",
                                }}
                            >
                                Forgot password?
                            </Typography>
                        </Box>

                        <TextField
                            fullWidth
                            placeholder="Enter your password"
                            type="password"
                        />
                    </Box>
                </Stack>

                {/* Login Button */}
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
                    Sign in
                </Button>

                {/* Register Link */}
                <Typography
                    sx={{
                        textAlign: "center",
                        fontSize: 14,
                        color: "text.secondary",
                    }}
                >
                    Don't have an account?{" "}
                    <Typography
                        component={Link}
                        to="/user/register"
                        sx={{
                            fontWeight: 600,
                            color: "#2563EB",
                            textDecoration: "none",

                            "&:hover": {
                                textDecoration: "underline",
                            },
                        }}
                    >
                        Sign up
                    </Typography>
                </Typography>
            </Stack>
        </AuthLayout>
    );
};

export default Login;
