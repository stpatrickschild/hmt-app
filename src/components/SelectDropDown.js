
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SelectDropDown() {
  const classes = useStyles();
  const [state, setState] = React.useState({

  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const [provider, setProvider] = useState(null);
  const [specialty, setSpecialty] = useState(null);
  const [providersList, setProvidersList] = useState([]);
  const [category, setCategory] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  const [cost, setCost] = useState(null);
  const [specialtysList, setSpecialtysList] = useState([])

  const isSelected = (a, b) => {
    if (!a) return {};
    if (a.id === b.id) return { selected: "selected" };
    return {};
  }


  const resetApp = () => {
    setProvider(null);
    setSpecialty(null);
    setCategory(null);
    setCost(null);
  }

  const findProviderById = (id) => {
    return providersList.find((provider) => {
      return provider.id.toString() === id
    })
  }
  const providerChanged = (event) => {
    setProvider(findProviderById(event.target.value))
  }

  const findSpecialtyById = (id) => {
    return specialtysList.find((specialty) => {
      return specialty.id.toString() === id
    })
  }
  const specialtyChanged = (event) => {
    setSpecialty(findSpecialtyById(event.target.value))
  }

  const categoryChanged = (event) => {
    setCategory(findCategoryById(event.target.value))
  }

  const findCategoryById = (id) => {
    return categoryList.find((category) => {
      return category.id.toString() === id
    })
  }



  const reloadProviders = useCallback(() => {
    axios.get("http://34.66.52.51:80/provider")
      .then((response) => {
        setProvidersList(response.data)
      })
  }, []);

  const reloadCategories = useCallback(() => {
    if (!provider) return;
    axios.get(`http://34.66.52.51:80/provider/${provider.id}/categories`)
      .then((response) => {
        console.log(response.data)
        setCategoryList(response.data)
      })
  }, [provider]);

  const reloadSpecialtys = useCallback(() => {
    if (!category) return;
    axios.get(`http://34.66.52.51:80/provider/${provider.id}/categories/${category.id}/specialties`)
      .then((response) => {
        setSpecialtysList(response.data)
      })
  }, [provider, category]);

  const reloadCost = useCallback(() => {
    if (!specialty) return;
    setCost({ in_network_cost: specialty.inNetworkCost, out_of_network_cost: specialty.outOfNetworkCost, uninsured_cost: specialty.uninsuredCost })
  }, [specialty]);

  useEffect(() => {
    reloadProviders()
  }, [reloadProviders]);

  useEffect(() => {
    reloadSpecialtys()
  }, [reloadSpecialtys, category]);

  useEffect(() => {
    reloadCost()
  }, [reloadCost, specialty]);

  useEffect(() => {
    reloadCategories()
  }, [reloadCategories, provider])

  // const classes = useStyles();


  return (
    <div>

      <FormControl className={classes.formControl} onChange={providerChanged}>
        <InputLabel htmlFor="uncontrolled-native">Provider</InputLabel>
        <NativeSelect
          defaultValue={""}
          inputProps={{
            name: 'Select your Provider',
            id: 'uncontrolled-native',
          }}

        >
          <option value=""></option>
          {providersList.map((p) => (
            <option key={p.id} value={p.id} {...isSelected(provider, p)}>{p.name}</option>
          ))}
        </NativeSelect>

        <FormHelperText>Select Your Provider</FormHelperText>
      </FormControl>

      <FormControl className={classes.formControl} onChange={categoryChanged}>
        <InputLabel htmlFor="uncontrolled-native">Category</InputLabel>
        <NativeSelect
          defaultValue={""}
          inputProps={{
            name: 'Select your Category',
            id: 'uncontrolled-native',
          }}>
          <option value=""></option>
          {categoryList.map((c) => (
            <option key={c.id} value={c.id} {...isSelected(category, c)}>{c.name}</option>
          ))}
        </NativeSelect>
        <FormHelperText>Select Your Category</FormHelperText>
      </FormControl>

      <FormControl className={classes.formControl} onChange={specialtyChanged}>
        <InputLabel htmlFor="uncontrolled-native">Specialty</InputLabel>
        <NativeSelect
          defaultValue={""}
          inputProps={{
            name: 'Select your Specialty',
            id: 'uncontrolled-native',
          }}

        >
          <option value=""></option>
          {specialtysList.map((p) => (
            <option key={p.id} value={p.id} {...isSelected(specialty, p)}>{p.name}</option>
          ))}
        </NativeSelect>
        <FormHelperText>Select Your Specialty</FormHelperText>
      </FormControl>

      <p>Selected Specialty: {specialty?.name}</p>
      <p>In Network Cost: {cost?.in_network_cost}</p>
      <p>Out of Network Cost: {cost?.out_of_network_cost}</p>
      <p>Uninsured Cost: {cost?.uninsured_cost}</p>
      <Button variant="contained" color="primary" onClick={resetApp}>Reset</Button>

    </div>
  );
}
export default SelectDropDown;