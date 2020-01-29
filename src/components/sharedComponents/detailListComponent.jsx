import React from 'react';
import { DetailsList, DetailsListLayoutMode, SelectionMode } from 'office-ui-fabric-react/lib/DetailsList';
import * as moment from 'moment';

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

export const CampainsDetailList = (props) => {
    const {
        Campaign: {
            campaigns
        } } = props;

    return (
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
    )
}