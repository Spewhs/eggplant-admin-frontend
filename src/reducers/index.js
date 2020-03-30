import { combineReducers } from 'redux';

import classifiersReducer from './classifierReducer';
import scenarioReducer from './ScenarioReducer';
import eggplantConfigReducer from './EggplantConfigReducer';

const rootReducer = combineReducers({
    classifier: classifiersReducer,
    scenario: scenarioReducer,
    config: eggplantConfigReducer
});

export default rootReducer;
