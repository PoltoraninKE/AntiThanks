import {TextField} from "@mui/material";
import User from "../Models/User";
import ColorRadioButtons from "./ColorRadioButtons";
import MenuButton from "./MenuButton";

type Props = {
  users: User[];
}

function AntiThanks() {    
    const users: User[] = [];

    

    return (<>
        <div>
            <MenuButton startUserName={users[0]} allUsers={users}/>
        </div>
        <div>
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"/>
        </div>
        </>
    )
}

export default AntiThanks;