export default function InvoiceTable({ invoiceData }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Ref</th>
            <th>Currency</th>
            <th>Date</th>
            <th>Value</th>
            <th>Balance</th>
            <th>Due</th>
            <th>Closed</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.map(
            ({
              id,
              UniqueReference,
              CurrencyCode,
              IssueDate,
              OpeningValue,
              RemainingBalance,
              DueDate,
              ClosedDate,
            }) => (
              <tr key={UniqueReference}>
                <td>
                  <p>{id}</p>
                </td>
                <td>
                  <p>{UniqueReference}</p>
                </td>
                <td>
                  <p>{CurrencyCode}</p>
                </td>
                <td>
                  <p>{IssueDate}</p>
                </td>
                <td>
                  <p>{OpeningValue}</p>
                </td>
                <td>
                  <p>{RemainingBalance}</p>
                </td>
                <td>
                  <p>{DueDate}</p>
                </td>
                <td>
                  <p>{ClosedDate}</p>
                </td>
              </tr>
            )
          )}
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
