import * as React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchBar() {
  const fixedOptions = '';
  const [value, setValue] = React.useState();

  
  return (
    <Autocomplete
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
      renderValue={(values, getItemProps) =>
        values.map((option, index) => {
          const { key, ...itemProps } = getItemProps({ index });
          return (
            <Chip
              key={key}
              label={option?.title}
              {...itemProps}
              disabled={fixedOptions.includes(option)}
            />
          );
        })
      }
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Search here" placeholder="Favorites" />
      )}
    />
  );
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994, },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
];
