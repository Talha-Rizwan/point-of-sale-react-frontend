import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { MODAL_STYLE } from "../../constants";

const DeleteProductModal = ({ productDetails, setProducts }) => {
  const dispatch = useDispatch();

  const deleteProduct = (items) => {
    dispatch({ type: "deleteProduct", data: items });
  };

  const [open, setOpen] = useState(false);

  const handleOpen = (event) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setOpen(false);
  };

  const handleDelete = (event) => {
    setProducts((prev) => {
      const updatedProducts = prev.filter(
        (product) => product.id !== productDetails.id
      );
      deleteProduct(updatedProducts);
      return updatedProducts;
    });
    handleClose(event);
  };

  return (
    <div className="flex justify-center m-2">
      <Button onClick={handleOpen}>Delete</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <Box sx={MODAL_STYLE}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are You Sure To Delete?
          </Typography>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold p-3 rounded"
          >
            Yes
          </button>
        </Box>
      </Modal>
    </div>
  );
};

DeleteProductModal.propTypes = {
  productDetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  setProducts: PropTypes.func.isRequired,
};

export default DeleteProductModal;
