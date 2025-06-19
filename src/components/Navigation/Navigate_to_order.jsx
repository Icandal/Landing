import { FaPen } from 'react-icons/fa6';
import { NavContentBtn } from './Navigation_content_btn';

export const Nav_to_order = ({ onClick }) => {
    
    return (
        <NavContentBtn onClick={onClick}>
            <FaPen />
        </NavContentBtn>
    )
}