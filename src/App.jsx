import Button from "./Components/Sum";

function App() {
  return (
    <main>
      <h1>JSDoc</h1>
      {/* <Sum a={20} b={30} /> */}
      <div className="flex flex-wrap gap-5">
        <Button variant="light" onClick={() => alert("Light diklik")}>
          Light
        </Button>
        <Button variant="Dark" onClick={() => alert("Dark diklik")}>
          Dark
        </Button>
      </div>
      <Button className="w-full">Simpan</Button>
    </main>
  );
}

export default App;
