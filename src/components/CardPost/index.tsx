import { useState } from "react";
import { useFeed } from "../../context/feed";
import { PickInput, Button, Container, ContainerButtons, ContainerImagePicked, ContainerInput, Input, InputTextArea, PickedImage, PickImage } from "./styles";
import { BsTrashFill } from "react-icons/bs";


export function CardPost() {
    const { feedList, setFeedList } = useFeed();
    const [author, setAuthor] = useState<string>("");
    const [selectedImage, setSelectedImage] = useState("");
    const [description, setDescription] = useState<string>("");

    function handleClick() {
        setFeedList([...feedList, {
            imgSrc: selectedImage,
            author: author,
            postDescription: description
        }])

        setSelectedImage("");
        setAuthor("");
        setDescription("");
    }

    function readImage(event: any) {
        setSelectedImage(URL.createObjectURL(event.target.files[0]))
    }

    console.log("image:", selectedImage);

    return (
        <Container>

            {selectedImage !== "" ?
                <ContainerImagePicked>
                    <PickedImage src={selectedImage} />
                    <BsTrashFill style={{ marginLeft: 10 }} width={20} height={20} fill="red" onClick={() => setSelectedImage("")} />
                </ContainerImagePicked>
                :
                <PickImage>
                    <PickInput onChange={readImage} accept="image/*" type={"file"}>
                    </PickInput>
                </PickImage>

            }
            <ContainerInput>
                <Input value={author} onChange={event => setAuthor(event.target.value)} type={"text"}></Input>
            </ContainerInput>
            <ContainerInput style={{
                height: 80
            }}>
                <InputTextArea value={description} onChange={event => setDescription(event.target.value)}></InputTextArea>
            </ContainerInput>
            <ContainerButtons>
                <Button onClick={() => { }}>Descartar</Button>
                <Button primary onClick={handleClick}>Publicar</Button>
            </ContainerButtons>
        </Container>
    )
}