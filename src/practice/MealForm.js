import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "antd";

function MealForm(props) {
  const [choose, setChoose] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleInputChange = e => {
    setChoose(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: choose
    });

    setChoose("");
  };

  return (
    <Row justify="center">
      <Col xs={24} sm={20} md={12}>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            className="choose__input"
            value={choose}
            onChange={handleInputChange}
            name="text"
            placeholder="Some Ideas..."
          ></input>

          <button className="add__btn">Add</button>
        </form>
      </Col>
    </Row>
  );
}

export default MealForm;
