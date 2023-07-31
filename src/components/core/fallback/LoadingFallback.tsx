import {CircularProgress, Stack} from "@mui/material";

const LoadingFallback = () => {
    return (
        <Stack direction="row" alignItems={"center"} justifyContent={"center"} spacing={2}  sx={{ height: "80vh" }} >
            <CircularProgress color="inherit" />
        </Stack>
    );
};

export default LoadingFallback;