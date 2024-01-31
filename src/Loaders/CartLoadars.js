import { getShoppingCart } from "../Utilitis"

const CartLoadersHandle = async()=>{
    const Loaderproducts = await fetch('../../fakeData/products.json')
    const products = await Loaderproducts.json()

    const storedCart = getShoppingCart()
    const savedCart = []
    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        const quantity = storedCart[id]
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct)


    }
    console.log(savedCart)
    return savedCart;
}
export default CartLoadersHandle ;