import {
    FETCH_CAMPAIGNS_ACTION, FETCH_CAMPAIGNS_ACTION_SUCCESS,
    FETCH_CAMPAIGNS_ACTION_ERROR,
    FILTER_CHANGE_ACTION,
    START_DATE_CHANGE_ACTION,
    END_DATE_CHANGE_ACTION,
    ADD_CAMPAIGNS_ACTION
} from '../../../constants';
import * as moment from 'moment';
import { mapUserDataToCampaign } from '../actionsCampainList/fetchCampaign'

const initialState = {
    campaigns: [],
    fetchedData: [],
    isFetched: false,
    isStringFilter: false,
    startDateSelected: false,
    selectedStartDate: null,
    selectEdendDate: null,
    endDateSelected: false
};

const campaignReducer = (state = initialState, action) => {
    const getDataOnDates = () => {
        let campaigns = state.fetchedData;
        if (state.selectedStartDate) {
            campaigns = state.fetchedData.filter((campaign) =>
                moment(state.selectedStartDate).isBefore(campaign.startDate))
            if (state.selectedEndDate) {
                campaigns = campaigns.filter((campaign) =>
                    moment(campaign.endDate).isBefore(state.selectedEndDate))
            }
        }
        if (state.selectedEndDate) {
            campaigns = state.fetchedData.filter((campaign) =>
                moment(campaign.endDate).isBefore(state.selectedEndDate))
            if (state.selectedStartDate) {
                campaigns = campaigns.filter((campaign) =>
                    moment(state.selectedStartDate).isBefore(campaign.startDate))
            }
        }
        return campaigns
    }
    switch (action.type) {
        case FETCH_CAMPAIGNS_ACTION: {
            return {
                ...state,
                isFetched: false
            }
        }
        case FETCH_CAMPAIGNS_ACTION_SUCCESS: {
            return {
                ...state,
                fetchedData: action.campaigns.campaigns,
                campaigns: action.campaigns.campaigns,
                isFetched: true
            }
        }
        case FETCH_CAMPAIGNS_ACTION_ERROR: {
            return {
                ...state,
                isFetched: true
            }
        }
        case FILTER_CHANGE_ACTION: {
            const filterString = action.text;
            const filterData = getDataOnDates();
            let campaigns = filterData.filter((campaign) =>
                campaign.name.toLowerCase().indexOf(filterString.toLowerCase()) > -1)
            return {
                ...state,
                campaigns,
                isStringFilter: filterString.length > 0
            }
        }
        case START_DATE_CHANGE_ACTION: {
            const selectedDate = moment(action.value).format('L');
            let campaigns = state.fetchedData.filter((campaign) =>
                moment(selectedDate).isBefore(campaign.startDate))
            if (state.selectedEndDate) {
                campaigns = campaigns.filter((campaign) =>
                    moment(campaign.endDate).isBefore(state.selectedEndDate))
            }
            return {
                ...state,
                campaigns,
                startDateSelected: true,
                selectedStartDate: action.value
            }
        }
        case END_DATE_CHANGE_ACTION: {
            const selectedDate = moment(action.value).format('L');
            let campaigns = state.fetchedData.filter((campaign) =>
                moment(campaign.endDate).isBefore(selectedDate))
            if (state.selectedStartDate) {
                campaigns = campaigns.filter((campaign) =>
                    moment(state.selectedStartDate).isBefore(campaign.startDate))
            }
            return {
                ...state,
                campaigns,
                endDateSelected: true,
                selectedEndDate: action.value
            }
        }
        case ADD_CAMPAIGNS_ACTION: {
            let data = mapUserDataToCampaign(action.campaigns)
            let newCampaign = state.campaigns;
            newCampaign.push(data);
            return {
                ...state, campaigns: newCampaign
            }
        }
        default:
            return { ...state };
    }
}

export default campaignReducer;