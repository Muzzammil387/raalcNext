export default function EventSchedule() {
  return (
    <>
      <style jsx>{`
        .table-wrapper {
          overflow-x: auto;
          margin: 1rem 0;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 600px;
          font-family: Arial, sans-serif;
        }

        thead {
          height: 100px
        }

        th {
          background-color: #000;
          color: white;
          padding: 16px;
          text-align: center;
          border: 4px solid #000;
          font-family: Montserrat, sans-serif;
          font-size: 19px;
        }

        td {
          padding: 16px;
          border: 2px solid #000;
          font-family: Montserrat, sans-serif;
          font-size: 19px;
          text-align: center;
        }

          tr {
         height: 100px;
        }

        tbody tr:nth-child(even) {
          background-color: #fff;
        }

        tbody tr:nth-child(odd) {
          background-color: #f9f9f9;
        }

        td.event-name {
          background-color: #e6e8e9; /* light grey */
          font-weight: bold;
        }

        @media (max-width: 600px) {
          table {
            font-size: 14px;
          }

          td, th {
            padding: 10px;
          }
        }
      `}</style>

      <div className="table-wrapper">
        <table>
          <thead style={{minHeight: 100}}>
            <tr>
              <th>Date of the Event</th>
              <th>Time of the Event</th>
              <th>Name of the Event</th>
              <th>Name of Attendee(s)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>07-Apr-25</td>
              <td>19:30 – 23:00</td>
              <td className="event-name">PAW Opening Cocktail</td>
              <td>Ehab Essam, Israa Abdulla</td>
            </tr>
            <tr>
              <td>07-Apr-25</td>
              <td>16:00 – 18:30</td>
              <td className="event-name">PAW In-house Event</td>
              <td>Israa Abdulla</td>
            </tr>
            <tr>
              <td>11-Apr-25</td>
              <td>15:00 – 18:00</td>
              <td className="event-name">PAW Sustainability Event</td>
              <td>Kate Chen</td>
            </tr>
            <tr>
              <td>11-Apr-25</td>
              <td>18:00 – 21:00</td>
              <td className="event-name">PAW Closing Cocktail</td>
              <td>Ehab Essam, Israa Abdulla</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
