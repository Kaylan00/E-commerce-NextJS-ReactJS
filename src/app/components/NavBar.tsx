import Link from "next/link";

export function NavBar() {
  return (
    <nav className="bg-customDarkBlue text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <span className="text-2xl font-bold cursor-pointer text-customLightGreen">E-commerce</span>
          </Link>
        </div>
        <div>
          <span className="bg-customYellow text-customDarkBlue font-bold bg-slate-400 px-3 py-1 rounded-full">Oferta Especial!</span>
          
        </div>
      </div>
    </nav>
  );
}