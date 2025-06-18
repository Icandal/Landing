import styled from 'styled-components';

export const Button = styled.button`
min-width: 150px;
font-family: "Gill Sans", sans-serif;
padding: 1rem 2rem;
margin: 1rem;
border-radius: 5px;
font-size: 1rem;
cursor: pointer;
border: none;
transition: all 0.3s ease;
animation: fadeIn 0.3s ease;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

&:hover {
background-color: lightgrey;
transform: scale(1.1);
}
`;