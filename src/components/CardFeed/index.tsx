import { Author, Container, ContainerDetails, ContainerImage, Description, ImageProfile, Label } from "./style";

interface Props {
    imgSrc: string;
    author: string;
    postDescription: string;

}

export function CardFeed({
    imgSrc,
    author,
    postDescription
}: Props){
    return(
        <Container>
            <ContainerImage>
                <ImageProfile src={imgSrc}/>
            </ContainerImage>
            <ContainerDetails>
                <Description>
                {postDescription}
                 </Description>
                <Label>Enviado por:</Label>
                <Author>{author}</Author>
            </ContainerDetails>
        </Container>
    )
}