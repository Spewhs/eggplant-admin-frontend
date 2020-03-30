import * as model from '../api/EggplantConfigModel';
import * as action from './EggplantConfigActionTypes';

// Action cretor

export function getConfig() {
    return {
        type: action.GET_EGGPLANT_CONFIG,
        payload: model.getConfig()
    }
}
