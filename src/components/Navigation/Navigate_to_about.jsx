import { FaUser } from 'react-icons/fa6';
import { NavContentBtn } from './Navigation_content_btn';


export const Nav_to_about = ({ onClick }) => {
    
    return (
        <NavContentBtn onClick={onClick}>
            <FaUser />
        </NavContentBtn>
    )
}