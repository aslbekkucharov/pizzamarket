import React, { memo } from 'react';

const Categories = memo(function Categories({ activeItem, items, onClickItem }) {
    const category =
        items &&
        items.map((el, index) => {
            return (
                <li className={activeItem === index ? 'active' : ''} onClick={() => onClickItem(index)} key={`${el}_${index}`}>
                    {el}
                </li>
            );
        });

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => onClickItem(null)}>
                    Все
                </li>
                {category}
            </ul>
        </div>
    );
});

// class Categories extends React.Component {
//     state = {
//         activeItem: null,
//     };

//     onSelectItem = (index) => {
//         this.setState({
//             activeItem: index,
//         });
//     };

//     render() {
//         const { items, onChooseCategory } = this.props;
//         const category = items.map((el, index) => {
//             return (
//                 <li className={this.state.activeItem === index ? 'active' : ''} onClick={() => this.onSelectItem(index)} key={`${el}_${index}`}>
//                     {el}
//                 </li>
//             );
//         });

//         return (
//             <div className="categories">
//                 <ul>{category}</ul>
//             </div>
//         );
//     }
// }

export default Categories;
