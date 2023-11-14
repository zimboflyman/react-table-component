"use client"; // This is a client component
import useFetchData from "@/hooks/useFetchData";
import InvoiceTable from "@/components/InvoiceTable";

export default function Home() {
  const { data, error, loading } = useFetchData("invoices.json");
  //headers need to match data api data
  const headers = [
    "Id",
    "UniqueReference",
    "CurrencyCode",
    "OpeningValue",
    "IssueDate",
    "DueDate",
    "ClosedDate",
    "RemainingBalance",
    "Cancelled",
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Invoice table component
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Tech test
          </p>
        </div>
      </div>

      {loading && <h2>Loading Users...</h2>}
      {error && <h2>{error}</h2>}
      {data !== null ? (
        <InvoiceTable headers={headers} invoiceData={data}></InvoiceTable>
      ) : (
        <h3>invoices unavailable</h3>
      )}
    </main>
  );
}
