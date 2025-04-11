import { requireAuth } from "../../lib/auth";

export default async function Dashboard() {
  const user = await requireAuth();

  return (
    <div>
      <h1>Ini Dashboard</h1>
      <p>Selamat datang, {user.name}</p>
    </div>
  );
}
