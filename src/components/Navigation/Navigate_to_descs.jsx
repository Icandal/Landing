import { FaRegNewspaper } from 'react-icons/fa6';
import { NavContentBtn } from './Navigation_content_btn';


export const Nav_to_descs = ({ onClick }) => {
    
    return (
        <NavContentBtn onClick={onClick}>
            <FaRegNewspaper />
        </NavContentBtn>
    )
}