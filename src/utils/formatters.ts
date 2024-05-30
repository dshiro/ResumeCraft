export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        return dateString;
    }
    const options = { year: 'numeric', month: 'short' } as Intl.DateTimeFormatOptions;
    return date.toLocaleDateString('en-US', options);
};