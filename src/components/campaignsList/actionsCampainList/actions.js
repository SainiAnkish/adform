import {
    FETCH_CAMPAIGNS_ACTION,
    FETCH_CAMPAIGNS_ACTION_SUCCESS,
    FETCH_CAMPAIGNS_ACTION_ERROR,
    FILTER_CHANGE_ACTION,
    START_DATE_CHANGE_ACTION,
    END_DATE_CHANGE_ACTION,
    ADD_CAMPAIGNS_ACTION
} from '../../../constants'

export const fetchcampaign = () => ({
    type: FETCH_CAMPAIGNS_ACTION
})

export const fetchcampaignSuccess = (campaigns) => ({
    type: FETCH_CAMPAIGNS_ACTION_SUCCESS,
    campaigns
})

export const fetchcampaignError = (error) => ({
    type: FETCH_CAMPAIGNS_ACTION_ERROR,
    error
})

export const onFilterChange = (text) => ({
    type: FILTER_CHANGE_ACTION,
    text
})

export const onStartDateChange = (value) => ({
    type: START_DATE_CHANGE_ACTION,
    value
})

export const onEndDateChange = (value) => ({
    type: END_DATE_CHANGE_ACTION,
    value
})

export const addCampaign = (campaigns) => ({
    type: ADD_CAMPAIGNS_ACTION,
    campaigns
})