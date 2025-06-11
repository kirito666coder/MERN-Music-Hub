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
  '& label': {
    color: '#6a7282',
  },
  '& label.Mui-focused': {
    color: '#6a7282',
  },
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
    <div className="flex w-[60%] h-13">
      <Autocomplete
        className="bg-gray-100 rounded-l-full w-full"
        multiple
        id="fixed-tags-demo"
        value={value}
        onChange={(event, newValue) => {
          // ✅ Only update value if total selected tags are <= 4
          if (newValue.length <= 4) {
            setValue([
              ...fixedOptions,
              ...newValue.filter((option) => !fixedOptions.includes(option)),
            ]);
          }
        }}
        options={search}
        getOptionLabel={(option) => option?.title}
        filterSelectedOptions

        // ✅ Corrected to "getOptionDisabled" instead of "isOptionDisabled"
        getOptionDisabled={() => value.length >= 4}

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
        renderInput={(params) => (
          <CustomTextField {...params} label="Search here" placeholder="Popular Ones" />
        )}
      />
      <button className="h-13 pr-4 rounded-r-full bg-gray-100 text-gray-500">
        Search
      </button>
    </div>
  );
}

const search = [
  { title: 'The Shawshank Redemption', id: '112' },
  { title: 'The Godfather', id: '113' },
  { title: 'The Godfather: Part II', id: '114' },
  { title: 'The Dark Knight', id: '115' },
  { title: '12 Angry Men', id: '116' },
  { title: 'Schindler\'s List', id: '117' },
];
