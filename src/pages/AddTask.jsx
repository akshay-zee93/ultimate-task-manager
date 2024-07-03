import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { taskAdded, taskUpdate } from "../store/taskSlice";
import Label from "../components/Label";
import TextArea from "../components/TextArea";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import { priorityOptions } from "../utils/utils";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function TaskForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const task = useSelector((state) =>
    state.tasks.tasks.find((task) => task.id === Number(id))
  );

  const [formState, setFormState] = useState({
    title: "",
    description: "",
    dueDate: null,
    priority: "",
    completed: false,
  });

  const resetHandler = () => {
    setFormState({
      title: "",
      description: "",
      dueDate: null,
      priority: "",
      completed: false,
    });
  };

  useEffect(() => {
    if (id && task) {
      setFormState(task);
    } else if (id && !task) {
      navigate("/", { state: { recordNotFound: true } });
    }
  }, [id, task, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDateChange = (date) => {
    setFormState((prevState) => ({
      ...prevState,
      dueDate: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(taskUpdate({ ...formState, id: Number(id) }));
      toast.success("Task Updated Successfully");
    } else {
      dispatch(taskAdded(formState));
      toast.success("New Task Added");
    }
    navigate("/");
  };

  return (
    <section className="flex justify-center h-full items-center box-border">
      <form
        onSubmit={handleSubmit}
        className="box-border w-full max-w-md relative mx-auto p-6 bg-white shadow-2xl rounded"
        aria-labelledby="form-title"
      >
        <button
          type="button"
          className="absolute top-2 right-2 text-gray-500 size-6 hover:text-gray-700"
          onClick={() => navigate("/")}
          aria-label="Close form"
        >
          &times;
        </button>
        <h2 id="form-title" className="sr-only">
          {id ? "Edit Task" : "Add Task"}
        </h2>
        <div className="mb-4">
          <Label htmlFor="title" text="Title" />
          <Input
            id="title"
            type="text"
            name="title"
            className="w-full"
            aria-label="Task Title"
            value={formState?.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="description" text="Description" />
          <TextArea
            id="description"
            name="description"
            aria-label="Task Description"
            value={formState?.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="priority" text="Priority" />
          <Select
            id="priority"
            name="priority"
            value={formState?.priority}
            aria-label="Task Priority"
            className="p-2 border w-full rounded-lg"
            onChange={handleChange}
            options={priorityOptions}
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="dueDate" text="Due Date" />
          <DatePicker
            id="dueDate"
            selected={formState.dueDate}
            className="border text-sm rounded"
            onChange={(date) => handleDateChange(date.toDateString())}
            minDate={new Date()}
            placeholderText="dd/mm/yyyy"
            dateFormat="dd/MM/yyyy"
            showIcon
            required
            aria-label="Task Due Date"
          />
        </div>
        <div className="flex gap-4">
          <Button
            type="submit"
            aria-label="Submit"
            className="border border-blue-700 bg-blue-700 text-white p-2 rounded"
          >
            {id ? "Update Task" : "Add Task"}
          </Button>
          <Button
            type="button"
            aria-label="Reset"
            className="border border-blue-700 text-blue-700 p-2 rounded"
            onClick={resetHandler}
          >
            Reset
          </Button>
        </div>
      </form>
    </section>
  );
}

export default TaskForm;
