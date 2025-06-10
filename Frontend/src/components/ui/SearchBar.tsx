import * as React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface searchInterface {
  title:string,
  id:string,
}
export default function SearchBar() {
  const fixedOptions:searchInterface[] = [];
  const [value, setValue] = React.useState<searchInterface[]>();


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
  { title: 'The Shawshank Redemption', id:'112' },
  { title: 'The Godfather', id:'113' },
  { title: 'The Godfather: Part II', id:'114' },
  
];
