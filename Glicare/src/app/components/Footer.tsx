import IconGlicare from "../../../public/svg/IconGlicare";
import IconNameGlicare from "../../../public/svg/IconNameGlicare";

export default function Footer() {
    return <footer className="bg-[#4568FC]">
        <div className="flex items-center gap-x-5 text-[#F5F5F5] pt-9 pl-6 pb-14">
            <IconGlicare />
            <IconNameGlicare />
        </div>
    </footer>
}