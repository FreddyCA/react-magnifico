import { Global, css } from "@emotion/react";
import { CssBaseline } from "@mui/material";

const ResetStyles = () => {
  return (
    <>
      <CssBaseline />
      <Global
        styles={css`
          body {
            font-family: "Source Sans 3", sans-serif;
          }
        `}
      ></Global>
    </>
  );
};

export default ResetStyles;
