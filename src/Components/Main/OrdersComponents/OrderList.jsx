import { TableBody } from "@mui/material"
import { OrderItem } from "./OrderItem"
import { PropTypes } from "prop-types"

export const OrderList = ({ orders }) => {
    
  return (
    <TableBody>
      {orders.map((order) =>{
        return <OrderItem key={order.orderId} order={order} />
      })}
    </TableBody>
  )
}


OrderList.propTypes = {
    orders: PropTypes.array,
}