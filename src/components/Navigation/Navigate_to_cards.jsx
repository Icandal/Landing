import { FaTableCellsLarge } from 'react-icons/fa6';

import { NavContentBtn } from './Navigation_content_btn';

export const Nav_to_cards = ({ onClick }) => {
    
    return (
        <NavContentBtn onClick={onClick}>
            <FaTableCellsLarge />
        </NavContentBtn>
    )
}