import React, { useState, useEffect } from 'react';
import { ConditionsObj, Icon, TimeBanner } from '../';
import { TxtL, TxtM, Col, Grid, Row, Title } from './style';

interface DCprops {
  currentDay: Array<ConditionsObj>;
  city: string;
  skiAreaName: string;
  units: string;
}

const DisplayCenterPane = ({
  currentDay,
  city,
  skiAreaName,
  units,
}: DCprops) => {
  const [currentTime, setCurrentTime] = useState(currentDay[0]);
  const CorF = units === 'metric' ? 'C' : 'F';

  let dailySnow = 0;
  currentDay.map((timeSlice) => {
    dailySnow += timeSlice.snow ? timeSlice.snow?.['3h'] : 0;
  });

  return (
    <Col>
      <Title>{`${skiAreaName} in ${city} on ${
        currentTime.dt_txt.split(' ')[0]
      }`}</Title>
      <Row>
        <Col>
          <TxtL>{currentTime.dt_txt.split(' ')[1].split(':')[0]}h</TxtL>
          <Icon icID={currentTime.weather[0].icon} imgHeight={'80vh'} />
          <TxtM>{currentTime.weather[0].description}</TxtM>
          <Grid>
            <TxtM>{`Precip: ${Math.round(currentTime.pop * 100)}%`}</TxtM>
            <TxtM>{`Hum: ${Math.round(currentTime.main.humidity)}%`}</TxtM>
            <TxtM>{`Cloudy: ${currentTime.clouds.all}%`}</TxtM>
            <TxtM>{`Vis: ${
              currentTime.visibility === 10000 ? '∞' : currentTime.visibility
            }m`}</TxtM>
          </Grid>
          <Row>
            <Col>
              <TxtL>{`${Math.round(currentTime.main.temp)}°${CorF}`}</TxtL>
              <TxtM>
                {`${Math.round(currentTime.main.temp_min)}° / 
                  ${Math.round(currentTime.main.temp_max)}°`}
              </TxtM>
            </Col>
          </Row>
          <TxtM>
            {`Wind: ${Math.round(currentTime.wind.speed)} 
              ${units === 'metric' ? 'm/s' : 'mph'}, 
              ${Math.round(currentTime.wind.deg)}°`}
          </TxtM>
          {currentTime.rain ? (
            <TxtM>
              previous 3hrs rainfall:
              {Math.round(currentTime.rain['3h'])} mm
            </TxtM>
          ) : null}
          {currentTime.snow ? (
            <TxtM>
              previous 3hrs snowfall: {Math.round(currentTime.snow['3h'])} mm
            </TxtM>
          ) : null}
        </Col>
        <Col>
          <TxtM>3 Hour Intervals</TxtM>
          {currentDay.map((timeSlice) => {
            return (
              <TimeBanner
                onClick={() => setCurrentTime(timeSlice)}
                time={timeSlice}
                active={currentTime.dt_txt === timeSlice.dt_txt}
                key={timeSlice.dt_txt}
                units={units}
              />
            );
          })}
        </Col>
      </Row>
    </Col>
  );
};

export default DisplayCenterPane;
