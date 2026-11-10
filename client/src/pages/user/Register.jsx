import { Box, Typography, TextField, Button, Stack } from "@mui/material";

import { PersonAddOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

import AuthLayout from "../../components/AuthLayout.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authRequest } from "../../lib/auth.js";

const Register = () => {
    const [form, setForm] = useState({ userName: "", email: "", password: "", confirmPassword: "" });
    const [error, setError] = useState(""); const [busy, setBusy] = useState(false); const navigate = useNavigate();
    const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });
    const submit = async (event) => {
        event.preventDefault(); setError("");
        if (form.password !== form.confirmPassword) { setError("Passwords do not match"); return; }
        setBusy(true);
        try { await authRequest("user/register", { userName: form.userName, email: form.email, password: form.password }); navigate("/"); }
        catch (err) { setError(err.message); } finally { setBusy(false); }
    };
    return (
        <AuthLayout>
            <Stack component="form" onSubmit={submit} spacing={2.5}>
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
                        required value={form.userName} onChange={update("userName")}
                    />

                    <TextField
                        fullWidth
                        label="Email address"
                        placeholder="you@example.com"
                        type="email"
                        required value={form.email} onChange={update("email")}
                    />

                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        placeholder="Create a password"
                        required value={form.password} onChange={update("password")}
                    />

                    <TextField
                        fullWidth
                        label="Confirm password"
                        type="password"
                        placeholder="Confirm your password"
                        required value={form.confirmPassword} onChange={update("confirmPassword")}
                    />
                </Stack>

                <Button
                    type="submit" disabled={busy}
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
                    {busy ? "Creating account…" : "Create account"}
                </Button>
                {error && <Typography role="alert" color="error">{error}</Typography>}

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
                        to="/user/login"
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
