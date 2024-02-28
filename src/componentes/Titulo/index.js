import styled from "styled-components";

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${ props => props.cor || '#000'};
    font-size: ${ props => props.tamanhoFonte};
    text-align: ${ props => props.alinhamento};
    margin: 0;
`

