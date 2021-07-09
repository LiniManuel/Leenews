import React, { useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import AOS from 'aos';
import "aos/dist/aos.css";
import "../components/style.scss";



export default function NewSingle({ item }) {
  useEffect(() => {
    AOS.init({duration: 1000})
  }, [])

return (
  <div style={{ width: "100%" }} data-aos="zoom-in-down">
    <Card className="card">
      <Card.Body>
        <Card.Text>
          <Row>
            <Col lg={4}>
              <Card.Img
                variant="top"
                src={item.urlToImage}
                alt={item.title}
                style={{ maxWidth: "100%" }}
              />{" "}
            </Col>{" "}
            <Col lg={8}>
              <Card.Title> {item.title} </Card.Title>{" "}
              <Card.Text> {item.description} </Card.Text>{" "}
              <Button variant="primary">
                {" "}
                <a href={item.url} className="btn btn-primary" target="_blank">
                  Click here to see the article{" "}
                </a>{" "}
              </Button>{" "}
            </Col>{" "}
          </Row>{" "}
        </Card.Text>{" "}
      </Card.Body>{" "}
    </Card>{" "}
    <hr />
  </div>
);
};
