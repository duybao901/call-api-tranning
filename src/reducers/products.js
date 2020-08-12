var initialState = [
    {
        id: "1",
        label: "1",
        name: "IPhone 8 Plus",
        price: "12.400.000",
        status: true,
    },
    {
        id: "2",
        label: "2",
        name: "Samsung Galaxy S10 Plus",
        price: "16.000.000",
        status: false,
    },
    {
        id: "3",
        label: "3",
        name: "Xiaome Redme Note 4s",
        price: "10.400.000",
        status: true,
    }
]

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }   
}

export default myReducer