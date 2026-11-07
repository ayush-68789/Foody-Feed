import { Box, Paper, Container } from "@mui/material";

const AuthLayout = ({ children }) => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#F3F5F9",
                py: 4,
                px: 2,
            }}
        >
            <Container maxWidth="xs" disableGutters>
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 3, sm: 4 },
                        borderRadius: 4,
                        border: "1px solid #E5E7EB",
                        backgroundColor: "#FFFFFF",
                        boxShadow: "0 8px 30px rgba(15, 23, 42, 0.05)",
                    }}
                >
                    {children}
                </Paper>
            </Container>
        </Box>
    );
};

export default AuthLayout;
