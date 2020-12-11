import React from "react";
import { Row, Col } from "antd";
function MealRandom({ chooses, randomChoose, result }) {
  return (
    <Row justify="center">
      <Col xs={23} sm={19} md={11}>
        <div className="random__block">
          <button
            className="random__btn"
            onClick={() => {
              randomChoose(chooses);
            }}
          >
            抽籤
          </button>

          <div className="random__result">{result.text}</div>
        </div>
      </Col>
    </Row>
  );
}

export default MealRandom;
