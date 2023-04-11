import React, {useState} from "react";
import OrderForm from "./components/OrderForm";
import OrderDetails from './components/OrderDetails'

function App() {
  const [usersList, setUsersList] = useState([]);

  const addCustomerHandler = (cId, cPrice, cDish, cTable) => {
    setUsersList((prev) => {
      return [
        ...prev,
        { id: cId, price: cPrice, dish: cDish, table: cTable },
      ];
    });
  };

  return (
    <React.Fragment>
      <OrderForm addToBill={addCustomerHandler} />
      <OrderDetails customers ={usersList} />
    </React.Fragment>
  ) 
}

export default App;
