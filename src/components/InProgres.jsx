import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { updateData } from "../services/update";
import { getOne } from "./../services/get.js";
import { useEffect, useState } from "react";




function InProgress({ user }) {
  const statuses = [0, 50, 100];
  const labels = ["To Do", "In Progress", "Done"];
  const [index, setIndex] = useState(user.progresss ? user.progresss : 0);
  

  const handleClick = () => {
    setIndex((index + 1) % statuses.length);
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        await updateData(user.id, { progresss: statuses[index], status: labels[index] });
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [index]);

  return (
    <>
      <div  className="in-progress">
        <Button
          className="in-progress-btn"
          variant="contained"
          onClick={() => {
            handleClick();
          }}
          sx={{
            backgroundColor: "#ccc",
            "&:hover": { backgroundColor: "#ccc" },
          }}
        >
          {labels[index]}
        </Button>
        <div className="in-progress-bar">
        {statuses[index] == 0 ? (
            <CircularProgress variant='determinate' value={0} sx={{ color: '#ccc' }} />
          ) : (
            <CircularProgress variant='determinate' value={statuses[index]} color='primary' />
          )}
        </div>
      </div>
    </>
  );
}

export default InProgress;
