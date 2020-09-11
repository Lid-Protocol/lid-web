import { FC } from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { Box, FlexBox } from 'components/@basic';

const Event = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: #52caff;
  margin-top: 20px;
  margin-bottom: 30px;
  position: relative;

  &:before {
    content: '';
    width: 2px;
    height: 20px;
    background: #52caff;
    position: absolute;
    bottom: 20px;
    left: 9px;
  }
  &:after {
    content: '';
    width: 2px;
    height: 30px;
    background: #52caff;
    position: absolute;
    top: 20px;
    left: 9px;
  }
`;

const EventDate = styled.div`
  position: absolute;
  right: 35px;
  font-weight: 500;
  font-size: 22px;
  width: 40vw;
  text-align: right;
  @media (max-width: 500px) {
    left: 35px;
    top: -30px;
    text-align: left;
    width: 80vw;
  }
`;

const EventDesc = styled.div`
  position: absolute;
  left: 35px;
  font-size: 20px;
  width: 40vw;
  text-align: left;
  color: #e7e7e8;
  @media (max-width: 500px) {
    width: 80vw;
  }
`;

export const TagLine = styled.div`
  width: 2px;
  height: 30px;
  background: #52caff;
  margin: 0 9px;
  @media (max-width: 500px) {
    height: 60px;
  }
`;

interface ITimeLine {
  date: string;
  events: string[];
}

const TimeLine: FC<ITimeLine> = ({ date, events }) => (
  <Box width="100%">
    <FlexBox
      flexDirection="column"
      justifyContent="center"
      alignItems={isMobile ? 'flex-start' : 'center'}
    >
      {events.map((event, index) => (
        <Event key={event}>
          {index === 0 && <EventDate>{date}</EventDate>}
          <EventDesc>{event}</EventDesc>
        </Event>
      ))}
      <TagLine />
    </FlexBox>
  </Box>
);

export default TimeLine;
