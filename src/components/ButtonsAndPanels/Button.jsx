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
background-color: rgba(245, 247, 166, 1);
animation: fadeIn 0.3s ease;
box-shadow: 0 4px 8px 0 rgba(1, 37, 68,0.2);

&:hover {
background-color: rgb(221, 225, 2);
transform: scale(1.1);
}
`;