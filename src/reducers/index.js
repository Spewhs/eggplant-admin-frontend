import { combineReducers } from 'redux';

import classifiersReducer from './classifierReducer';
import scenarioReducer from './ScenarioReducer';
import eggplantConfigReducer from './EggplantConfigReducer';
import predictionReducer from './PredictionReducer';

const rootReducer = combineReducers({
    classifier: classifiersReducer,
    scenario: scenarioReducer,
    config: eggplantConfigReducer,
    prediction: predictionReducer,
});

export default rootReducer;
