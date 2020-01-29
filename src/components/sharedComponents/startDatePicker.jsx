import React from 'react';
import { DatePicker } from 'office-ui-fabric-react';
import { getValueAsDate } from '../helperFunctions/util'
import { DayPickerStrings } from '../../constants'

export const StartDatePicker = (props) => {
    const { onStartDateChange,
        Campaign: {
            selectedStartDate
        } } = props;

    return (
        <DatePicker
            strings={DayPickerStrings}
            showMonthPickerAsOverlay={true}
            onSelectDate={(val) => onStartDateChange(val)}
            label="Select Staring Date"
            value={getValueAsDate(selectedStartDate)}
            placeholder="Select a Staring date..."
            ariaLabel="Select a date" />
    )
}