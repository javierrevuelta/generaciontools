import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="container flex w-80% mx-auto flex-col self-center min-h-[70vh] mt-10 justify-around">
        <h1 className="text-center">Generacion Tools</h1>
        <p className="text-center">Herramientas útiles para tu negocio</p>
      </div>

      <div className="w-80% flex justify-center">
        <div className="w-3/5">
          <p>Item 1</p>
        </div>
        <div className="w-2/5">
          <p>Item 1</p>
        </div>
        <div className="w-2/5">
          <p>Item 1</p>
        </div>
        <div className="w-2/5">
          <p>Item 1</p>
        </div>
      </div>
    </main>
  );
}
