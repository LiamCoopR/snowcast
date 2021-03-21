import React, { useState, useEffect } from 'react';
import { ConditionsObj, Icon, TimeBanner } from '../';
import { H1, P, Col, Row, CurrentPane, Temp, Title, Weather } from './style';

interface DCPprops {
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
}: DCPprops) => {
  const [currentTime, setCurrentTime] = useState(currentDay[0]);

  useEffect(() => {
    setCurrentTime(currentDay[0]);
  }, [currentDay]);

  let dailySnow = 0;
  currentDay.map((timeSlice) => {
    dailySnow += timeSlice.snow ? timeSlice.snow?.['3h'] : 0;
  });

  return (
    <>
      <Title>{`${skiAreaName} in ${city} on ${
        currentTime.dt_txt.split(' ')[0]
      }`}</Title>
      <Row>
        <CurrentPane>
          <Col>
            <H1>
              {currentTime.dt_txt.split(' ')[1].split(':')[0]}h
              {currentTime.dt_txt.split(' ')[1].split(':')[1]}
            </H1>
            <Icon icID={currentTime.weather[0].icon} imgHeight={'100vh'} />
            <P>Conditions: {currentTime.weather[0].description}</P>
          </Col>
          <Row>
            <Temp>
              <H1>
                {Math.round(currentTime.main.temp)}&deg;
                {units === 'metric' ? 'C' : 'F'}
              </H1>
              <P>
                {Math.round(currentTime.main.temp_min)}&deg;
                {units === 'metric' ? 'C' : 'F'} /{' '}
                {Math.round(currentTime.main.temp_max)}&deg;
                {units === 'metric' ? 'C' : 'F'}
              </P>
            </Temp>
            <Weather>
              <P>Precipitation: {Math.round(currentTime.pop * 100)}%</P>
              <P>Humidity: {Math.round(currentTime.main.humidity)}%</P>
              {currentTime.visibility === 10000 ? (
                <P>Vis: &infin; m</P>
              ) : (
                <P>Vis: {currentTime.visibility} m</P>
              )}
              <P>Cloud: {currentTime.clouds.all}%</P>
            </Weather>
          </Row>
          <Col>
            <P>
              Windspeed, direction:
              {Math.round(currentTime.wind.speed)}
              {units === 'metric' ? 'm/s' : 'mph'},
              {Math.round(currentTime.wind.speed)}&deg;
            </P>
            {currentTime.rain ? (
              <P>
                Rainfall for previous 3hrs: {Math.round(currentTime.rain['3h'])}{' '}
                mm
              </P>
            ) : null}{' '}
            {currentTime.snow ? (
              <P>
                Snowfall over previous 3hrs: ~
                {Math.round(currentTime.snow['3h'] * 100) / 10}
                mm
              </P>
            ) : null}
          </Col>
        </CurrentPane>
        <Col>
          <P>3 Hour Intervals</P>
          {currentDay.map((timeSlice) => {
            return (
              <TimeBanner
                onClick={() => setCurrentTime(timeSlice)}
                time={timeSlice}
                active={currentTime.dt === timeSlice.dt}
                key={timeSlice.dt_txt}
                units={units}
              />
            );
          })}
        </Col>
      </Row>
    </>
  );
};

export default DisplayCenterPane;
