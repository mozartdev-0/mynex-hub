import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-6 font-sans">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-6xl font-extrabold tracking-tighter sm:text-7xl mb-4">
          MY<span className="text-blue-500">NEX</span>
        </h1>
        <p className="text-gray-400 max-w-[600px] text-lg mb-8">
          A nova casa do desenvolvimento Open Source.
        </p>
        
        <div className="flex gap-4">
          <a 
            href="https://github.com/mozartdev-0/mynex-hub" 
            target="_blank"
            className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full max-w-4xl">
        <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50">
          <h3 className="text-xl font-bold mb-2 text-blue-400"># Segurança</h3>
          <p className="text-gray-400 text-sm">Foco em ferramentas de CLI e proteção de pacotes.</p>
        </div>
        <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50">
          <h3 className="text-xl font-bold mb-2 text-blue-400"># OpenSource</h3>
          <p className="text-gray-400 text-sm">Código aberto para a comunidade.</p>
        </div>
        <div className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50">
          <h3 className="text-xl font-bold mb-2 text-blue-400"># ZorinOS</h3>
          <p className="text-gray-400 text-sm">Desenvolvido com foco em performance e elegância.</p>
        </div>
      </div>
    </main>
  );
}
