import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalQuantity: 0
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [view, setView] = useState(0);




    const addToCart = (item, count) => {
        const existingProduct = cart.find(prod => prod.item.index === item.index)
        if (!existingProduct) {
            setView(count);
            setCart(previous => [...previous, { item, count }]);
            setTotalQuantity(previous => previous + count);
            setTotal(previous => previous + (item.price * count));
        }
        else {
            const updateCart = cart.map(prod => {
                if (prod.item.index === item.index) {
                    return { ...prod, count: prod.count + count };
                }
                else { return prod };
            });
            setCart(updateCart);
            const updatedCart = [...updateCart];
            setTotalQuantity(previous => previous + count);
            setTotal(previous => previous + (item.price * count));
            setView(updatedCart.find(prod => prod.item.index === item.index)?.count);


        }
    }


    const deleteToCart = (id) => {
        const productToDelete = cart.find(prod => prod.item.index === id);
        const updateCart = cart.filter(prod => prod.item.index !== id);
        setCart(updateCart);
        setTotalQuantity(prev => prev - productToDelete.count);
        setTotal(prev => prev - (productToDelete.item.price * productToDelete.count));
    }


    const emptyCart = () => {
        setCart([])
        setTotal(0)
        setTotalQuantity(0)
    }


    return (
        <CartContext.Provider value={{ cart, total, totalQuantity, emptyCart, deleteToCart, addToCart, view }}>{children}</CartContext.Provider>
    )
}