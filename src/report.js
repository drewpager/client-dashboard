import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledReport = styled.div`
height: 10vh;
display: flex;
align-items: center;
width: 100%;
padding: 5px;
`;

export const Report = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const queryReport = () => {
      window.gapi.client
        .request({
          path: "/v4/reports:batchGet",
          root: "https://analyticsreporting.googleapis.com/",
          method: "POST",
          body: {
            reportRequests: [
              {
                viewId: "148042563", //enter your view ID here
                dateRanges: [
                  {
                    startDate: "10daysAgo",
                    endDate: "today",
                  },
                ],
                metrics: [
                  {
                    expression: "ga:users",
                  },
                ],
                dimensions: [
                  {
                    name: "ga:date",
                  },
                ],
              },
            ],
          },
        })
        .then(displayResults, console.error.bind(console));
    };

    const displayResults = (response) => {
      const queryResult = response.result.reports[0].data.rows;
      const result = queryResult.map((row) => {
        const dateString = row.dimensions[0];
        const formatDate = `${dateString.substring(0, 4)}-${dateString.substring(4, 6)}-${dateString.substring(6, 8)}`
        return {
          date: formatDate,
          visits: row.metrics[0].values[0]
        };
      });
      setData(result);
    };
    
    queryReport();
  }, []);

  return data.map((row) => (
    <StyledReport>
      <div key={row.date}>{`${row.date}: ${row.visits} visits`}</div>
    </StyledReport>
  ));
};

export default Report;