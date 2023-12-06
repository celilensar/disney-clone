import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
        <h4>Recommended For You</h4>
        <Content>
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3D51E080506433A3E00EB91AFB42A1CE170BC66605BD1CEC9715554C858796E8/scale?width=1200&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3D51E080506433A3E00EB91AFB42A1CE170BC66605BD1CEC9715554C858796E8/scale?width=1200&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3D51E080506433A3E00EB91AFB42A1CE170BC66605BD1CEC9715554C858796E8/scale?width=1200&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3D51E080506433A3E00EB91AFB42A1CE170BC66605BD1CEC9715554C858796E8/scale?width=1200&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3D51E080506433A3E00EB91AFB42A1CE170BC66605BD1CEC9715554C858796E8/scale?width=1200&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3D51E080506433A3E00EB91AFB42A1CE170BC66605BD1CEC9715554C858796E8/scale?width=1200&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3D51E080506433A3E00EB91AFB42A1CE170BC66605BD1CEC9715554C858796E8/scale?width=1200&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            <Wrap>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3D51E080506433A3E00EB91AFB42A1CE170BC66605BD1CEC9715554C858796E8/scale?width=1200&aspectRatio=1.78&format=jpeg"/>
            </Wrap>
            

        </Content>

    </Container>
  )
}

export default Movies

const Container = styled.div`

`

const Content= styled.div`
display:grid;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0,1fr));

`


const Wrap= styled.div`
border-radius: 10px;
overflow: hidden;
border: 3px solid rgba(249,249,249,0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition-duration: 300ms;
cursor:pointer;

img {
    width:100%;
    height:100%;
    object-fit: cover;
    
}

&:hover {
    transform: scale(1.05);
    border-color:rgba(249,249,249,0.8);
}


`