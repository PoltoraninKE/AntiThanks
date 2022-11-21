import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ReactNode, useState } from 'react';

type Props = {
    startUserName: string,
    allUsers: string[]
}

function MenuButton(props: Props){
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedUser, setUserName] = useState(props.startUserName);
    const open = Boolean(anchorEl);
    
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };  

    const handleSelect = (userName: string) => () => {
        setUserName(userName);
        handleClose();
    }

    const items: ReactNode[] = [];

    for (let number in props.allUsers){
        items.push(<MenuItem onClick={handleSelect(props.allUsers[number])}>{props.allUsers[number]}</MenuItem>);
    }

    return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {selectedUser}
      </Button>
      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        {items}
      </Menu>
    </div>
  );
}

export default MenuButton;