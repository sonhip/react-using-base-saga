// eslint-disable-next-line import/prefer-default-export
export const isEmptyObject = (obj) => {
    // eslint-disable-next-line no-restricted-syntax
    for (let key in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
};
