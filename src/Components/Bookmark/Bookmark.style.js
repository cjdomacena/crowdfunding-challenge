import styled from 'styled-components'


export const Bookmark = styled.div`

height: 55px;
width: fit-content;
border-radius: 56px;
background: rgba(242,242,242, 1);
display: flex;
align-items: center;
justify-content: space-between;
font-family: inherit;
span
{
    padding: 0 1.2rem 0 1rem;
    font-family:inherit;
    font-weight: ${props=>props.theme.font.fontWeight.medium};
    color: ${props => props.theme.colors.neutral.darkGray};
}
margin: 0 auto;
svg
{

}
`