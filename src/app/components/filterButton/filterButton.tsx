import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Slider } from '@mui/material';
import { Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import json2mq from "json2mq";



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
  const max430 = useMediaQuery(json2mq({maxWidth: 430}));
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
  const theme ={
    spacing: 8,
  }

  return (
    <FormControl sx={max430 ? { m: 0, width: 104, maxHeight: 48, height: 39}: {m: 0, width: 140, maxHeight: 48, height: 48}}>
      <InputLabel id="select-label"  sx={max430?{m:-0.8, ml:0.3, color:"#0B3650"}: {}}>
        <Typography variant='subtitle2'>
          {title}
        </Typography>
      </InputLabel>
      <Select sx={max430 ? { height: 39 }: {height: 48}}
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