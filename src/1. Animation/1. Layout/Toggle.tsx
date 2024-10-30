import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ToggleEl = styled.div`
  min-height: 100vh;
  background: linear-gradient(250deg, #7b2ff7, #f107a3);
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .switch {
    width: 160px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.4);
    display: flex;
    justify-content: flex-start;
    border-radius: 50px;
    padding: 10px;
    cursor: pointer;
    .handle {
      width: 80px;
      height: 80px;
      background-color: white;
      border-radius: 40px;
    }
  }

  .switch[data-isOn="true"] {
    justify-content: flex-end;
  }
`;

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <ToggleEl>
      <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
        <motion.div className="handle" layout transition={spring} />
      </div>
    </ToggleEl>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default Toggle;
