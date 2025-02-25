interface IDropDown {
    title: string;
    description?: string;
}

const descriptionMock = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laboriosam modi accusantium, obcaecati unde repellat in porro nulla cumque quam, accusamus mollitia quia eveniet aut saepe. Nisi reiciendis voluptatibus eum! Fugiat cum optio minus. Sequi omnis quaerat voluptas fugit vero, quod placeat. Nisi tenetur ratione fuga deserunt, delectus molestiae inventore? Quibusdam, doloremque consequatur dolore repudiandae magni adipisci ab eius voluptatum. A deserunt ab consequatur et fugit nemo maxime ut ullam deleniti nostrum dignissimos, tempore dolores vero earum voluptatem expedita quos accusantium, animi iusto molestiae iste itaque. Libero molestiae officiis reprehenderit!"

export default function DropDown ({ title, description = descriptionMock }: IDropDown) {

    return (
        <div>
            <span>{ title }</span>
            <p>{ description }</p>
        </div>
    )
}