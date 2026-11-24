function Food(){

    const food1 = "Tacos";
    const food2 = "Spaghetti";

    return(
        <ul>
            <li>{"Soup"}</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food;