import { Container } from "@mui/material";


const Wrapper = ({children}) => {

    return  <Container maxWidth="xl">{children}</Container>
}

export default Wrapper