import styled from "styled-components";

export const container = styled.button`
width: 130px;
height: 42px;
border: 1px solid;
color: #17A4D0;
font-size: 14px;
margin-left: 25px;
border-radius: 5px;
box-shadow: 0px 1px 20px - 10px 0px ;
transition: all 25ms ease-out;

&:hover {
    color: #fff;
    background-color: #17A4D0;
    opacity: calc(70%);
}

`