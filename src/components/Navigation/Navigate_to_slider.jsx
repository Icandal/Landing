import { FaPanorama } from 'react-icons/fa6';
import { NavContentBtn } from './Navigation_content_btn';

export const Nav_to_slider = ({ onClick }) => {
    
    return (
        <NavContentBtn onClick={onClick}>
            <FaPanorama />
        </NavContentBtn>
    )
}