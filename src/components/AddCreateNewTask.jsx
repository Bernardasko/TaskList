import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import ModalClose from "@mui/joy/ModalClose";
import ButtonGroup from "@mui/joy/ButtonGroup";
import { useState } from "react";
import { postData } from "../services/post";
import { useForm } from "react-hook-form";

function AddCreateNewTask({ setUpdate }) {
  const [open, setOpen] = useState(false);
  

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    
  } = useForm({
    defaultValues: {
      title: "",
      priority: "",
      status: "", 
      progresss: ""
    },
  });

  const formSubmitHandler = async (data) => {
    try {
      await postData({
        ...data,
      });
      setUpdate((update) => update + 1);
      reset({ title: "", priority: "", });
      setOpen(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <React.Fragment>
        <Button
          variant="solid"
          color="success"
          startDecorator={<Add />}
          onClick={() => setOpen(true)}
        >
          Add task
        </Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog style={{ width: 500 }}>
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <DialogTitle>Add task</DialogTitle>
            <form onSubmit={handleSubmit(formSubmitHandler)}>
              <Stack spacing={2}>
                <FormControl>
                  <FormLabel>Task</FormLabel>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Type your task here...."
                    autoFocus
                    required
                    {...register("title", { required: "Task is required" })}

                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Priority</FormLabel>
                </FormControl>
                <ButtonGroup spacing="0.5rem" aria-label="spacing button group">
                  <Button
                    id="priority"
                    variant="outlined"
                    color="success"
                    {...register("priority", { value: "High", required: "Priority is required" })}
                    onClick={() => setValue("priority", "High")}
                  >
                    High
                  </Button>
                  <Button
                   id="priority"
                    variant="outlined"
                    color="warning"
                    {...register("priority", { value: "Medium", required: "Priority is required" })}
                    error={errors.title}
                    onClick={() => setValue("priority", "Medium")}
                  >
                    Medium
                  </Button>
                  <Button
                   id="priority"
                    variant="outlined"
                    color="danger"
                    {...register("priority", { value: "Low", required: "Priority is required" })}
                    error={errors.title}
                    onClick={() => setValue("priority", "Low")}
                  >
                    Low
                  </Button>
                </ButtonGroup>

                <ButtonGroup className="add">
                  <Button variant="solid" color="warning" type="submit">
                    Add
                  </Button>
                </ButtonGroup>
              </Stack>
            </form>
          </ModalDialog>
        </Modal>
      </React.Fragment>
    </>
  );
}

export default AddCreateNewTask;
