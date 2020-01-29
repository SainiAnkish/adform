import React from 'react';
import CampaignListContainer from './components/campaignsList/campaignList'
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

initializeIcons();

function App() {
  return (
    <CampaignListContainer />
  );
}

export default App;
