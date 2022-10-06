export const getCurrencySymbol = countryCode => {
    const currencies = {
        us: '$',
    };
     return currencies[countryCode];
};

export const extractFormData = form => Array
    .from(form.elements)
    .reduce((acc, { id, value }) => ({ ...acc, [id]: value}), {});
    