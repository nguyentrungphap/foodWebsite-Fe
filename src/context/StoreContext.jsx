import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId) => {
    // tim food item trong food list de lam show ra cart UI
    // tạo 1 cái biến để lấy cái item với id bằng với id truyền vào
    const foodItem = food_list.find((food) => food._id === itemId);
    //lấy vị trí của item mà có id bằng id truyền vào
    const itemCartIndex = cartItems.findIndex((food) => food.id === itemId);
    // kiếm tra coi có tồn tại không
    if (itemCartIndex === -1) {
      // add to card
      // nếu không có thì sẽ set cartItems bằng return lại cái phần ko sửa và thêm id quatity, các thông tin đã tìm ở trên
      setCartItems([
        ...cartItems,
        { id: `${itemId}`, quantity: 1, ...foodItem },
      ]);
      // localStorage.setItem("Cart",JSON.stringify(cartItems))
      // const local = localStorage.getItem("Cart")
      // console.log({local});
    }
    //nếu có
    else {
      // edit cartItem from cart
      // tạo 1 biết để clone và custom lại array
      const newCartItems = cartItems.map((cartItem) => {
        //kiểm tra nếu id bằng id truyền vào
        if (cartItem.id === itemId) {
          // if cart is exist from cart => add quantity 1 unit
          //return lạ các phần tử không custom và overiew quantity lên 1
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        // else return cartItem
        // return lại cartItem
        return cartItem;
        
      });
      //set lại cartItems
      setCartItems(newCartItems);
      // localStorage.setItem("Cart",JSON.stringify(cartItems))

    }
  }
  const removeFromCart = (itemId) => {
    // Tạo 1 biến có giá trị bằng vị trí có id bằng id truyền vào
    const cartItem = cartItems.find((cartItem) => cartItem.id === itemId);
    //kiểm tra xem có tồn tại không
    if (!!cartItem) {
      //kiểm tra xem quantity có lớn hơn 1 không
      if (cartItem.quantity > 1) {
        // tạo 1 biến để clone custom lại 1 cái mảng
        const newCartItems = cartItems.map((cartItem) => {
          // kiểm tra xem cái id có bằng id truyền vào không
          if (cartItem.id === itemId) {
            // tao ra 1 obj return lại cái thành phần trước và overiew lại quantity
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          // nếu không có thì return lại cartItem
          return cartItem;
        });
        // set lại cartItems
        setCartItems(newCartItems);
      }
      // kiểm tra nếu quatity < hoặc = 1
      else {
        //tạo 1 biến bắng kết quả của việc lấy tất cả các phần tử mà có id khác với id truyền vào
        const newCartItems = cartItems.filter(
          (cartItem) => cartItem.id !== itemId
        );
        //  set lại cartItems
        setCartItems(newCartItems);
      }
    }
  };
  useEffect
  localStorage.setItem("Cart",JSON.stringify(cartItems))
  const getTotalCartAmount = () => {
    const totalCart = cartItems.reduce((total, item, index, array) => {
      if (index < array.length) {
        total += item.price + item.quantity;
        return total
      } else return total;
    }, 0);
    return totalCart;
  };

  const contextValue = {
    food_list,
    setCartItems,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
