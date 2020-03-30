import React, { useState } from 'react';
import { Jumbotron, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

const makeDropDownItem = (configFromWords, onClick) => {
    return configFromWords.map(item => {
        return <Dropdown.Item 
                    key={item} 
                    onClick={item => onClick(item)}>
                        {item.toLowerCase()}
                </Dropdown.Item>
    });
}

const Scenario = ({ scenario, config }) => {
    const [localScenario, setLocalScenario] = useState(scenario);

    return (
        <Jumbotron  className="text-light bg-dark">
            <h1>Visualisation et modification d'un scénario</h1>
            <p>
                Regardez le contenue d'une entrée de votre dataset
                <br />
                Vous pouvez aussi modifier certains champs
            </p>

            <hr />
            <p>
            Utilisé dans le dataset ? {localScenario.usedInDataset ? 'oui': 'non'}
            </p>

            <hr />
            <h2>Trace</h2>
            <p>
            {localScenario.trace}
            </p>

            <hr />
            <h2>Type d'erreur</h2>
            <p>
            {localScenario.trainingLabel}
            </p>
            <Dropdown>
                <Dropdown.Toggle variant="success">
                    {localScenario.trainingLabel ? localScenario.trainingLabel : "Changer le status"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {makeDropDownItem(config["trainingLabels"], status => {
                        setLocalScenario({
                            ...localScenario,
                            trainingLabel: status
                        });
                    })}
                </Dropdown.Menu>
            </Dropdown>

            <hr />
            <h2>Piste de correction</h2>
            <p>
            {localScenario.correctionAction}
            </p>
            <Dropdown>
                <Dropdown.Toggle variant="success">
                    {localScenario.correctionAction ? localScenario.correctionAction : "Changer le status"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {makeDropDownItem(config["correctionActions"], status => {
                        setLocalScenario({
                            ...localScenario,
                            correctionAction: status
                        });
                    })}
                </Dropdown.Menu>
            </Dropdown>

            <hr />
            <h2>Etape du BDD en échec</h2>
            <p>
            {localScenario.failStepKeyWord}
            </p>

            <hr />
            <h2>Date du tir</h2>
            <p>
            {new Date(localScenario.createdAt).toLocaleDateString()}
            </p>

        </Jumbotron>
    );
}

Scenario.propTypes = {
    scenario: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
}

export default Scenario;