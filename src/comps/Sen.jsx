import React from 'react';
import Template from './Temp.jsx';
import data from './data/senators.json';

class Politician extends React.Component {
  render() {
    console.log(data);
    return(
      <div>

        <div>
          <h3>Republicans:</h3>
          {
            data
              .filter((sen) => { return sen.party === "Republican" })
              .map((sen) => { return {name: sen.person.name, party: sen.party, bday: sen.person.birthday }})
              .map((sen) => { return ( <Template key={sen.name} info={sen} /> ) })
          }
        </div>

        <br/><br/><br/>

          <div>
            <h3>Democrats::</h3>
            {
              data
                .filter((sen) => { return sen.party === "Democrat" })
                .map((sen) => { return {name: sen.person.name, party: sen.party, bday: sen.person.birthday }})
                .map((sen) => { return ( <Template key={sen.name} info={sen} /> ) })
            }
          </div>


          <br/><br/><br/>

            <div>
              <h3>Others:</h3>
              {
                data
                  .filter((sen) => { return sen.party !== "Democrat" && sen.party !== "Republican" })
                  .map((sen) => { return {name: sen.person.name, party: sen.party, bday: sen.person.birthday }})
                  .map((sen) => { return ( <Template key={sen.name} info={sen} /> ) })
              }
            </div>

      </div>
    )
  }
}

export default Politician;
