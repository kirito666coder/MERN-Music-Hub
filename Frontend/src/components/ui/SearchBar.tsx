import * as React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';

interface searchInterface {
  title: string;
  id: string;
}

// Styled TextField to remove border and outline
const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: 9999, 
    backgroundColor: '', 
    paddingRight: 8,
    '& fieldset': {
      border: 'none', 
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
    '& input': {
      outline: 'none',
    },
  },
});

export default function SearchBar() {
  const fixedOptions: searchInterface[] = [];
  const [value, setValue] = React.useState<searchInterface[]>([]);

  return (
    <Autocomplete
    className='bg-gray-300 rounded-full'
      multiple
      id="fixed-tags-demo"
      value={value}
      onChange={(event, newValue) => {
        setValue([
          ...fixedOptions,
          ...newValue.filter((option) => !fixedOptions.includes(option)),
        ]);
      }}
      options={top100Films}
      getOptionLabel={(option) => option?.title}
      renderTags={(values, getTagProps) =>
        values.map((option, index) => (
          <Chip
            key={option.id}
            label={option.title}
            {...getTagProps({ index })}
            disabled={fixedOptions.includes(option)}
          />
        ))
      }
      sx={{ width: 500 }}
      renderInput={(params) => (
        <CustomTextField {...params} label="Search here" placeholder="Popular Ones" />
      )}
    />
  );
}

const top100Films = [
  { title: 'The Shawshank Redemption', id: '112' },
  { title: 'The Godfather', id: '113' },
  { title: 'The Godfather: Part II', id: '114' },
];
