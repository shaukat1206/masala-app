import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppContainer from "./AppContainer";
import AppHeader from "./AppHeader";
import CartContainer from "./CartContainer";
import { useState } from "react";
import Login from "./Login";

const products = [
  {
    _id: 1,
    name: "Masala-1",
    price: 200,
    productImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekBGj0RDFK_f0IgmezbDjwRA4GmjSU0ut1g&usqp=CAU",
  },
  {
    _id: 2,
    name: "Masala-2",
    price: 300,
    productImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOO-39lPkVGBNWgmHPvB4TMWn69m2xPXUig&usqp=CAU",
  },
  {
    _id: 3,
    name: "Masala-3",
    price: 500,
    productImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURWuwLaVdgd9JeteId2RaCmUE6XZ1z-6JEA&usqp=CAU",
  },
  {
    _id: 4,
    name: "Masala-4",
    price: 200,
    productImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJBO2hh0A8VuhfnFg-cuj4MNlhHI1uIRR6og&usqp=CAU",
  },
  {
    _id: 5,
    name: "Masala-5",
    price: 700,
    productImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOBV9zg6XzTRB50mbNs8nQYhYoAeS3kjseg&usqp=CAU",
  },
  {
    _id: 6,
    name: "Masala-6",
    price: 1000,
    productImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zQFhHPK1liNT8qAoV8Ki1UqLz6BSZjjtYA&usqp=CAU",
  },
  {
    _id: 7,
    name: "Masala-7",
    price: 150,
    productImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zQFhHPK1liNT8qAoV8Ki1UqLz6BSZjjtYA&usqp=CAU",
  },
  {
    _id: 8,
    name: "Masala-8",
    price: 560,
    productImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOO-39lPkVGBNWgmHPvB4TMWn69m2xPXUig&usqp=CAU",
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (_id) => {
    if (_id) {
      // setCartItems((currentCartItems) => {return [...currentCartItems , _id]})
      setCartItems([...cartItems, _id]);
    }
  };

  const removeFromCart = (_id) => {
    if (_id) {
      setCartItems(cartItems.filter((eachId) => eachId !== _id));
    }
  };

  return (
    <div className="app">
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            element: (
              <>
                <AppHeader cartItems={cartItems} />
                <AppContainer products={products} addToCart={addToCart} />
              </>
            ),
          },
          {
            path: "/cart",
            element: (
              <>
                <AppHeader cartItems={cartItems} />
                <CartContainer products={products} cartItems={cartItems} />
              </>
            ),
          },
          {
            path: "/login",
            element: (
              <div className="Login_page">
                <Login />
              </div>
            ),
          },
        ])}
      />
    </div>
  );
}

export default App;
