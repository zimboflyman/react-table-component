export default function InvoiceTable({ headers, invoiceData }) {
  const isISODate = (val) => {
    const iso8601Pattern =
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?([+-]\d{2}:\d{2})?$/;
    // Check if the value matches the pattern
    return iso8601Pattern.test(val);
  };

  return (
    <section className="container mx-auto my-3">
      <div>
        <table className="min-w-full divide-y divide-gray-200 divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-400"
                >
                  <p className="flex items-center gap-x-3">{header}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-700 bg-gray-900">
            {invoiceData.map((row) => {
              return (
                <tr key={row.Id}>
                  {Object.values(headers).map((header, index) => {
                    let val = row[header];

                    if (isISODate(val)) {
                      const date = new Date(val);
                      val =
                        date.getDate() +
                        "/" +
                        (date.getMonth() + 1) +
                        "/" +
                        date.getFullYear();
                    }

                    if (val === true) {
                      val = "Yes";
                    }

                    return (
                      <td
                        key={index}
                        // conditionally align text right if its a number
                        className={`px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap ${
                          typeof val === "number" ? "text-right" : ""
                        }`}
                      >
                        <p className="inline-flex items-center gap-x-3">
                          {val}
                        </p>
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
    </section>
  );
}
