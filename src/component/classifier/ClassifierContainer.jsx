import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../action'
import ClassifierList from './ClassifierList';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import Button from 'react-bootstrap/Button';

class Classifier extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 0,
            updating: false,
        }
        this.updatePageNumber.bind();
        this.showClassifierTab.bind();
        this.showPagination.bind();
    } 

    updatePageNumber(pageNumber) {
        this.setState({pageNumber})
        this.props.getClassifierPage({page: pageNumber});
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
                    <h3>Erreur pendant le chargement</h3>
                    <p>{this.props.error}</p>
                </Fragment>
            );
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
                <h1 >Modeles</h1>
                <hr />
                {
                    this.showPagination()
                }
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
