interface IDropDown {
    title: string;
    description: string;
}

export default function DropDown ({ title, description }: IDropDown) {
    <div>
        <span>{ title }</span>
        <p>{ description }</p>
    </div>
}