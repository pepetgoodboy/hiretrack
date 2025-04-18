export default function TableJobs() {
  return (
    <div className="flex flex-col w-full mx-auto">
      <div className="-m-1.5 overflow-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border border-gray-200 rounded-lg overflow-auto">
            <table className="min-w-full divide-y divide-neutral-700">
              <thead className="bg-black text-white">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-sm font-medium"
                  >
                    No.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-sm font-medium"
                  >
                    Company
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-sm font-medium"
                  >
                    Position
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-sm font-medium"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-sm font-medium"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-sm font-medium"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">1</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    Google
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    Software Engineer
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    Applied
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm capitalize">
                    27 Jan 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm capitalize">
                    Edit
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">1</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    Google
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    Software Engineer
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    Applied
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm capitalize">
                    27 Jan 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm capitalize">
                    Edit
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* {hasMore && data.length > 0 && (
            <div className="text-center mt-4">
              <button
                onClick={handleLoadMore}
                className="py-2 px-4 bg-[#5046E4] hover:bg-[#453bcf] text-white font-medium rounded-md text-sm"
              >
                Load More
              </button>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
