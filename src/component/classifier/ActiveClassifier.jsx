import React from 'react';
import * as actions from '../../action';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button'

const UpdateClassifier = (props) => {
    const { activeClassifier } = props;
    const id = props.props;
    return 
};

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, actions)(UpdateClassifier);