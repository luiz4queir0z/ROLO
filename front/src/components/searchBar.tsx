import { Search } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';

export default function SearchBar({ placeholder }: { placeholder?: string }) {
  return (
    <TextField
      id='marketSearch'
      variant='filled'
      size='small'
      hiddenLabel
      placeholder={placeholder}
      sx={{ width: { xs: '100%', md: '50%' }, alignSelf: 'center' }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position='start'>
              <Search sx={{ color: '#FE733B' }} />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
