import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";

import ProductForm from "./ProductForm";
import { MODAL_STYLE } from "../../constants";

const ProductModal = ({ name, productDetails, setProducts }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex justify-center m-2">
      <Button onClick={handleOpen}>{name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={MODAL_STYLE}>
          <Typography id="modal-modal-title" ßvariant="h6" component="h2">
            {name}
          </Typography>
          <ProductForm
            name={name}
            productDetails={productDetails}
            setProducts={setProducts}
            closeModal={handleClose}
          />
        </Box>
      </Modal>
    </div>
  );
};

ProductModal.propTypes = {
  setProducts: PropTypes.func.isRequired,
  productDetails: PropTypes.object,
  name: PropTypes.string.isRequired,
};

export default ProductModal;
