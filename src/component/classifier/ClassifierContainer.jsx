import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../action'
import ClassifierList from './ClassifierList';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';
import Pagination from '../ui/Pagination';

class Classifier extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 0,
            updating: false,
        }
        this.updatePageNumber.bind();
        this.showClassifierTab.bind();
    } 

    updatePageNumber = pageNumber => {
        const page = Math.max(0, pageNumber - 1);
        this.props.getClassifierPage({ page });
        this.setState({pageNumber: page})
    }

    componentDidMount() {
        this.updatePageNumber(this.state.pageNumber);
    }

    showClassifierTab() {
        if (this.props.fetched) {
            return <ClassifierList 
                classifiers={this.props.classifiers}
                activeClassifier={this.props.activeClassifier}
                deleteClassifier={this.props.deleteClassifier}
            />;
        } else if (this.props.error !== null) {
            return (
                <Fragment>
                    <h3>Erreur pendant le chargement des models</h3>
                </Fragment>
            );
        } else {
            return <Spinner animation="grow" variant="light" />;
        }
    }

    render() {
        return (
            <Fragment>
                <h1 >Modeles</h1>
                <hr />
                <Pagination totalRecords={1000} pageLimit={50} pageNeighbours={1} onPageChanged={this.updatePageNumber} />
                <hr />
                {
                    this.showClassifierTab()
                }
            </Fragment>
        );
    }
}

Classifier.propTypes = {
    classifiers: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    fetched: PropTypes.bool.isRequired,
    error: PropTypes.string,
}

const mapStateToProps = state => {
    return {
        classifiers: state.classifier.classifiers,
        isFetching: state.classifier.fetching,
        fetched: state.classifier.fetched,
        error: state.classifier.error
    };
};

export default connect(mapStateToProps, actions)(Classifier);
