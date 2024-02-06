import styled from "styled-components";

export const Container = styled.div`

height: 100vh;
background: rgb(48,48,143);
background: linear-gradient(131deg, rgba(48,48,143,1) 0%, rgba(55,171,164,1) 100%);
display: flex;
align-items: center;
justify-content: center;

`

export const Form = styled.div`

height: 400px;
width: 400px;
background: rgb(48,48,143);
background: linear-gradient(331deg, rgba(48,48,143,1) 0%, rgba(55,171,164,1) 100%);

display: flex;
gap: 10px;
justify-content: center;
flex-direction: column;

padding: 20px;
border-radius: 10px;


`

export const Titulo = styled.h1`

font-size: 25px;
font-weight: 700;
margin: 20px;
color: #fff;
`

export const Input = styled.input`

border: none;
width: 100%;
border-radius: 10px;
padding: 10px;

outline: none;
`

export const Button = styled.button`

width: 100%;
padding: 10px;
cursor: pointer;
color: #fff;
font-weight: 700;
border: none;
border-radius: 10px;
background-color: #72a3d4;


`