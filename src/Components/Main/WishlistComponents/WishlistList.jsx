import { TableBody } from "@mui/material";
import { WishlistItem } from "./WishlistItem";
import { PropTypes } from "prop-types";


export const WishlistList = ({ wishlistList }) => {
  return (
    <TableBody>
      {wishlistList?.map((item) => {
        return <WishlistItem key={item.id} wishlist={item} />;
      })}
    </TableBody>
  );
};

WishlistList.propTypes = {
  wishlistList: PropTypes.array,
};
