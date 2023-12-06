import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
        <Background>
            <img src="https://icdn.ensonhaber.com/resimler/diger/kok/2019/02/28/1234_9611.jpg"/>
        </Background>
        <ImgTitle>
            <img src="/images/viewers-starwars.png"/>
        </ImgTitle>
        <Controls>
            <PlayButton>
                <img src="/images/play-icon-black.png" />
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
                <img src="/images/play-icon-white.png" />
                <span>TRAILER</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src="/images/group-icon.png" />
            </GroupWatchButton>

        </Controls>
        <SubTitle>
            2018 • 7m • Family, Fantasy, Kids, Animation
        </SubTitle>
        <Description>
        İngilizceden çevrilmiştir-
Bao, Domee Shi tarafından yazılan ve yönetilen ve Pixar Animation Studios tarafından üretilen 2018 Amerikan bilgisayar animasyonlu kısa filmdir. Bir kadın yönetmen tarafından yönetilen ilk Pixar kısa filmidir. 15 Haziran 2018'de Incredibles 2 ile vizyona girmeden önce Tribeca Film Festivali'nde gösterildi.
        </Description>
    </Container>
  )
}

export default Detail


const Container= styled.div`

    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
    

`

const Background = styled.div`
position: fixed;
top:0;
left:0;
bottom:0;
right:0;
opacity:0.7;
z-index:-1;



img {
    
    width:100%;
    height:100%;
    object-fit: cover;
    

}


`

const ImgTitle= styled.div`

height: 30vh;
min-height: 170px;
width: 35vw;
min-width: 200px;  

img {
    width:700px;
    height: 500px;
    object-fit: contain;
    
    
}

`

const Controls= styled.div`
display: flex;
align-items: center;

`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size:15px;
    padding: 0 26px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height:56px;
    background: rgb(249,249,249);
    border: none;
    letter-spacing: 1.9px;
    cursor:pointer;

    &:hover {
        background: rgb(198,198,198);

    }
    
`

const TrailerButton= styled(PlayButton)`
background: rgba(0,0,0,0.3);
border: 1px solid rgb(249,249,249);
color: rgb(249,249,249);
`

const AddButton= styled.button`
margin-right:16px;
width:44px;
height: 44px;
display: flex;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
background-color: rgb(0,0,0,0.6);
cursor:pointer;


span {
    font-size: 30px;
    color:white;
}


`
const GroupWatchButton= styled(AddButton)`
background-color: rgb(0,0,0);



`
const SubTitle = styled.div`
color: rgb(249,249,249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;
`

const Description= styled.div`
line-height: 1.4;
font-size: 20px;
margin-top: 16px;
width: 70%;
`