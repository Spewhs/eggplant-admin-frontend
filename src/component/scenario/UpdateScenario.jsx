import React, { Fragment, useState, useEffect } from "react";
import { Modal, Button, Dropdown } from "react-bootstrap";

const makeDropDownItem = (configFromWords, onClick) => {
  return configFromWords.map(item => {
    return (
      <Dropdown.Item key={item} onClick={() => onClick(item)}>
        {item.toLowerCase()}
      </Dropdown.Item>
    );
  });
};

const UpdateScenario = props => {
  const { scenario, config, show, onUpdate, handleOnHide, onMakeAPrediction } = props;

  const [localScenario, setLocalScenario] = useState({});
  const [localShow, setLocalShow] = useState(show);
  useEffect(() => setLocalShow(show), [show]);
  useEffect(() => setLocalScenario(scenario), [scenario]);

  if (localScenario === null) return <Fragment></Fragment>;
  return (
    <Modal
      show={localShow}
      onHide={handleOnHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Modification du scénario {localScenario.id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Utilisé dans le dataset ?
          <br />
          <Button 
            variant={localScenario.usedInDataset ? "success" : "danger"}
            onClick={() => {
              setLocalScenario({
                ...localScenario,
                usedInDataset: !localScenario.usedInDataset
              });
            }}
          >
            {localScenario.usedInDataset ? "Oui" : "Non"}
          </Button>
        </p>

        <h2>Prédiction</h2>
        <p>Faire une prédiction manuelle sur ce scénario avec le modèle séléctionné par défault</p>
        <Button
          variant="success"
          onClick={() => onMakeAPrediction()}
        >Prédire</Button>
        
        <h2>Etape du BDD en échec</h2>
        <p>{localScenario.failStepKeyWord}</p>

        <h2>Date de l'ajout dans le dataset</h2>
        <p>{new Date(localScenario.createdAt).toLocaleDateString()}</p>

        <h2>Type d'erreur</h2>
        <Dropdown>
          <Dropdown.Toggle>
            {localScenario.trainingLabel
              ? localScenario.trainingLabel
              : "Changer le status"}
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

        <h2>Piste de correction</h2>
        <Dropdown>
          <Dropdown.Toggle>
            {localScenario.correctionAction
              ? localScenario.correctionAction
              : "Changer le status"}
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

        <h2>Trace</h2>
        <p>{localScenario.trace}</p>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => onUpdate(localScenario)}>Valider</Button>
        <Button onClick={handleOnHide}>Annuler</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default UpdateScenario;
