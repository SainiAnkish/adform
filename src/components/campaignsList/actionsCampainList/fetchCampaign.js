import { fetchcampaign, fetchcampaignSuccess, fetchcampaignError } from './actions';
import { campainsData } from '../../../constants'
import * as moment from 'moment';

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

export const mapUserDataToCampaign = (data) =>
    ({
        campaigns:
            campainsData.reduce((newData, currentData) => {
                if (currentData) {
                    newData.push({
                        ...currentData,
                        Budget: currentData.Budget.toString() + ' USD',
                        isValid: (moment().format('L')),
                        userName: data.find((user) => user.id === currentData.userId) ? data.find((user) => user.id === currentData.userId).name : 'Unknown user'
                    });
                } else {
                    newData.push({
                        ...currentData
                    });
                }
                return newData;
            }, [])

    })