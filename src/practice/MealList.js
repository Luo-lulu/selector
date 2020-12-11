import React, { useState } from "react";
import MealForm from "./MealForm";
import MealItem from "./MealItem";
import MealRandom from "./MealRandom";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import "./Meal.css";
function MealList() {
  const [chooses, setChooses] = useState([]);
  const [result, setResult] = useState("");
  const addChoose = choose => {
    if (!choose.text || /^\s*$/.test(choose.text)) {
      return;
    }
    const allChooses = [choose, ...chooses];
    setChooses(allChooses);
  };
  const removeChoose = id => {
    const removeArr = chooses.filter(choose => choose.id !== id);
    setChooses(removeArr);
  };

  const randomChoose = () => {
    const randomResult = Math.floor(Math.random() * chooses.length);
    const result = chooses[randomResult];
    setResult(result);
  };

  return (
    <Row justify="center">
      <Col xs={22} sm={18} md={12}>
        <div className="meal__list">
          <h2>If i have no idea..</h2>
          <MealForm onSubmit={addChoose} />
          <MealItem chooses={chooses} removeChoose={removeChoose} />
          <MealRandom randomChoose={randomChoose} result={result} />
        </div>
      </Col>
    </Row>
  );
}

export default MealList;
