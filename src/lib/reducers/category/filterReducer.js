const createEmptyFilter = () => ({
    name: "",
    slug: "",
    type: "",
    description: "",
    options: [],
});
export const filtersReducer = (filters, action) => {
    switch (action.type) {
        case "filters/add": {
            return [...filters, createEmptyFilter()];
        }
        case "filters/remove": {
            return filters.filter((_, index) => index !== action.payload.index);
        }
        case "filters/fieldChange": {
            return filters.map((filter, index) =>index === action.payload.index? {...filter,[action.payload.field]: action.payload.value,}: filter,
            );
        }
        case "filters/optionsChange": {
            return filters.map((filter, index) =>index === action.payload.index? {...filter,options: action.payload.options,}: filter,
            );
        }
        case "filters/set": {
            return Array.isArray(action.payload) ? action.payload : [];
        }
        case "filters/reset": {
            return [];
        }
        default: {
            return filters;
        }
    }
};