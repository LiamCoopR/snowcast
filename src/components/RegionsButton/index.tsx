import React, { useContext } from 'react';
import {
  Btn,
  BtnName,
  SnowflakeGrid,
  // SnowflakeItem,
} from './style';
import './RegionButton.css';

interface RegionsButtonProps {
  onClick: () => void;
}

// found this button on code-pen, thought it fit the project theme.
// Shoutout Sowmya Seshadri for this!
// https://codepen.io/sowmyaseshadri/pen/LYRjGpr?editors=1100
const RegionsButton = ({ onClick }: RegionsButtonProps) => (
  <Btn onClick={onClick}>
    <BtnName>View Regions</BtnName>
    <SnowflakeGrid className="to-left">
      <div className="snowflake-item border-bottom border-right">
        <div className="sub-items border-right border-bottom pull-down">
          <div className="m-w-15 m-h-15 border-right border-bottom m-3" />
        </div>
      </div>
      <div className="snowflake-item border-bottom border-left">
        <div className="sub-items border-right border-bottom r-90 pull-down-right">
          <div className="m-w-15 m-h-15 border-right border-bottom m-3" />
        </div>
      </div>
      <div className="snowflake-item border-top border-right">
        <div className="sub-items border-right border-bottom r-270 pull-right">
          <div className="m-w-15 m-h-15 border-right border-bottom m-3" />
        </div>
      </div>
      <div className="snowflake-item border-top border-left">
        <div className="sub-items border-right border-bottom r-180 pull-left">
          <div className="m-w-15 m-h-15 border-right border-bottom m-3" />
        </div>
      </div>
    </SnowflakeGrid>
    <SnowflakeGrid className="to-right">
      <div className="snowflake-item border-bottom border-right">
        <div className="sub-items border-right border-bottom pull-down">
          <div className="m-w-15 m-h-15 border-right border-bottom m-3" />
        </div>
      </div>
      <div className="snowflake-item border-bottom border-left">
        <div className="sub-items border-right border-bottom r-90 pull-down-right">
          <div className="m-w-15 m-h-15 border-right border-bottom m-3" />
        </div>
      </div>
      <div className="snowflake-item border-top border-right">
        <div className="sub-items border-right border-bottom r-270 pull-right">
          <div className="m-w-15 m-h-15 border-right border-bottom m-3" />
        </div>
      </div>
      <div className="snowflake-item border-top border-left">
        <div className="sub-items border-right border-bottom r-180 pull-left">
          <div className="m-w-15 m-h-15 border-right border-bottom m-3" />
        </div>
      </div>
    </SnowflakeGrid>
  </Btn>
);

export default RegionsButton;
