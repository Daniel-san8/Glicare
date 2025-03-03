export default interface IDropdown {
    question: string;
    response: string;
    id: number;
}

export interface IDropDownUI {
    title: string;
    description: string;
    background: 'primary-gray' | 'white';
}