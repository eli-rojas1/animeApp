import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVert from '@material-ui/icons/MoreVert';
import { userContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom'

const options = [
    'Perfil',
    'Cerrar sesión'
];

const ITEM_HEIGHT = 48;

export const Config = () => {
    const navigation = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);

    };
    const handleProfile = () => {
        navigation('/perfil')
    }
    const value = useContext(userContext)

    return (
        <>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVert className='config' />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {options.map((option) => (
                    option === 'Perfil' ? <MenuItem key={option} onClick={() => {
                        handleClose()
                        handleProfile()
                    }}>
                        {option}
                    </MenuItem> : <MenuItem key={option} onClick={() => {
                        handleClose()
                        value.logOut()
                    }}>
                        {option}
                    </MenuItem>


                ))}
            </Menu>
        </>
    );
}

