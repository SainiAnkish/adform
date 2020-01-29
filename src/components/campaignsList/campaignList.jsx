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
import { StartDatePicker } from '../sharedComponents/startDatePicker'
import { EndDatePicker } from '../sharedComponents/endDatePicker'
import { withApp } from '../../initApp'
import { CampainsDetailList } from '../sharedComponents/detailListComponent';

const row = {
    'width': '100%',
    'margin': '0 auto'
}
const block = {
    'display': 'inline-block',
    'margin': '10px',
    'minWidth': '30%'
}

export const CampaignListContainer = (props) => {
    const {
        fetchCampaign,
        onFilterChange,
        addCampaign,
        Campaign: {
            isFetched
        }
    } = props;

    window.addCamp = (data) => {
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
                        <StartDatePicker {...props} />
                    </div>
                    <div style={block}>
                        <EndDatePicker {...props} />
                    </div>
                    <div style={block}>
                        <TextField label="Filter by name:"
                            onChange={(e) => onFilterChange(e.target.value)} /></div>
                </div>
                <CampainsDetailList {...props} />
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