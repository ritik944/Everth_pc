import React from 'react'

export default function selectmenu(props) {
  return (
    <div><div className="sm:col-span-3">
    <label
      htmlFor={props.label}
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {props.label}
    </label>
    <div className="mt-2">
      <select name='select..' className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
        <option>select...</option>
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select>
    </div>
  </div></div>
  )
}
