export const getCurrencySymbol = countryCode => {
    const currencies = {
        us: '$',
        ca: '$',
        au: '$',
        gb: '£',
    };
     return currencies[countryCode];
};

export const extractFormData = form => Array
    .from(form.elements)
    .reduce((acc, { id, value }) => ({ ...acc, [id]: value }), {});