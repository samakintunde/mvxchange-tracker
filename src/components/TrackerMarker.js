import React from "react";
import styled from "styled-components";
import TrackerPopup from "./TrackerPopup";
import { motion } from "framer-motion";

const StyledTrackerMarker = styled.div`
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.gray};

  &::before,
  &::after {
    position: absolute;
    content: "";
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: pulse 5s ease-in-out infinite;
    transform-origin: top left;
    will-change: auto;
  }

  &::before {
    height: 3rem;
    width: 3rem;
    background-color: ${(props) =>
      props.active ? "rgba(0, 109, 255, 0.4)" : "rgba(0, 0, 0, 0.15)"};
  }

  &::after {
    height: 5rem;
    width: 5rem;
    background-color: ${(props) =>
      props.active ? "rgba(0, 109, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
    animation-delay: 1s;
  }

  @keyframes pulse {
    0% {
      transform: scale(1) translate(-50%, -50%);
    }
    50% {
      transform: scale(0.75) translate(-50%, -50%);
    }
    100% {
      transform: scale(1) translate(-50%, -50%);
    }
  }
`;

const StyledTrackerPopupContainer = styled(motion.div)`
  position: absolute;
  bottom: 50%;
  left: 50%;
  z-index: 1;
`;

const TrackerMarker = (props) => {
  const { $hover, active } = props;

  return (
    <StyledTrackerMarker active={active}>
      {$hover && (
        <StyledTrackerPopupContainer
          initial={{
            opacity: 0,
            scale: 0.75,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
        >
          <TrackerPopup />
        </StyledTrackerPopupContainer>
      )}
    </StyledTrackerMarker>
  );
};

TrackerMarker.defaultProps = {
  isHover: true,
};

TrackerMarker.propTypes = {};

export default TrackerMarker;
