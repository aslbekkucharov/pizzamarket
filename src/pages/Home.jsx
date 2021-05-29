import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Categories, SortPopUp } from '../components';
import LoadingPlaceholder from '../components/PizzaBlock/LoadingPlaceholder';
import Pizza from '../components/PizzaBlock/Pizza';
import { setAddPizzaToCart } from '../redux/actions/cart';
import { setCategory, setSortType } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizza';

function Home() {
    const dispatch = useDispatch();
    const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
    const { category, sortType } = useSelector(({ filters }) => filters);
    const cartItems = useSelector(({ cart }) => cart.items);
    useEffect(() => {
        dispatch(fetchPizzas(category, sortType));
    }, [category, sortType]);
    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onClickSortOption = useCallback((arg) => {
        dispatch(setSortType(arg));
    }, []);
    const addPizzaToCart = (obj) => {
        dispatch(setAddPizzaToCart(obj));
    };
    const pizzaComponents = items.map((data) => {
        return <Pizza onAddPizza={addPizzaToCart} onCartItemsCount={cartItems[data.id] && cartItems[data.id].items.length} key={data.id} {...data} />;
    });

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeItem={category} onClickItem={onSelectCategory} items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']} />
                <SortPopUp
                    activeSortType={sortType.type}
                    sortOptions={[
                        { name: 'популярности', type: 'rating', order: 'desc' },
                        { name: 'цене', type: 'price', order: 'desc' },
                        { name: 'алфавиту', type: 'name', order: 'asc' },
                    ]}
                    onClickSortOption={onClickSortOption}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? pizzaComponents
                    : Array(12)
                          .fill(0)
                          .map((_, index) => <LoadingPlaceholder key={index} />)}
            </div>
        </div>
    );
}

export default Home;
