import * as React from 'react';
import Button from '@mui/joy/Button';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DeleteForever from '@mui/icons-material/DeleteForever';
import { deleteData } from '../services/delete';
import { useState } from 'react';
function DeleteDiscard({ user, setUpdate }) {
    const [open, setOpen] = useState(false);
    

    const handleDelete = async (id) => {
        try {
          await deleteData(id);
          setUpdate((update) => update + 1);
          setOpen(false);
        } catch (error) {
          setError(error.message);
        }
    }
  return (
    <React.Fragment>
      <Button
        variant=""
        color="danger"
        endDecorator={<DeleteForever />}
        onClick={() => setOpen(true)}
        sx={{ color: 'red' }}
      >
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogContent>
            Are you sure you want to delete this task?
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'center' }}>
            <Button variant="outlined" color="neutral" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="solid" color="danger" onClick={() =>handleDelete(user.id)}>
              Delete
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}

export default DeleteDiscard;