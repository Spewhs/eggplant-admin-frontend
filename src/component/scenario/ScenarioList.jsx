import React from 'react';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';


const ScenarioList = ({scenarios, onScenarioClick}) => {

    const rows = scenarios.map(scenario => {
        return (
            <tr key={scenario.id}
                onClick={() => onScenarioClick(scenario)}
            >
                <td>{new Date(scenario.createdAt).toLocaleDateString()}</td>
                <td>{scenario.trainingLabel.toLowerCase()}</td>
                <td>{scenario.correctionAction.toLowerCase()}</td>
                <td>{scenario.failStepKeyWord}</td>
                <td>{scenario.usedInDataset ? "oui" : "non"}</td>
            </tr>
        );
    });

    return (
        <Table className="justify-content-md-center" responsive borderless hover variant="dark">
            <thead>
                <tr>
                    <th className="justify-content-md-center">Date de création</th>
                    <th className="justify-content-md-center">Type d'erreur</th>
                    <th className="justify-content-md-center">Type de correction</th>
                    <th className="justify-content-md-center">Etape du bdd en échec</th>
                    <th className="justify-content-md-center">Utilisé dans le dataset</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>
    );
}

ScenarioList.propTypes = {
    scenarios: PropTypes.array.isRequired,
    onScenarioClick: PropTypes.func.isRequired,
}

export default ScenarioList;