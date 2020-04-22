import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../action'
import ClassifierList from './ClassifierList';
import { Spinner, Badge, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Pagination from '../ui/Pagination';
import Coloredline from '../ui/ColoredLine';

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
            <div className="container mb-5">
                <div className="row pt-5 pb-2 justify-content-center">
                    <h1 className="col-4">Modeles</h1>
                </div>
                <Coloredline color="white"/>
                <div className="row py-2 justify-content-between">
                    <div className="col-2">
                        <Badge  variant="primary">
                            Total model <Badge variant="light">{this.props.numberOfClassifiers}</Badge>
                        </Badge>
                    </div>
                    <div>
                        <Button onClick={() => actions.subtmitNewPrediction()}>Entrainer un nouveau modèle</Button>
                    </div>
                    <Pagination className="col-6" totalRecords={this.props.numberOfClassifiers} pageLimit={50} pageNeighbours={1} onPageChanged={this.updatePageNumber} />
                </div>
                { this.showClassifierTab() }
            </div>
        );
    }
}

Classifier.propTypes = {
    classifiers: PropTypes.array.isRequired,
    numberOfClassifiers: PropTypes.number.isRequired,
    isFetching: PropTypes.bool.isRequired,
    fetched: PropTypes.bool.isRequired,
    error: PropTypes.object,
}

const mapStateToProps = state => {
    return {
        classifiers: state.classifier.classifiers,
        numberOfClassifiers: state.classifier.numberOfClassifiers,
        isFetching: state.classifier.fetching,
        fetched: state.classifier.fetched,
        error: state.classifier.error
    };
};

export default connect(mapStateToProps, actions)(Classifier);
