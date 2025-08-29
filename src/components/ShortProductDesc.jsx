import styled from 'styled-components'

const CARD_NAME_WRAPPER = styled.h4`
font-weight: 600;
font-size: 21px;
margin: 1rem auto;
`

export const ShortProductDesc = ({Cards_name}) => {
    return (
        <CARD_NAME_WRAPPER>
            {Cards_name}
        </CARD_NAME_WRAPPER>
    )
};