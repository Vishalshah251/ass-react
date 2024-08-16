function List_view() {
    const items = [
        {
            "name": "John Doe",
            "description": "A software engineer with 10 years of experience in web development."
        },
        {
            "name": "Jane Smith",
            "description": "A data scientist specializing in machine learning and AI."
        },
        {
            "name": "Alice Johnson",
            "description": "A project manager with expertise in agile methodologies and team leadership."
        },
        {
            "name": "Bob Brown",
            "description": "A graphic designer with a keen eye for detail and creativity."
        },
        {
            "name": "Charlie Davis",
            "description": "A marketing specialist with a background in digital marketing and SEO."
        }
    ]
    return (
        <div>
            {items.map((val, index) => (
                <ul key={index}>
                    <li>
                        <div>
                            {val.name} <br />
                            {val.description}
                        </div>
                    </li>
                </ul>

            ))}
        </div>

    )
}
export default List_view;