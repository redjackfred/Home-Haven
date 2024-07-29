import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import json2mq from "json2mq";



export default function FilterButton({  
  title,
  name,
  items,
  values,
  onSelectionChange,
}: { 
  title: string,
  name: string,
  items?: string[], 
  values: Object,
  onSelectionChange?: (selected: SelectChangeEvent<string>) => void
}) { 
  const max430 = useMediaQuery(json2mq({maxWidth: 430}));
  
  return (
    <FormControl sx={max430 ? { m: 0, width: 104, maxHeight: 48, height: 39}: {m: 0, width: 140, maxHeight: 48, height: 48}}>
      <InputLabel id="select-label"  sx={max430?{m:-0.8, ml:0.3, color:"#0B3650"}: {color:"#0B3650"}}>
        <Typography variant='subtitle2'>
          {title}
        </Typography>
      </InputLabel>
      <Select sx={max430 ? { height: 39 }: {height: 48}}
        labelId="select-label"
        id="select-label"    
        name={title}     
        value={values[name]}
        label={title}
        onChange={onSelectionChange}
      >        
        {
          items?.map((item) => (
            <MenuItem key={item} value={item}>{item === "" ? "None" : item}</MenuItem>
          ))
        }        
      </Select>
    </FormControl>
  );
}