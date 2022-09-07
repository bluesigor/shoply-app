const sortProducts = (value, productsArray) => {

        if (value === 'Sort by title') {
                return productsArray.sort((a, b) => (a.title > b.title ? 1 : -1));
        }

        if (value === 'Sort by price up') {
                return productsArray.sort((a, b) => a.price - b.price);
        }

        if (value === 'Sort by price down') {
                return productsArray.sort((a, b) => b.price - a.price);
        }

};

export default sortProducts;