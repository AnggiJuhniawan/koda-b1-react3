// import { useEffect, useState } from "react";

// import { useRef } from "react";
import Login from "./Components/Login";

// import { filterUsers, getUsers } from "./utils/filterUsers";
// import Button from "./Components/Sum";

function App() {
  // Uncontrolled
  // const emailRef = useRef(null);
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const email = emailRef.current.value;

  //   // alert(`Email : ${email}`);
  //   console.log(`Email : ${email}`);
  //   // <p>Email : {email}</p>
  // }

  // Controlled

  // =========================================
  // const [users, setUsers] = useState([]);
  // const [search, setSearch] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   let ignore = false;
  //   async function loadUsers() {
  //     try {
  //       const data = await getUsers();

  //       if (!ignore) {
  //         setUsers(data);
  //       }
  //     } catch (err) {
  //       if (!ignore) {
  //         setError(err instanceof Error ? err.message : "Terjadi Kesalahan");
  //       }
  //     } finally {
  //       if (!ignore) {
  //         setLoading(false);
  //       }
  //     }
  //   }
  //   loadUsers();

  //   return () => {
  //     ignore = true;
  //   };
  // }, []);

  // const filterUser = filterUsers(users, search);
  return (
    <main className="mx-auto max-w-xl p-6">
      {/* Uncontrolled */}
      {/* <h1>Uncontrolled Input</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="email"
          placeholder="Masukkan Email"
          className="rounded-lg border p-3"
        />
        <button
          type="submit"
          className="ml-3 rounded-lg bg-black px-5 py-3 text-white"
        >
          Send
        </button>
      </form> */}
      {/* <p className="">Email: {emailRef}</p> */}

      {/* End Uncontrolled */}

      {/* Controlled */}
      <Login />
      {/* End Controlled */}
      {/* ================================== */}
      {/* <h1 className="mb-4 text-2xl font-bold">Filter Users</h1>

      <input
        className="mb-5 w-full rounded-lg border p-3"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {loading && <p>Loading Users....</p>}
      {error && <p className="text-red-600">{error}</p>}
      {!loading && !error && (
        <>
          {filterUser.length === 0 ? (
            <p className="text-slate-500">Data pengguna tidak ditemukan</p>
          ) : (
            <ul className="space-y-3">
              {filterUser.map((user) => (
                <li key={user.id} className="rounded-lg border p-3">
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-slate-500">{user.email}</p>
                </li>
              ))}
            </ul>
          )}
        </>
      )} */}

      {/* ============================= */}
      {/* <h1>JSDoc</h1> */}
      {/* <Sum a={20} b={30} /> */}
      {/* <div className="flex flex-wrap gap-5">
        <Button variant="light" onClick={() => alert("Light diklik")}>
          Light
        </Button>
        <Button variant="Dark" onClick={() => alert("Dark diklik")}>
          Dark
        </Button>
      </div>
      <Button className="w-full">Simpan</Button> */}
    </main>
  );
}

export default App;
