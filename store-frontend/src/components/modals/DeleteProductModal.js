import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DeleteModal( {itemData, setProducts} ) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='flex justify-center m-2'>
      <Button onClick={handleOpen}>Delete</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are You Sure To Delete?
          </Typography>
          <button 
            onClick={() => {
                setProducts((prev) => {
                    const newProducts = prev.filter(
                    (product) => product.id !== itemData.id
                    );
                    return newProducts;
                });
            }}
            className = 'bg-red-500 hover:bg-red-700 text-white font-bold p-3 rounded '
        >
            Yes
        </button>
          </Box>
      </Modal>
    </div>
  );
}
