import styled from 'styled-components'


export const Navbar = styled.nav`
display:flex;
justify-content: space-between;
align-items:center;
padding: 2rem;
font-family: ${$props => $props.theme.font.primary};
max-width: ${$props=>$props.theme.viewport.desktop};
margin: 0 auto;
`

export const NavBrand = styled.div``

export const NavItems = styled.ul`
display:flex;
@media screen and (max-width: 780px)
{
    display: none;
}
`

export const NavLink = styled.li`
padding: 0 2rem;
cursor:pointer;
color: white;
font-weight: ${$props => $props.theme.font.fontWeight.normal};
&:hover
{
    color:red;
}
`

export const IconHamburger = styled.div`
display: none;
@media screen and (max-width: 780px)
{
    display: block;
}
cursor: pointer;
/* &:hover {
    svg{
        g
        {
            fill: black;
        }
    }
} */

`