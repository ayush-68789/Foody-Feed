import {
    Box,
    Typography,
    TextField,
    Button,
    Stack,
    InputAdornment,
} from "@mui/material";

import {
    LockOutlined,
    EmailOutlined,
    RestaurantOutlined,
} from "@mui/icons-material";

import { Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout.jsx";
import { useState } from "react";
import { authRequest } from "../../lib/auth.js";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [busy, setBusy] = useState(false);
    const submit = async (event) => {
        event.preventDefault(); setError(""); setBusy(true);
        try { await authRequest("partner/login", { identifier: email, password }); setSuccess("Signed in successfully."); }
        catch (err) { setError(err.message); } finally { setBusy(false); }
    };
    return (
        <AuthLayout>
            <Stack component="form" onSubmit={submit} spacing={3}>
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
                        <RestaurantOutlined sx={{ color: "#fff" }} />
                    </Box>

                    <Typography variant="h4" fontWeight={700} color="#111827">
                        Partner Login
                    </Typography>

                    <Typography color="text.secondary" mt={1}>
                        Welcome back! Manage your restaurant with us.
                    </Typography>
                </Box>

                <Stack spacing={2}>
                    <TextField
                        fullWidth
                        label="Business email"
                        placeholder="restaurant@example.com"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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

                    <Box>
                        <Typography fontSize={14} fontWeight={600} mb={1}>
                            Password
                        </Typography>

                        <TextField
                            fullWidth
                            placeholder="Enter your password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Box>
                </Stack>

                <Button
                    type="submit"
                    disabled={busy}
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
                    {busy ? "Signing in…" : "Sign in as Partner"}
                </Button>
                {error && <Typography role="alert" color="error">{error}</Typography>}
                {success && <Typography role="status" color="success.main">{success}</Typography>}

                <Typography
                    sx={{
                        textAlign: "center",
                        fontSize: 14,
                        color: "text.secondary",
                    }}
                >
                    Don't have a partner account?{" "}
                    <Typography
                        component={Link}
                        to="/foodPartner/register"
                        sx={{
                            fontWeight: 600,
                            color: "#2563EB",
                            textDecoration: "none",
                            "&:hover": {
                                textDecoration: "underline",
                            },
                        }}
                    >
                        Register your restaurant
                    </Typography>
                </Typography>
            </Stack>
        </AuthLayout>
    );
};

export default Login;
