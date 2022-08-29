export const validateProduct = (product) => {
    let valid = false;

    if (!product.title || product.price <= 0 || product.rating.count <= 0) {
        valid = false;
    }

    if (product.title && product.price > 0 && product.rating.count > 0) {
        valid = true;
    }

    return valid;
};