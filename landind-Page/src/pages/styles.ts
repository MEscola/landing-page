import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
   
    .coluna1 {
        text-align: center;
        width: 540px;
        height: auto;
        background-color: #a6a6a6;
        font-family: "Poppins", sans-serif;
        //font-weight: 700;
        font-size: 1.2rem ;
        color: #1E255E;
         
    }

    .coluna2 {
        width: 999px;
        height: 999px;
        background-color: blueviolet;
        padding: 2rem;
        
    }

    img {  
        max-width: 50%; 
        height: auto;
        margin-top: 1rem;
        margin-bottom: 2rem;
        //border-radius: 80%;
        //border: 4px dashed #ff007f;
        padding: 0.4rem;
        
    }

    h1 {
        font-size: 2rem;
        
        
        //background: variables.$gradient;
        //-webkit-background-clip: text;
        //-webkit-text-fill-color: transparent;
        //color: #F27286;
    }


`