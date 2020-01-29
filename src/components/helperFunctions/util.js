export const getValueAsDate = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        return new Date(value);
    }
    return value;
}