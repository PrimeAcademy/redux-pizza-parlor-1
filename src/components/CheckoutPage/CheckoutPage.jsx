import { useSelector } from "react-redux";

export default function CheckoutPage() {
  const orderData = useSelector((store) => store.orderReducer);
}
