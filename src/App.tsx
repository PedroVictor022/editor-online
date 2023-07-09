import { Editor } from "./components/editor";

function App() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="bg-zinc-800 w-[1100px] grid grid-cols-[16rem_1fr] mx-auto overflow-hidden rounded-xl min-h-[720px] shadow-lg border-black/60">
        <aside className="bg-zinc-900 border-r border-r-zinc-800 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-300 hover:bg-red-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 hover:bg-yellow-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 hover:bg-green-400" />
          </div>
        </aside>
        <main className="p-4">
          <div className="max-w-[700px] mx-auto pt-16">
            <Editor />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
