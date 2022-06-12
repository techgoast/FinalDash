
import React, { useContext } from 'react';
import { Sti } from '../header/style';
import { Flex } from '../temp';
import { Before, Ev, Evsec, Fl, Imgcontainer, Photosrc, Special, Stflex, Stflex0, Sth3, Stimg, Stp, Stsapn } from './style';
import { eventsContext } from '../mainsection';

function EventsSec() {
  const events = useContext(eventsContext);
  return (
    <Evsec>
      <Stflex0>
        <div>
          <Stsapn active left size="16px" weight="500">upcoming events</Stsapn>
          <Stsapn left size="16px" weight="400">Past Events</Stsapn>
        </div>
        <div>
          <Stsapn size="14px" weight="400"> sort by</Stsapn>
          <Stsapn size="14px" weight="500"> recommended</Stsapn>
        </div>
      </Stflex0>
      <Stflex>
        {events.map(eve => {
          return (
            <Ev key={eve.id}>
              <Imgcontainer>
                <Stimg src={eve.backimg} alt="img" />
                <Before>{eve.type}</Before>
              </Imgcontainer>
              <Photosrc>{eve.imgsrc}</Photosrc>
              <div>
                <Stsapn size="12px" weight="400">by: </Stsapn>
                <Stsapn size="12px" weight="600">{eve.organizer}</Stsapn>
              </div>
              <Sth3>{eve.title}</Sth3>
              <Fl>
                <Sti className="fa-solid fa-calendar-days"></Sti>
                <div>
                  <Stp size="11px" weight="300">date: </Stp>
                  <Stp size="15px" weight="600">{eve.date}</Stp>
                </div>
              </Fl>
              <Fl>
                <Sti className="fa-solid fa-location-dot"></Sti>
                <div>
                  <Stp size="11px" weight="300">location: </Stp>
                  <Stp size="15px" weight="600">{eve.location}</Stp>
                </div>
              </Fl>
              <Special bwidth={eve.rating}>
                <Stp size="12px" weight="600">rating: </Stp>
                <Stp size="13px" weight="400">{eve.rating}</Stp>
              </Special>
              <Special bwidth={eve.recommended}>
                <Stp size="12px" weight="600">recommended: </Stp>
                <Stp size="13px" weight="400">{eve.recommended}</Stp>
              </Special>
              <Flex>
                <Stp size="12px" weight="600">upcomming: </Stp>
                <Stp size="13px" weight="400">{eve.upcomming}</Stp>
              </Flex>
              <Flex>
                <Stp size="12px" weight="600">past: </Stp>
                <Stp size="13px" weight="400">{eve.past}</Stp>
              </Flex>
            </Ev>
          )
        })}
      </Stflex>
    </Evsec>
  )
}

export default EventsSec;