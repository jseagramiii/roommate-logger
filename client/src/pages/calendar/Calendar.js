import React, { useState } from 'react'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet'
import CSSInterface, {
  registerCSSInterfaceNamespace,
} from 'react-with-styles-interface-css'

const Calendar = () => {
  const [date, setDate] = useState(null)
  const [focused, setFocused] = useState(null)

  return (
    <div>
      <h3>This page is a work in progress</h3>
      <SingleDatePicker
        date={date}
        onDateChange={(date) => setDate({ date })}
        focused={focused}
        onFocusChange={({ focused }) => setFocused({ focused })} //
        id='your_unique_id'
      />
    </div>
  )
}

export default Calendar
