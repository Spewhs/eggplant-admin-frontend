import React from 'react';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import PropTypes from 'prop-types';
import RatioLabel from './RatioLabel';
import Button from 'react-bootstrap/Button';


const ClassifierList = ({ classifiers, activeClassifier, deleteClassifier }) => {

    const rows = classifiers.map(classifier => {
        return(
            <tr key={classifier.id}>
                <td >{new Date(classifier.createdAd).toLocaleDateString()}</td>
                <td>{classifier.version}</td>
                <td>{classifier.trainingAccuracy.toFixed(3)}</td>
                <td>{RatioLabel(classifier.totalPrediction, classifier.goodPrediction)}</td>
                <td>{classifier.totalPrediction}</td>
                <td>{classifier.activeClassifier ? 
                  <Badge pill variant="success">Oui</Badge> :
                  <Badge pill variant="secondary">Non</Badge>
                }</td>
            <td>
                <Button 
                    variant="outline-info"
                    disabled={classifier.activeClassifier}
                    onClick={() => activeClassifier({id: classifier.id})}>
                        Activer
                </Button>
            </td>
                <td>
                    <Button 
                        variant="outline-info"
                        disabled={classifier.activeClassifier}
                        onClick={() => deleteClassifier({id: classifier.id})}>
                            Effacer
                    </Button>
                </td>
            </tr>
        );
    });
    return (
        <Table className="justify-content-md-center" responsive borderless hover variant="dark">
            <thead>
                <tr>
                    <th className="justify-content-md-center">Date de création</th>
                    <th className="justify-content-md-center">Numéro de version</th>
                    <th className="justify-content-md-center">Précision entrainement</th>
                    <th className="justify-content-md-center">Ratio de bonnes prédictions</th>
                    <th className="justify-content-md-center">Nombre total de prédictions</th>
                    <th className="justify-content-md-center">Est le model actif</th>
                    <td className="justify-content-md-center">Rendre Actif</td>
                    <td className="justify-content-md-center">Effacer le model</td>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>
    );
}

ClassifierList.propTypes = {
    classifiers: PropTypes.array.isRequired,
    activeClassifier: PropTypes.func.isRequired, 
    deleteClassifier: PropTypes.func.isRequired,
}

export default ClassifierList;