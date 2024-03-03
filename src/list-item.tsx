import { Checkbox, Typography , IconButton, ListItem as MuiListItem }from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';

type ListItemProps = {
    item: string;
}

const ListItem = ({item}: ListItemProps) => 
    <MuiListItem >
          <IconButton> 
            <EditIcon />
          </IconButton>
          <IconButton>
            <ClearIcon />
          </IconButton>
          <Typography>
            {item}
          </Typography>
            <Checkbox />
        </MuiListItem>

 
export default ListItem;
