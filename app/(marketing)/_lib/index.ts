export const formatPrice = (
    price: number,
    locale: string = "en-PH"
): string => {
    return new Intl.NumberFormat(locale).format(price);
};
