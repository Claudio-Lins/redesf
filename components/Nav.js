import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="bg-white z-30 shadow-md justify-center top-0 fixed inset-x-0">
      <div className="h-10 bg-yellow-600 flex mb-2 px-4">
        <div className="flex container mx-auto justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex cursor-pointer hover:animate-bounce">
              <Link href="/">
                <Image
                  src="/social-network/instagram-icon.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
            <div className="flex cursor-pointer hover:animate-bounce">
              <Link href="/">
                <Image
                  src="/social-network/youtube-icon.svg"
                  alt="Youtube"
                  width={23}
                  height={23}
                />
              </Link>
            </div>
            <div className="flex cursor-pointer hover:animate-bounce">
              <Link href="/">
                <Image
                  src="/social-network/facebook-icon.svg"
                  alt="Facebook"
                  width={18}
                  height={18}
                />
              </Link>
            </div>
            <div className="flex cursor-pointer hover:animate-bounce">
              <Link href="/">
                <Image
                  src="/social-network/linkedin-icon.svg"
                  alt="Linkedin"
                  width={18}
                  height={18}
                />
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className='flex space-x-2'>
            <Link href="/">
                <Image
                  src="/social-network/phone-call.svg"
                  alt="Phone Call"
                  width={18}
                  height={18}
                />
              </Link>
              <h3 className='text-gray-50 text-sm tracking-wide'>+351 123 456 789</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl px-4 mx-auto">
        <div className="flex justify-between">
          <div className="flex justify-between items-center space-x-6">
            <div className=' cursor-pointer'>
              <Link href="/">
                <Image
                  src="/Logos/lg-redesf-1280x427.png"
                  alt="Rede Sem Fronteiras"
                  width={256}
                  height={85}
                />
              </Link>
            </div>

            <div className="hidden md:flex space-x-6 justify-around">
              {/* Home */}
              <div className="hover:font-semibold">
                <Link href="/">
                  <a className="hover:text-green-600 flex items-center space-x-1">
                    <h3>Home</h3>
                  </a>
                </Link>
              </div>
              {/*  */}

              {/* Dropdown - Quem Somos */}
              <nav className="relative z-20 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:flex-row">
                <div className="relative group">
                  <button className="flex flex-row text-left hover:font-semibold items-center rounded-lg md:w-full md:inline md:mt-0 md:ml-0 focus:outline-none">
                    <Link href="/quem-somos">
                      <a className="hover:text-green-700 px-4">Quem Somos</a>
                    </Link>
                  </button>
                  <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                    <div className="pt-2 rounded-md shadow-md bg-white w-36">
                      <div className="grid grid-cols-1">
                        <div className="mb-0 py-2 mx-2">
                          <Link href="#">
                            <a className="btnDropdown">Carta de Princípios</a>
                          </Link>
                        </div>

                        <div className="mb-0 py-2 bg-white mx-2">
                          <Link href="/conselho-internacional">
                            <a className="btnDropdown">
                              Conselho Internacional
                            </a>
                          </Link>
                        </div>

                        <div className="mb-0 py-2 bg-white mx-2">
                          <Link href="#">
                            <a className="btnDropdown">Conselho Diretor</a>
                          </Link>
                        </div>

                        <div className="mb-0 py-2 bg-white mx-2">
                          <Link href="#">
                            <a className="btnDropdown">Secretaria Técnica</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              {/*  */}

              {/* Campanhas */}
              <div className="hover:font-semibold">
                <Link href="#">
                  <a className="hover:text-green-500">
                    <h3>Campanhas</h3>
                  </a>
                </Link>
              </div>
              {/*  */}
              {/* Arquivos */}
              <div className=" hover:font-semibold">
                <Link href="#">
                  <a className="hover:text-green-600 flex items-center space-x-1">
                    <h3>Arquivos</h3>
                  </a>
                </Link>
              </div>
              {/*  */}
              {/* Contatos */}
              <div className="hover:font-semibold">
                <Link href="/contact">
                  <a className="hover:text-green-600 flex items-center space-x-1">
                    <h3>Contatos</h3>
                  </a>
                </Link>
              </div>
              {/*  */}
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button id="mobile-menu-button">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Menu Mobile */}
        <div id="mobile-menu" className="hidden md:hidden">
          {/* Home */}
          <div className="text-center">
            <Link href="/">
              <a className="hover:text-green-600">
                <h3>Home</h3>
              </a>
            </Link>
          </div>
          {/*  */}

          <div className="relative group">
            <button className="flex flex-row mx-auto items-center rounded-lg md:w-full md:inline md:mt-0 md:ml-0 focus:outline-none">
              <Link href="/quem-somos">
                <a className="hover:text-green-700 px-4">Quem Somos</a>
              </Link>
            </button>
            <div className="absolute z-10 hidden bg-gray-50 group-hover:block">
              <div className="pt-2 rounded-md shadow-lg w-52">
                <div className="grid grid-cols-1">
                  <div className="hover:text-green-700 mb-0 py-2 ml-4">
                    <Link href="#">
                      <a className="">Carta de Princípios</a>
                    </Link>
                  </div>

                  <div className="hover:text-green-700 mb-0 py-2 ml-4">
                    <Link href="/conselho-internacional">
                      <a className="inline-block">Conselho Internacional</a>
                    </Link>
                  </div>

                  <div className="hover:text-green-700 mb-0 py-2  ml-4">
                    <Link href="#">
                      <a className="inline-block">Conselho Diretor</a>
                    </Link>
                  </div>

                  <div className="hover:text-green-700 mb-0 py-2 ml-4">
                    <Link href="#">
                      <a className="inline-block">Secretaria Técnica</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

if (typeof window !== "undefined") {
  const btn = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}
