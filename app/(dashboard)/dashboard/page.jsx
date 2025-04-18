import TableJobs from "@/app/components/table/TableJobs";
import { requireAuth } from "@/lib/auth";
import { signOutAction } from "@/app/actions";

export default async function Dashboard() {
  const user = await requireAuth();

  return (
    <div className="px-12 py-10">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <form action={signOutAction}>
            <button
              type="submit"
              className="px-6 py-2 rounded-[20px] bg-black hover:bg-black/90 cursor-pointer text-white font-medium"
            >
              Logout
            </button>
          </form>
        </div>
        <p>
          Selamat datang, <span className="font-semibold">{user.fullname}</span>
        </p>
        <h2 className="text-2xl font-semibold">My Applicant</h2>
        <TableJobs />
      </div>
    </div>
  );
}
