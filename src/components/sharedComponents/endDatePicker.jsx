import React from 'react';
import { DatePicker } from 'office-ui-fabric-react';
import { getValueAsDate } from '../helperFunctions/util'
import { DayPickerStrings } from '../../constants'
import * as moment from 'moment';

export const EndDatePicker = (props) => {
    const { onEndDateChange,
        Campaign: {
            selectedEndDate
        } } = props;

    return (
        <DatePicker
            strings={DayPickerStrings}
            showMonthPickerAsOverlay={true}
            onSelectDate={(val) => onEndDateChange(moment(val).format('L'))}
            label="Select End Date"
            value={getValueAsDate(selectedEndDate)}
            placeholder="Select a End date..."
            ariaLabel="Select a date" />
    )
}