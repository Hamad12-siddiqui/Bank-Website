// import React, { useState, useMemo } from 'react'
// import Select from 'react-select'
// import countryList from 'react-select-country-list'

// function CountrySelector() {
//   const [value, setValue] = useState('')
//   const options = useMemo(() => {
//     // Add flag URL to each option
//     return countryList().getData().map(country => ({
//       value: country.value,
//       label: country.label,
//       flag: `https://flagcdn.com/24x18/${country.value.toLowerCase()}.png`
//     }))
//   }, [])

//   const formatOptionLabel = ({ label, flag }) => (
//     <div style={{ display: 'flex', alignItems: 'center' }}>
//       <img
//         src={flag}
//         alt={label}
//         style={{ width: 24, height: 18, marginRight: 8, borderRadius: 2, objectFit: 'cover' }}
//       />
//       <span>{label}</span>
//     </div>
//   )

//   const changeHandler = selected => {
//     setValue(selected)
//   }

//   return (
//     <Select
//       options={options}
//       value={value}
//       onChange={changeHandler}
//       formatOptionLabel={formatOptionLabel}
//       getOptionValue={option => option.value}
//       getOptionLabel={option => option.label}
//       styles={{
//         control: (provided) => ({
//           ...provided,
//           backgroundColor: 'black',
//           color: 'white',
//         }),
//         singleValue: (provided) => ({
//           ...provided,
//           color: 'white',
//         }),
//         menu: (provided) => ({
//           ...provided,
//           backgroundColor: 'black',
//           color: 'white',
//         }),
//         option: (provided, state) => ({
//           ...provided,
//           backgroundColor: state.isSelected ? '#222' : 'black',
//           color: 'white',
//         }),
//       }}
//     />
//   )
// }

// export default CountrySelector


"use client";
import Select from "react-select";
import CurrencyFlag from "react-currency-flags";

const options = [
  { value: "INR", label: "Indian Rupee" },
  { value: "USD", label: "US Dollar" },
  { value: "EUR", label: "Euro" },
];

export default function CurrencySelector() {
  return (
    <Select
      options={options}
      formatOptionLabel={(option) => (
        <div className="flex items-center gap-2">
          <CurrencyFlag currency={option.value} size="sm" />
          <span>{option.value}</span>
          <span className="text-gray-500">{option.label}</span>
        </div>
      )}
      styles={{
        control: (provided) => ({
          ...provided,
          backgroundColor: 'black',
          color: 'white',
        }),
        singleValue: (provided) => ({
          ...provided,
          color: 'white',
        }),
        menu: (provided) => ({
          ...provided,
          backgroundColor: 'black',
          color: 'white',
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? '#222' : 'black',
          color: 'white',
        }),
      }}
    />
  );
}
