import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../action'
import PropTypes from 'prop-types';
import ScenarioList from './ScenarioList';
import Spinner from 'react-bootstrap/Spinner';
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

class ScenarioContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 0
        }
        this.showScenarioList.bind();
        this.showPagination.bind();
    }

    updatePageNumber(page) {
        this.setState({pageNumber: page});
        this.props.getScenario({page});
    }

    componentDidMount() {
        this.updatePageNumber(this.state.pageNumber);
    }

    showScenarioList() {
        if (this.props.fetched) {
            if (!this.props.scenarios.length > 0){
                return <h2>Pas de données sur cette page</h2>;
            }
            return <ScenarioList 
                    scenarios={this.props.scenarios}
                    onScenarioClick={scenario => {
                        this.props.history.push({
                            pathname: '/scenarii/' + scenario.id,
                            data: scenario
                        });
                    }}
                />;
        } else if(this.props.error) {
            return <h2>Error</h2>;
        } else {
            return <Spinner animation="grow" variant="light" />;
        } 
    }

    showPagination() {
        let items = [];
        for (let number = 0; number < 5; number++) {
            items.push(
                <PageItem key={number} active={number === (this.state.pageNumber)}>
                    <Button size="lg" onClick={() => {this.updatePageNumber(number)}}>{number + 1}</Button>
                </PageItem>,
            );
        }
        return (
            <Pagination className="fixed-bottom-center">
                {items}
            </Pagination>
        );
    }

    render() {
        return (
            <Fragment>
                <h1>Scenarii</h1>
                <hr />
                {
                    this.showPagination()
                }
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
    error: PropTypes.string,
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

export default withRouter(connect(mapStateToProps, actions)(ScenarioContainer));