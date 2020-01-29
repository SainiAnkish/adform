import { campainsData } from '../../constants'
import * as moment from 'moment';

export const getValueAsDate = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        return new Date(value);
    }
    return value;
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