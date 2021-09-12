import styled from 'styled-components'


export const Navbar = styled.nav`
display:flex;
justify-content: space-between;
align-items:center;
padding: 2rem;
position: absolute;
top: 0;
left:0;
right:0;
font-family: ${$props => $props.theme.font.primary};
max-width: ${$props=>$props.theme.viewport.desktop};
margin: 0 auto;
`

export const NavBrand = styled.div``

export const NavItems = styled.ul`
display:flex;
background-color:white;
`

export const NavLink = styled.li`
padding: 0 2rem;
cursor:pointer;
&:hover
{
    color:red;
}
`