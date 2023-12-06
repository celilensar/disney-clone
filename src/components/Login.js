import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

function Login() {

const history= useHistory();
	

  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <SignUp onClick={()=> {  history.push('/')
			}} >
                GET ALL THERE
            </SignUp> 
            <Description>
               <p>Dünyanın dört bir yanındaki hayranlarımıza yönelik kutlamalarımız; ikonik markalarımız Disney, Pixar, Marvel, Star Wars ve National Geographic’e ait yepyeni içeriklerin yanı sıra en yenilerin de dahil olduğu binlerce saatlik dizi ve filmle hayat buluyor. Ortak hikayemizin bir sonraki bölümüne bir göz at. #DisneyPlusDay kutlu olsun!</p> 
            </Description> 
            <CTALogoTwo src="/images/cta-logo-two.png" />  
        </CTA>
    </Container>
  )
}

export default Login

const Container= styled.div`
position:relative;
height: calc(100vh - 70px);
width: 100%;
display: flex;
align-items: center;
justify-content= center;

&::before {
    background: url("/images/login-background.jpg");
    background-position:  top;
    background-size: cover;
    content:"";
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    opacity: 0.7;
    z-index:-1;
    

`

const CTA = styled.div`

    max-width:650px;
    padding: 80px 40px;
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    

    

`

const CTALogoOne = styled.img`

`

const SignUp= styled.a`
width: 100%;
background-color: #0063e5;
font-weight: bold;
padding: 17px 0;
color: #f9f9f9;
border-radius: 4px;
text-align: center;
font-size: 18px;
cursor: pointer;
letter-spacing: 1.5px;
margin-top: 8px;
margin-bottom: 12px;

&:hover {
    background-color: #0483ee;
}

`

const Description= styled.p`
font-size: 11px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;



`
const CTALogoTwo= styled.img`

`