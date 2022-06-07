import { Container, ImageHeader } from "./styles";
import imageHeader from '../../assets/top-header-image.png';

export function Header(){
    return(
        <Container>
           <ImageHeader  src={imageHeader} width={"103px"} height={"45px"}/>
        </Container>
    )
}