import styled from "styled-components";

export const FundTextContainer = styled.div`
height: auto;
width: auto;
padding: 1rem;
background-color: transparent;
font-family:  ${$props => $props.theme.font.primary};

`

export const FundHeader = styled.h1`
font-size: 2rem;
font-weight:  ${$props => $props.theme.font.fontWeight.bold};
color: ${$props => $props.theme.colors.neutral.black};
`

export const FundFooter = styled.span`
font-size: 1rem;
color: ${$props => $props.theme.colors.neutral.darkGray};
`