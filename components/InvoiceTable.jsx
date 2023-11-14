export default function InvoiceTable({ headers, invoiceData }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>
                <p>{header}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {invoiceData.map((row) => {
            return (
              <tr key={row.Id}>
                {Object.values(headers).map((header, index) => {
                  let temp = row[header];
                  return (
                    <td key={index}>
                      <p>{row[header]}</p>
                    </td>
                  );
                })}
              </tr>
            );
          })}
          {!invoiceData.length && (
            <tr>
              <td colSpan={4}>No invoices....</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
