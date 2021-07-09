import React, { useState } from "react";

import { Container, Form, Button } from "react-bootstrap";

export  const Impostazioni = (props) => {
  const [nazione, setNazione] = useState(props.lingua);
  const lingue = ["IT", "US", "CA", "UK", "FR", "PT", "BE","DE", "NL"];

  
  const onSubmit = () => {
    props.updateSetting({nazione})
    props.history.push("/");
  };


  return (
    <Container style={{ marginTop: "20px", marginBottom: "100px" }}>
      <h3 style={{ color: "white" }}>Seleziona la nazione delle news</h3>

      <Form>
        <Form.Group controlId="nazioneForm">
          <Form.Control
            as="select"
            custom
            onChange={(e) => setNazione(e.target.value)}
            value={nazione}
          >
            {lingue.map((lingua) => {
              return <option>{lingua}</option>;
            })}
          </Form.Control>
        </Form.Group>

        <div style={{ float: "right" }}>
          <Button variant="primary" type="button" onClick={onSubmit}>
            OK
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Impostazioni;