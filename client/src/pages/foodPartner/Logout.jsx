import { Box, Typography, Button, Stack } from "@mui/material";

import { Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout.jsx";
import { useEffect } from "react";
import { authRequest } from "../../lib/auth.js";

const Logout = () => {
    useEffect(() => { authRequest("partner/logout").catch(() => {}); }, []);
    return (
        <AuthLayout>
            <Stack
                spacing={3}
                sx={{
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <Box
                    sx={{
                        width: 75,
                        height: 75,
                        borderRadius: "50%",
                        backgroundColor: "#ECFDF3",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 42,
                            fontWeight: 600,
                            color: "#16A34A",
                            lineHeight: 1,
                        }}
                    >
                        ✓
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight={700} color="#111827">
                        You're signed out
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{
                            mt: 1.5,
                            lineHeight: 1.7,
                        }}
                    >
                        Your restaurant partner session has ended successfully.
                        We look forward to seeing you again!
                    </Typography>
                </Box>

                <Button
                    component={Link}
                    to="/foodPartner/login"
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
                    Sign in again
                </Button>

                <Typography color="text.secondary" sx={{ fontSize: 13 }}>
                    Thank you for partnering with us.
                </Typography>
            </Stack>
        </AuthLayout>
    );
};

export default Logout;
