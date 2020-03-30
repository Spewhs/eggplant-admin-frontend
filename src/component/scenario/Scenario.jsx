import React from 'react';
import { Jumbotron, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Scenario = ({  scenario, config }) => {
    // const [localScenario, setLocalScenario] = useState(scenario)

    /*
    const makeDropDown = configFromWords => {
        const items = configFromWords.map(item => {
            return <Dropdown.Item href={item}>{item}</Dropdown.Item>
        })
        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Changer le status
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {items}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
    */

    // TODO faire une fonction dropdown pour changer label 
    
    // TODO faire une fonction dropdown pour changer correction

    return (
        <Jumbotron  className="text-light bg-dark">
            <h1>Visualisation et modification d'un scénario</h1>
            <p>
                Regardez le contenue d'une entrée de votre dataset
                <br />
                Vous pouvez aussi modifier certains champs
            </p>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Changer le status
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => console.log("action")} href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <hr />
            <p>
            Ce scénario est utilisé dans votre dataset {scenario.usedInDataset ? 'oui': 'non'}
            </p>

            <hr />
            <h2>Trace</h2>
            <p>
            {scenario.trace}
            </p>

            <hr />
            <h2>Type d'erreur</h2>
            <p>
            {scenario.trainingLabel}
            </p>

            <hr />
            <h2>Piste de correction</h2>
            <p>
            {scenario.correctionAction}
            </p>

            <hr />
            <h2>Etape du BDD en échec</h2>
            <p>
            {scenario.failStepKeyWord}
            </p>

            <hr />
            <h2>Date du tir</h2>
            <p>
            {new Date(scenario.createdAt).toLocaleDateString()}
            </p>

        </Jumbotron>
    );
}

Scenario.propTypes = {
    scenario: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
}

export default Scenario;