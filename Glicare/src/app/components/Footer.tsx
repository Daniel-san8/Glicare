import IconGlicare from "../../../public/svg/IconGlicare";
import IconNameGlicare from "../../../public/svg/IconNameGlicare";

export default function Footer() {
    return <footer className="bg-[#4568FC] text-[#F5F5F5] ">
        <div className="flex items-center gap-x-5 pt-9 pl-6 pb-14">
            <IconGlicare />
            <IconNameGlicare />
        </div>

        <ul className="pl-6 flex flex-col gap-y-5 pb-16 font-medium max-w-40">
            <li className="cursor-pointer">Nosso aplicativo</li>
            <li className="cursor-pointer">Depoimentos</li>
            <li className="cursor-pointer">Sobre diabetes</li>
            <li className="cursor-pointer">Contatos</li>
            <li className="cursor-pointer">Quem somos</li>
        </ul>

        <p className="px-6 pb-10">
            O Glicare é um aplicativo dedicado à pacientes de diabetes do tipo 2 e médicos, nutricionistas e demais profissionais da saúde que desejam maior simplicidade, praticidade e facilidade no acompanhamento, controle e evolução da doença e sintomas.
        </p>

        <p className="pl-6 pb-24">2025 © Glicare</p>
    </footer>
}