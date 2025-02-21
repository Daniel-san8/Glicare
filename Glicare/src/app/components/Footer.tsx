import IconGlicare from "../../../public/svg/IconGlicare";
import IconNameGlicare from "../../../public/svg/IconNameGlicare";

export default function Footer() {
    return <footer className="bg-[#4568FC] text-[#F5F5F5] pl-6 lg:grid lg:grid-cols-2 lg:grid-rows-[100px 50px 100px] lg:pl-16">
        <div className="flex items-center gap-x-5 pt-9 pb-14 lg:pb-0 lg:pt-0 lg:col-span-1 lg:max-h-14 lg:self-center">
            <IconGlicare />
            <IconNameGlicare />
        </div>

        <ul className="flex flex-col gap-y-5 pb-16 font-medium max-w-40 lg:col-span-1 lg:row-span-2 lg:justify-self-center lg:pt-40">
            <li className="cursor-pointer">Nosso aplicativo</li>
            <li className="cursor-pointer">Depoimentos</li>
            <li className="cursor-pointer">Sobre diabetes</li>
            <li className="cursor-pointer">Contatos</li>
            <li className="cursor-pointer">Quem somos</li>
        </ul>

        <p className="pr-6 pb-10 lg:col-span-1 lg:pb-0 lg:pr-20 lg:row-span-1">
            O Glicare é um aplicativo dedicado à pacientes de diabetes do tipo 2 e médicos, nutricionistas e demais profissionais da saúde que desejam maior simplicidade, praticidade e facilidade no acompanhamento, controle e evolução da doença e sintomas.
        </p>

        <p className="pb-24 lg:col-span-2 lg:pb-11">2025 © Glicare</p>
    </footer>
}