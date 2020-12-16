import React, { useState } from 'react'
import 'react-dates/initialize'
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from 'react-dates'
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet'
import CSSInterface, {
  registerCSSInterfaceNamespace,
} from 'react-with-styles-interface-css'

ThemedStyleSheet.registerInterface(CSSInterface)

const Calendar = () => {
  const [date, setDate] = useState(null)
  const [focused, setFocused] = useState(null)

  return (
    <SingleDatePicker
      date={date} // momentPropTypes.momentObj or null
      onDateChange={(date) => setDate({ date })} // PropTypes.func.isRequired
      focused={focused} // PropTypes.bool
      onFocusChange={({ focused }) => setFocused({ focused })} // PropTypes.func.isRequired
      id='your_unique_id' // PropTypes.string.isRequired,
    />
  )
}

export default Calendar
