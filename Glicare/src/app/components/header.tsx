import Button from "@/app/components/ui/button";
import NavigationMenu from "../../../public/svg/navigation-menu";
import LogoGlicare from "../../../public/svg/icon-glicare-dark";

export default function Header() {
  return (
    <header>
      <nav className="bg-primary-gray h-24 flex justify-between items-center p-4 lg:h-28 lg:p-10">
        <div className="flex gap-4 items-center text-black">
          <LogoGlicare />
          <p className="font-roboto font-semibold text-4xl">Glicare</p>
        </div>
        <Button classAttributes="lg:hidden bg-transparent">
          <NavigationMenu />
        </Button>
        <ul className="hidden lg:flex justify-around text-gray gap-12 2xl:gap-24 font-inter font-medium text-base list-none">
          <li>
            <a href="#app">Nosso aplicativo</a>
          </li>
          <li>
            <a href="#depoimentos">Depoimentos</a>
          </li>
          <li>
            <a href="#sobre">Sobre diabetes</a>
          </li>
          <li>
            <a href="#contatos">Contatos</a>
          </li>
          <li>
            <a href="#quem-somos">Quem somos</a>
          </li>
        </ul>
        <div className="hidden lg:flex gap-4">
          <Button classAttributes="w-40 h-12 bg-secondary text-white font-inter rounded-lg">
            Baixe o Glicare
          </Button>
        </div>
      </nav>
    </header>
  );
}
