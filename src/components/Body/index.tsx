import { useFeed } from "../../context/feed";
import { CardFeed } from "../CardFeed";
import { CardPost } from "../CardPost";
import { Container, ContainerFeed, ContainerPost } from "./styles";


export function Body() {
    const { feedList} = useFeed();

    return (
        <>
        <Container>
            
                <CardPost />
          

           
                {feedList.map(item=> <CardFeed {...item}/>)}
        </Container>
        </>
    )
}