const items = [
    {
        id: 1,
        name: 'item1',
        children: [
            { id: 11, name: 'item11' },
            { id: 12, name: 'item12' },
        ],
    },
    { id: 2, name: 'item2' },
    {
        id: 3,
        name: 'item3',
        children: [
            { id: 13, name: 'item13' },
            { id: 14, name: 'item14' },
        ],
    },
];

const createFlatArray = (items) => {
    const result = [];

    for (const item of items) {
        const { children, ...rest } = item; // Use destructuring to separate children
        result.push(rest);
        if (children) {
            result.push(...createFlatArray(children));
        }
    }

    return result;
};

const newItems = createFlatArray(items);
console.log(newItems);
