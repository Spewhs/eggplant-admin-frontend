import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../action'
import PropTypes from 'prop-types';

class StatsContainer extends React.PureComponent {

    componentDidMount() {
        this.props.getClassifierPage({ page: 0 });
        this.props.getPrediction({ page: 0 });
        this.props.getScenarioById({ id: "5e903ea5dcd881039fa4beec" });
    }

    render() {
        return (
            <div>
                <h1>Stats</h1>
            </div>
        );
    }
}

StatsContainer.propTypes = {
    predictions: PropTypes.array.isRequired,
    numbersOfPredictions: PropTypes.number.isRequired,
    isFetching: PropTypes.bool.isRequired,
    fetched: PropTypes.bool.isRequired,
    error: PropTypes.object,
    classifiers: PropTypes.array.isRequired,
    numberOfClassifiers: PropTypes.number.isRequired,
    selectedScenario: PropTypes.array.isRequired,
}

const mapStateToProps = state => {
    return {
        predictions: state.prediction.predictions,
        numbersOfPredictions: state.prediction.numberOfPredictions,
        isFetching: state.prediction.fetching,
        fetched: state.prediction.fetched,
        error: state.prediction.error,
        classifiers: state.classifier.classifiers,
        numberOfClassifiers: state.classifier.numberOfClassifiers,
        selectedScenario: state.scenario.selectedScenario,
    }
}

export default connect(mapStateToProps, actions)(StatsContainer);