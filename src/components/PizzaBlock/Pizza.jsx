import React, { useState } from 'react';
import Button from '../Button';

function Pizza({ id, imageUrl, name, types, sizes, price, onAddPizza, onCartItemsCount }) {
    const pizzaTypes = ['тонкое', 'традиционное'];
    const pizzaSizes = [26, 30, 40];
    const [activeType, setActiveType] = useState(types[0]);
    const [activeSize, setActiveSize] = useState(sizes[0]);

    const onSelectType = (arg) => {
        setActiveType(arg);
    };
    const onSelectSize = (arg) => {
        setActiveSize(arg);
    };
    const onClickAddPizza = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            size: activeSize,
            type: pizzaTypes[activeType],
        };
        onAddPizza(obj);
    };

    const pizzaType = pizzaTypes.map((type, index) => {
        return (
            <li key={type} onClick={() => onSelectType(index)} className={`${activeType === index ? 'active' : ''} ${!types.includes(index) ? 'disabled' : ''}`}>
                {type}
            </li>
        );
    });

    const pizzaSize = pizzaSizes.map((size, index) => {
        return (
            <li key={size} onClick={() => onSelectSize(size)} className={`${activeSize === size ? 'active' : ''} ${!sizes.includes(size) ? 'disabled' : ''}`}>
                {size} см.
            </li>
        );
    });

    return (
        <div className="pizza-block">
            <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>{pizzaType}</ul>
                <ul>{pizzaSize}</ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <Button className="button--add" onClick={onClickAddPizza} outline>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white" />
                    </svg>
                    <span>Добавить</span>
                    {onCartItemsCount && <i>{onCartItemsCount}</i>}
                </Button>
            </div>
        </div>
    );
}

export default Pizza;
