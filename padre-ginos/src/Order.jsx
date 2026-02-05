import Pizza from "./Pizza";

export default function Order (){
    const pizzaType = "pepperoni";
    const pizzaSize = "M";
    return(
        <div className="order">
            <h2>
                CreateOrder
                <form>
                    <div>
                        <div>
                            <label htmlFor="pizza-type">Pizza Type</label>
                            <select name="pizza-type" value={pizzaType}>
                                <option value="pepperoni">The Peperroni Pizza</option>
                                <option value="pepperoni">The Cheese Pizza</option>
                                <option value="pepperoni">The Doritos Pizza</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="pizza-size">Pizza Size</label>
                            <div>
                                <span>
                                    <input
                                    checked={pizzaSize === "S"}
                                    type="radio"
                                    name="pizza-size"
                                    value="S"
                                    id="pizza-s"
                                    ></input>
                                <label htmlFor="pizza-s">Small</label>
                                </span>
                                <span>
                                    <input
                                    checked={pizzaSize === "M"}
                                    type="radio"
                                    name="pizza-size"
                                    value="M"
                                    id="pizza-m"
                                    ></input>
                                <label htmlFor="pizza-m">Medium</label>
                                </span>
                                                                <span>
                                    <input
                                    checked={pizzaSize === "L"}
                                    type="radio"
                                    name="pizza-size"
                                    value="L"
                                    id="pizza-l"
                                    ></input>
                                <label htmlFor="pizza-l">Large</label>
                                </span>
                            </div>
                        </div>
                        <button type="submit">Add to Cart</button>
                        <div className="order-pizza">
                            <Pizza
                            name="Pepperoni"
                            description="another pep pizza"
                            image="/public/pizzas/pepperoni.webp"
                            ></Pizza>
                            <p>$13.37</p>
                        </div>
                    </div>
                </form>
            </h2>
        </div>
    )
}