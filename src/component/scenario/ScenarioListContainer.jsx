import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../action'
import PropTypes from 'prop-types';
import ScenarioList from './ScenarioList';
import Spinner from 'react-bootstrap/Spinner';
import UpdateScenario from './UpdateScenario';
import CustomPagination from '../ui/Pagination';

class ScenarioContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 0,
            selectedScenario: null,
            showModal: false,
        }
        this.showScenarioList.bind(this);
        this.unSelectScenario.bind(this);
    }

    updatePageNumber = pageNumber => {
        const page = Math.max(0, pageNumber - 1);
        this.props.getScenario({ page });
        this.setState({pageNumber: page});
    }

    componentDidMount() {
        this.updatePageNumber(this.state.pageNumber);
    }

    unSelectScenario = () => {
        this.setState({
            ...this.state,
            selectedScenario: null,
            showModal: false,
        });
    }

    showScenarioList() {
        if (this.props.fetched) {
            if (!this.props.scenarios.length > 0){
                return <h2>Pas de données sur cette page</h2>;
            }
            return (
                <Fragment>
                    <ScenarioList 
                    scenarios={this.props.scenarios}
                    onScenarioClick={scenario => {
                        this.setState({
                            ...this.state,
                            selectedScenario: scenario,
                            showModal: true,
                        });
                    }}
                    />;
                    <UpdateScenario 
                        scenario={this.state.selectedScenario}
                        config={this.props.config}
                        show={this.state.showModal}
                        onUpdate={updateScenario => {
                            this.unSelectScenario();
                            this.props.updateScenario({scenario: updateScenario});
                            this.forceUpdate();
                        }}
                        handleOnHide={this.unSelectScenario}
                    />
                </Fragment>
            );
        } else if(this.props.error) {
            return <h2>Error</h2>;
        } else {
            return <Spinner animation="grow" variant="light" />;
        } 
    }

    render() {
        return (
            <Fragment>
                <h1>Scenarii</h1>
                <hr />
                <CustomPagination totalRecords={1000} pageLimit={50} pageNeighbours={1} onPageChanged={this.updatePageNumber}/>
                <hr />
                {
                    this.showScenarioList()
                }
            </Fragment>
        );
    }
}

ScenarioContainer.propTypes = {
    scenarios: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    fetched: PropTypes.bool.isRequired,
    error: PropTypes.object,
    config: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
    return {
        scenarios: state.scenario.scenarios,
        isFetching: state.scenario.fetching,
        fetched: state.scenario.fetched,
        error: state.scenario.error,
        config: state.config.config,
    }
}

export default connect(mapStateToProps, actions)(ScenarioContainer);