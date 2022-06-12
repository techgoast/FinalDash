import React, { useContext, useState } from 'react';
import { Eventcreate, Sti } from '../header/style';
import { Container, Dateinp, Inplabel, Inputdiv, Selectinp, Stform, Sthead } from './style';
import { filterContext } from '../mainsection';

function Form() {
  const [filter, setFilter] = useState({
    location: "all",
    date: "all",
    paytype: "all"
  });

  const callback = useContext(filterContext);

  return (
    <Container>
      <Sthead>Filter Events</Sthead>
      <Stform>
        <Inputdiv>
          <Inplabel htmlFor='location'>Location</Inplabel>
          <Selectinp name='location' id='location' defaultValue="all" onChange={(e) => setFilter({ ...filter, location: e.target.value })}>
            <option value="all">all</option>
            <option value="india">india</option>
            <option value="italy">italy</option>
            <option value="egypt">egypt</option>
            <option value="united states">united-states</option>
          </Selectinp>
        </Inputdiv>
        <Inputdiv>
          <Inplabel htmlFor='date'>date</Inplabel>
          <Dateinp type="date" name='date' id="date" defaultValue="all" onChange={(e) => setFilter({ ...filter, date: e.target.value })} />
        </Inputdiv>
        <Inputdiv>
          <Inplabel htmlFor='paytype'>payment type</Inplabel>
          <Selectinp name='paytype' id='paytype' defaultValue="all" onChange={(e) => setFilter({ ...filter, paytype: e.target.value })}>
            <option value="all">all</option>
            <option value="paid">paid</option>
            <option value="free">free</option>
          </Selectinp>
        </Inputdiv>
      </Stform>
      <Eventcreate onClick={() => {
        callback(filter);
      }}>
        <Sti className="fa-solid fa-search"></Sti>
        apply filter
      </Eventcreate>
    </Container >
  )
}

export default Form;