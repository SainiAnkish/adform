import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { shape, array, bool } from 'prop-types';
import { DetailsList, DetailsListLayoutMode, SelectionMode } from 'office-ui-fabric-react/lib/DetailsList';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { fetchcampaignData } from './actionsCampainList/fetchCampaign'
import { onFilterChange, addCampaign, onStartDateChange, onEndDateChange } from './actionsCampainList/actions'
import * as moment from 'moment';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DatePicker } from 'office-ui-fabric-react';
import { withApp } from '../../initApp'

const greenDot = {
    'height': '15px',
    'width': '15px',
    'backgroundColor': 'green',
    'borderRadius': '50%',
    'display': 'inline-block'
}
const redDot = {
    'height': '15px',
    'width': '15px',
    'backgroundColor': 'red',
    'borderRadius': '50%',
    'display': 'inline-block'
}

const row = {
    'width': '100%',
    'margin': '0 auto'
}
const block = {
    'display': 'inline-block',
    'margin': '10px',
    'minWidth': '30%'
}

const columns = [
    {
        key: 'column1',
        name: 'Name',
        fieldName: 'name',
        minWidth: 100,
        maxWidth: 350,
        isRowHeader: true,
        isResizable: true,
        isSorted: true,
        isSortedDescending: false,
        sortAscendingAriaLabel: 'Sorted A to Z',
        sortDescendingAriaLabel: 'Sorted Z to A',
        data: 'string',
        isPadded: true
    },
    {
        key: 'column2',
        name: 'User Name',
        fieldName: 'userName',
        minWidth: 100,
        maxWidth: 190,
        isResizable: true,
        data: 'number',
        isPadded: true
    },
    {
        key: 'column3',
        name: 'Start Date',
        fieldName: 'startDate',
        minWidth: 100,
        maxWidth: 190,
        isResizable: true,
        isCollapsible: true,
        data: 'string',
        isPadded: true
    },
    {
        key: 'column4',
        name: 'End Date',
        fieldName: 'endDate',
        minWidth: 100,
        maxWidth: 190,
        isResizable: true,
        isCollapsible: true,
        data: 'number'
    },
    {
        key: 'column5',
        name: 'Active',
        fieldName: 'Budget',
        minWidth: 100,
        maxWidth: 190,
        isResizable: true,
        isCollapsible: true,
        data: 'number',
        onRender: (item) => {
            return <div>{moment(item.date).isBefore(item.endDate) ?
                <div>
                    <span style={greenDot}></span>
                    <span style={{ paddingLeft: '3px' }}>{' Active'}</span>
                </div> :
                <div>
                    <span style={redDot}></span>
                    <span>{' InActive'}</span>
                </div>
            }
            </div>
        }
    },
    {
        key: 'column6',
        name: 'Budget',
        fieldName: 'Budget',
        minWidth: 100,
        maxWidth: 90,
        isResizable: true,
        isCollapsible: true,
        data: 'number'
    }
];

const DayPickerStrings = {
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

    shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

    goToToday: 'Go to today',
    prevMonthAriaLabel: 'Go to previous month',
    nextMonthAriaLabel: 'Go to next month',
    prevYearAriaLabel: 'Go to previous year',
    nextYearAriaLabel: 'Go to next year',
    closeButtonAriaLabel: 'Close date picker'
};

const getValueAsDate = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }

    if (typeof value === "string") {
        return new Date(value);
    }

    return value;
}

export const CampaignListContainer = (props) => {
    const {
        fetchCampaign,
        onFilterChange,
        onStartDateChange,
        onEndDateChange,
        addCampaign,
        Campaign: {
            campaigns,
            isFetched,
            selectedStartDate,
            selectedEndDate,
        }
    } = props;

    window.addCamp = (data)=>{
        addCampaign(data);
    }
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetchCampaign();
        setIsLoaded(true);
    }, [isLoaded]);

    return (
        isFetched ?
            <div>
                <div style={row}>
                    <div style={block}>
                        <DatePicker
                            strings={DayPickerStrings}
                            showMonthPickerAsOverlay={true}
                            onSelectDate={(val) => onStartDateChange(val)}
                            label="Select Staring Date"
                            value={getValueAsDate(selectedStartDate)}
                            placeholder="Select a Staring date..."
                            ariaLabel="Select a date" /></div>
                    <div style={block}>
                        <DatePicker
                            strings={DayPickerStrings}
                            value={getValueAsDate(selectedEndDate)}
                            showMonthPickerAsOverlay={true}
                            onSelectDate={(val) => onEndDateChange(moment(val).format('L'))}
                            label="Select End Date"
                            placeholder="Select a End Date..."
                            ariaLabel="Select a date" /></div>
                    <div style={block}>
                        <TextField label="Filter by name:"
                            onChange={(e) => onFilterChange(e.target.value)} /></div>
                </div>
                <DetailsList
                    columns={columns}
                    setKey="set"
                    layoutMode={DetailsListLayoutMode.justified}
                    isHeaderVisible={true}
                    selectionMode={SelectionMode.none}
                    items={campaigns}
                    selectionPreservedOnEmptyClick={true}
                    enterModalSelectionOnTouch={true}
                    ariaLabelForSelectionColumn="Toggle selection"
                    ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                    checkButtonAriaLabel="Row checkbox"
                />
            </div>
            :
            <div style={{ marginTop: '230px' }}>
                <Spinner size={SpinnerSize.large} />
            </div>

    )
}

CampaignListContainer.propTypes = {
    Campaign: shape({
        campaigns: array.isRequired,
        isFetched: bool.isRequired,

    })
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchCampaign: fetchcampaignData,
    onFilterChange: onFilterChange,
    onStartDateChange: onStartDateChange,
    onEndDateChange: onEndDateChange,
    addCampaign: addCampaign
}, dispatch)

const mapStateToProps = (state) => {
    return ({
        Campaign: state.Campaign
    })
}

export default withApp(connect(mapStateToProps, mapDispatchToProps)(CampaignListContainer));