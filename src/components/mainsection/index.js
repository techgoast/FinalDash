import axios from 'axios';
import React, { createContext, useEffect, useReducer } from 'react';
import EventsSec from '../EventsSection';
import Form from '../form';
import { Mainsection } from './style';

export const eventsContext = createContext();
export const filterContext = createContext();


const initState = {
  events: [],
  displayedEvents: []
}
const reducer = (state, action) => {
  switch (action.type) {
    case "all":
      return { events: action.data, displayedEvents: action.data }
    case "filter":
      return { ...state, displayedEvents: action.data }
    default:
      return state
  }
}

function MainSection() {

  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    axios.get("data.json").then(res => dispatch({ type: "all", data: res.data }));
  }, []);

  const hello = (filter) => {
    dispatch({
      type: "filter",
      data: state.events.filter(ev => {
        if (filter.location === "all" && filter.date === "all" && filter.paytype === "all") {
          return ev
        } else if (filter.location !== "all") {
          if (filter.date === "all") {
            if (filter.paytype === "all") {
              return ev.location === filter.location
            } else {
              return ev.location === filter.location && ev.type === filter.paytype
            }
          } else {
            if (filter.paytype === "all") {
              return ev.location === filter.location && ev.date === filter.date
            } else {
              return ev.location === filter.location && ev.date === filter.date && ev.type === filter.paytype
            }
          }
        } else {
          if (filter.date === "all") {
            if (filter.paytype !== "all") {
              return ev.type === filter.paytype
            }
          } else {
            if (filter.paytype === "all") {
              return ev.date === filter.date
            } else {
              return ev.date === filter.date && ev.type === filter.paytype
            }
          }
        }
        return ev;
      })
    })
  }



  return (
    <eventsContext.Provider value={state.displayedEvents}>
      <filterContext.Provider value={hello}>
        <Mainsection>
          <Form />
          <EventsSec />
        </Mainsection>
      </filterContext.Provider>
    </eventsContext.Provider>
  )
}

export default MainSection;