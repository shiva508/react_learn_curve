import React, { Fragment } from 'react';
import { Table } from 'react-bootstrap';

var DashboardTable=(props)=>{
return(
    
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Team</th>
      <th>Logo</th>
      <th>Played</th>
      <th>Wing</th>
      <th>Lost</th>
      <th>NRT</th>
    </tr>
  </thead>
  <tbody>
      {props.arrayData.map((data)=>{
          return(
                    <tr key={data.matchResultId}>
                        <td>{data.teamCode}</td>
                        <td><img width={50}  src={data.teamLogo}/></td>
                        <td>{data.matchesPlayed}</td>
                        <td>{data.matchWinsCount}</td>
                        <td>{data.matchLostsCount}</td>
                        <td>{data.netRunRate}</td>
                        {data.matchDetails.map((matchDetail)=>{
                            return(
                                <Fragment>
                                    {matchDetail.matchResult==='We won' ?<td>💚</td>:<td>❤️</td>}
                                </Fragment>
                            
                            );
                            
                        })

                        }
                    </tr>
          );
      })
      }
  </tbody>
</Table>
    
)
};export default DashboardTable;