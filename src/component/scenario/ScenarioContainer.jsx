import React from 'react';
import { connect } from 'react-redux';
import * as action from '../../action';
import Scenario from './Scenario';
import Spinner from 'react-bootstrap/Spinner';

class ScenarioContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            scenario: this.props.scenarios.find(s => s.id === this.props.match.params.id)
        }
    }

    componentDidMount() {
        this.props.getConfig();
    }

    render() {
        if (this.state.scenario === undefined) {
            return <Spinner animation="grow" variant="light" />;
        }
        return (
            <div className="p-4">
                <Scenario scenario={this.state.scenario} config={this.props.config}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        scenarios: state.scenario.scenarios,
        config: state.config.config,
    }
}

export default connect(mapStateToProps, action)(ScenarioContainer);