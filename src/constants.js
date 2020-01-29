import * as moment from 'moment';
import React from 'react';

export const ACTIONS_LABEL = 'FetchData';
export const API_URL = 'Action';
export const FETCH_CAMPAIGNS_ACTION = 'FETCH_CAMPAIGNS_ACTION';
export const FETCH_CAMPAIGNS_ACTION_SUCCESS = 'FETCH_CAMPAIGNS_ACTION_SUCCESS';
export const FETCH_CAMPAIGNS_ACTION_ERROR = 'FETCH_CAMPAIGNS_ACTION_ERROR';
export const FILTER_CHANGE_ACTION = 'FILTER_CHANGE_ACTION';
export const ADD_CAMPAIGNS_ACTION = 'ADD_CAMPAIGNS_ACTION';
export const START_DATE_CHANGE_ACTION = 'START_DATE_CHANGE_ACTION';
export const END_DATE_CHANGE_ACTION = 'END_DATE_CHANGE_ACTION';

export const DayPickerStrings = {
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

export const columns = [
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

export const campainsData =
    [{ "id": 1, "name": "Divavu", "startDate": "9/19/2020", "endDate": "3/9/2021", "Budget": 88377, "userId": 3 },
    { "id": 2, "name": "Jaxspan", "startDate": "11/21/2017", "endDate": "2/21/2018", "Budget": 608715, "userId": 16 },
    { "id": 3, "name": "Miboo", "startDate": "11/1/2017", "endDate": "6/20/2017", "Budget": 239507, "userId": 7 },
    { "id": 4, "name": "Trilith", "startDate": "8/25/2017", "endDate": "11/30/2021", "Budget": 179838, "userId": 1 },
    { "id": 5, "name": "Layo", "startDate": "11/28/2017", "endDate": "3/10/2018", "Budget": 837850, "userId": 9 },
    { "id": 6, "name": "Photojam", "startDate": "7/25/2017", "endDate": "6/23/2017", "Budget": 858131, "userId": 3 },
    { "id": 7, "name": "Blogtag", "startDate": "6/27/2017", "endDate": "1/15/2018", "Budget": 109078, "userId": 2 },
    { "id": 8, "name": "Rhyzio", "startDate": "10/13/2017", "endDate": "1/25/2018", "Budget": 272552, "userId": 4 },
    { "id": 9, "name": "Zoomcast", "startDate": "9/6/2017", "endDate": "11/10/2017", "Budget": 301919, "userId": 8 },
    { "id": 10, "name": "Realbridge", "startDate": "3/5/2018", "endDate": "10/2/2017 ", "Budget": 505602, "userId": 5 }]