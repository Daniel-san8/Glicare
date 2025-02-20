import Image from 'next/image'
import Button from './ui/button'

export default function Header() {
  return (
    <header>
      <nav className="bg-primary h-24 flex justify-between items-center p-4 lg:h-28 lg:p-10 ">
        <div className='flex gap-4 items-center text-black'>
          <Image 
            src="/images/icons/logo-glicare.svg"
            alt="logo" 
            width={44} 
            height={44} />
          <p className='font-roboto font-semibold text-4xl'>Glicare</p>
        </div>
        <button className='w-5 h-4 lg:hidden' aria-label="Abrir menu">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="2" fill="#1C1C1C"/>
            <rect y="14" width="20" height="2" fill="#1C1C1C"/>
            <rect y="7" width="20" height="2" fill="#1C1C1C"/>
          </svg>
        </button>
        <ul className='hidden lg:flex justify-around text-textColor gap-12 2xl:gap-24 font-inter font-medium text-base list-none'> 
          <li><a href="#app">Nosso aplicativo</a></li>
          <li><a href="#depoimentos">Depoimentos</a></li>
          <li><a href="#sobre">Sobre diabetes</a></li>
          <li><a href="#contatos">Contatos</a></li>
          <li><a href="#quem-somos">Quem somos</a></li>
        </ul>
        <div className='hidden lg:flex gap-4'>
          <Button 
            color='bg-secondary'
            font='font-inter'
            weight='font-semibold'
            width="w-40"
            height="h-12">
            Baixe o Glicare
          </Button>
        </div>
      </nav>
    </header>
  )
}
