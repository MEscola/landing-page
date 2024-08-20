import React from "react";
import * as S from './styles';

type FrontendProps = {
    children: React.ReactNode;
}

const Frontend = ({children} : FrontendProps) => {
    return <S.Container><h1>Teste Frontend {children}</h1></S.Container>;
}

export default Frontend;