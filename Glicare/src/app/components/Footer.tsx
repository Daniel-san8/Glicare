import IconGlicare from "../../../public/svg/icon-glicare-light";

export default function Footer() {
    return <footer className="bg-blue-500 text-primary-gray pl-6 lg:grid lg:grid-cols-2 lg:grid-rows-[100px 50px 100px] lg:pl-16">
        <div className="flex items-center gap-x-5 pt-9 pb-14 lg:pb-0 lg:pt-0 lg:col-span-1 lg:max-h-14 lg:self-center">
            <IconGlicare />
            <p className="font-roboto font-semibold text-4xl lg:text-5xl">Glicare</p>
        </div>

        <ul className="flex flex-col gap-y-5 pb-16 font-medium max-w-40 lg:col-span-1 lg:row-span-2 lg:justify-self-center lg:pt-40">
            <li><a href="">Nosso aplicativo</a></li>
            <li><a href="">Depoimentos</a></li>
            <li><a href="">Sobre diabetes</a></li>
            <li><a href="">Contatos</a></li>
            <li><a href="">Quem somos</a></li>
        </ul>

        <p className="pr-6 pb-10 lg:col-span-1 lg:pb-0 lg:pr-20 lg:row-span-1">
            O Glicare é um aplicativo dedicado à pacientes de diabetes do tipo 2 e médicos, nutricionistas e demais profissionais da saúde que desejam maior simplicidade, praticidade e facilidade no acompanhamento, controle e evolução da doença e sintomas.
        </p>

        <p className="pb-24 lg:col-span-2 lg:pb-11">2025 © Glicare</p>
    </footer>
}