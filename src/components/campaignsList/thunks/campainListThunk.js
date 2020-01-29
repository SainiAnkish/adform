import {
    fetchcampaign,
    fetchcampaignSuccess,
    fetchcampaignError
} from '../actionsCampainList/actions';
import { mapUserDataToCampaign } from '../../helperFunctions/util'

export function fetchcampaignData() {
    return dispatch => {
        dispatch(fetchcampaign());
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => {
                if (res && res.length > 0) {
                    dispatch(fetchcampaignSuccess(mapUserDataToCampaign(res)));
                }
                else {
                    throw new Error('No data found')
                }
            })
            .catch(error => {
                dispatch(fetchcampaignError(error));
            })
    }
}

