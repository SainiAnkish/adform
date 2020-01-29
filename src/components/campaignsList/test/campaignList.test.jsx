/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import { CampaignListContainer } from '../campaignList'
import Adapter from 'enzyme-adapter-react-16';

export const configureTest = () => {
    configure({ adapter: new Adapter() });
}
configureTest();

const testProps = {
    Campaign: {
        campaigns: [{
            'id': '1',
            'name': "Divavu",
            'startDate': "9/19/2020",
            'endDate': "3/9/2021",
            'Budget': "88377 USD",
            'userId': 3,
            'isValid': "01/24/2020",
            'userName': "Clementine Bauch"
        }],
        fetchedData: [{
            'id': '1',
            'name': "Divavu",
            'startDate': "9/19/2020",
            'endDate': "3/9/2021",
            'Budget': "88377 USD",
            'userId': 3,
            'isValid': "01/24/2020",
            'userName': "Clementine Bauch"
        }],
        isFetched: false,
        isStringFilter: false,
        startDateSelected: false,
        endDateSelected: false,
        fetchCampaign: () => { },
        onFilterChange: () => { },
        onStartDateChange: () => { },
        onEndDateChange: () => { }
    }
}

describe('<CampaignListContainer />', () => {
    let component;
    let componentWrapperElement;
    describe('should render the spinner', () => {

        afterEach(() => {
            componentWrapperElement = null;
        });

        component = shallow(<CampaignListContainer {...testProps} />
        );

        it('should render the loader if data not fetched', () => {
            componentWrapperElement = component.find('StyledSpinnerBase');
            expect(componentWrapperElement.length).toBe(1);
        });
    });
});

