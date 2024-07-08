import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Slider } from '@mui/material';

export default function FilterButton({
  // props here
  // e.g. title,
  title,
  items,
  multiple,
  // e.g. onClick
  // e.g. children
  // e.g. style
  // e.g. className
  // e.g. etc.
  // e.g. ...rest
  // e.g. ...props
  // e.g. ...other
}: {
  // props types here
  // e.g. title: string,
  title: string,
  items?: string[],
  multiple?: boolean,
  // e.g. onClick: () => void,
  // e.g. children: React.ReactNode,
  // e.g. style: React.CSSProperties,
  // e.g. className: string,
  // e.g. etc.
  // e.g. ...rest: any
  // e.g. ...props: any
  // e.g. ...other
}) {
  const [age, setAge] = React.useState('');
  const [values, setValues] = React.useState([]);

  const handleChanges = (event: SelectChangeEvent<typeof values>) => {
    const {
      target: { value },
    } = event;
    setValues(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];

function valuetext(value: number) {
  return `${value}°C`;
}

  return (
    <FormControl sx={{ m: 0, width: 140, maxHeight: 48, height: 48 }}>
      <InputLabel id="select-label" >{title}</InputLabel>
      <Select sx={{ height: 48 }}
        labelId="select-label"
        id="select-label"
        multiple={multiple}
        value={multiple ? values : age}
        label={title}
        onChange={multiple ? handleChanges : handleChange}
      >        
        {
          items?.map((item) => (
            <MenuItem key={item} value={item}>{item}</MenuItem>
          ))
        }        
      </Select>
    </FormControl>
  );
}