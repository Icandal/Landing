import { FaHouseChimney } from 'react-icons/fa6';
import { NavContentBtn } from './Navigation_content_btn';

export const Nav_to_home = ({ onClick }) => {
    
    return (
        <NavContentBtn onClick={onClick}>
            <FaHouseChimney />
        </NavContentBtn>
    )
}