import Link from 'next/link';

export function Menu() {
  return (
    <header className="w-full h-[100px] sticky top-0 backdrop-blur-md bg-[#ddd1bf96] shadow-[0_25px_20px_-20px_#d1c6b596] z-[100000]">
      <nav className="w-full h-full">
        <ul className="w-full h-full flex justify-center items-center gap-[4em]">
          <li className="list-none text-[1.2em] font-bold cursor-pointer">
            <Link
              href="/"
              className="text-black relative after:content-[''] after:absolute after:left-0 after:top-[110%] after:w-1/2 after:h-[2px] after:bg-[#EA9D2B] after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
          </li>
          <li className="list-none text-[1.2em] font-bold cursor-pointer">
            <Link
              href="/about"
              className="text-black relative after:content-[''] after:absolute after:left-0 after:top-[110%] after:w-1/2 after:h-[2px] after:bg-[#EA9D2B] after:transition-all after:duration-300 hover:after:w-full"
            >
              Sobre Nós
            </Link>
          </li>
          <li className="list-none text-[1.2em] font-bold cursor-pointer">
            <Link
              href="/playgrounds"
              className="text-black relative after:content-[''] after:absolute after:left-0 after:top-[110%] after:w-1/2 after:h-[2px] after:bg-[#EA9D2B] after:transition-all after:duration-300 hover:after:w-full"
            >
              Playgrounds
            </Link>
          </li>
          <li className="list-none text-[1.2em] font-bold cursor-pointer">
            <Link
              href="#"
              className="text-black relative after:content-[''] after:absolute after:left-0 after:top-[110%] after:w-1/2 after:h-[2px] after:bg-[#EA9D2B] after:transition-all after:duration-300 hover:after:w-full"
            >
              Faça um Orçamento
            </Link>
          </li>
          <li className="list-none text-[1.2em] font-bold cursor-pointer">
            <Link
              href="#"
              className="text-black relative after:content-[''] after:absolute after:left-0 after:top-[110%] after:w-1/2 after:h-[2px] after:bg-[#EA9D2B] after:transition-all after:duration-300 hover:after:w-full"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
