import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function SearchPropertyType() {
  return (
    <Autocomplete
      multiple
      id="search-property-type"
      options={propertyTypes}
      disableCloseOnSelect
      getOptionLabel={(option) => option.type}
      renderOption={(option, { selected } = true) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.type}
        </React.Fragment>
      )}
      style={{ width: 350 }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Property Types" placeholder="Property Type" />
      )}
    />
  );
}

const propertyTypes = [
  { type: 'Single Family' },
  { type: 'Condos' },
  { type: 'Multi-Family' },
  { type: 'Mobile Home' },
  { type: 'Manufactured' },
  { type: 'Townhouse' },

];
