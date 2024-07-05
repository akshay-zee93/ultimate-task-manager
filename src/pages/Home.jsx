import React, { useDeferredValue, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { taskDelete } from "../store/taskSlice";
import TaskItem from "../components/TaskItem";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import Modal from "../components/Modal";
import toast from "react-hot-toast";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import EmptyImg from "@heroicons/react/24/solid/DocumentPlusIcon";
import { sortingOptions, statusOptions } from "../utils/utils";
import Label from "../components/Label";

function TaskList() {
  const [searchTerm, setSearchTerm] = useState("");
  const deferredInput = useDeferredValue(searchTerm);
  const [filter, setFilter] = useState("all");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [sortOrder, setSortOrder] = useState("priority");
  const [deleteId, setDeleteId] = useState(null);

  const { tasks, taskCompleted, taskPending } = useSelector(
    (state) => state.tasks
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { recordNotFound } = location.state || {};

  useEffect(() => {
    if (recordNotFound) {
      toast.error("Task Not Found");
    }
  }, [recordNotFound]);

  const deleteHandler = () => {
    dispatch(taskDelete({ id: deleteId }));
    setConfirmDelete(false);
    setDeleteId(null);
    toast.success("Task Removed Successfully");
  };

  const toggleHandler = (id) => {
    setDeleteId(id);
    setConfirmDelete((prev) => !prev);
  };

  const filteredTasks = useMemo(() => {
    return tasks
      .filter(
        (task) =>
          task.title.toLowerCase().includes(deferredInput.toLowerCase()) ||
          task.description.toLowerCase().includes(deferredInput.toLowerCase())
      )
      .filter(
        (task) =>
          filter === "all" ||
          (filter === "completed" && task.completed) ||
          (filter === "pending" && !task.completed)
      )
      .sort((a, b) => {
        if (sortOrder === "priority") {
          return b.priority - a.priority;
        } else if (sortOrder === "dueDate") {
          return new Date(a.dueDate) - new Date(b.dueDate);
        } else {
          return a.completed - b.completed;
        }
      });
  }, [tasks, deferredInput, filter, sortOrder]);

  const resetHandler = () => {
    setSearchTerm("");
    setSortOrder("priority");
    setFilter("all");
  };

  return (
    <main className="h-full">
      {confirmDelete && (
        <Modal isOpen={true} onClose={toggleHandler}>
          <section className="flex justify-center items-center flex-col gap-10">
            <p>Are you sure you want to delete this task?</p>
            <div className="flex gap-4">
              <Button
                onClick={deleteHandler}
                className="text-white bg-blue-700"
              >
                Confirm
              </Button>
              <Button
                onClick={toggleHandler}
                className="border border-blue-700 text-blue-700"
              >
                Cancel
              </Button>
            </div>
          </section>
        </Modal>
      )}
      <div className="flex flex-col md:flex-row gap-5 mb-4">
        <div className="flex gap-2 items-center">
          <Label
            htmlFor="search"
            className="w-16 text-sm font-medium"
            text="Search"
          />
          <Input
            id="search"
            type="text"
            value={searchTerm}
            className=" w-60 md:w-full"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search tasks..."
            aria-label="Search tasks"
          />
        </div>
        <div className="flex gap-2 items-center">
          <Label
            htmlFor="filter"
            className="w-16 text-sm font-medium"
            text="Filter"
          />
          <Select
            id="filter"
            value={filter}
            className=" w-60 md:w-full"
            onChange={(e) => setFilter(e.target.value)}
            options={statusOptions}
            aria-label="Filter tasks"
          />
        </div>
        <div className="flex gap-2 items-center">
          <Label
            htmlFor="sort"
            className="text-sm font-medium w-16"
            text="Sort"
          />
          <Select
            id="sort"
            value={sortOrder}
            className=" w-60 md:w-full"
            onChange={(e) => setSortOrder(e.target.value)}
            options={sortingOptions}
            aria-label="Sort tasks"
          />
        </div>
        <Button
          onClick={resetHandler}
          aria-label="Reset"
          className="bg-white text-sm px-4 w-full md:w-fit border-gray-500 shadow text-gray-500"
        >
          <p>Reset</p>
        </Button>
      </div>
      <div className="flex gap-3 justify-start text-xs text-gray-500 my-3 items-center">
        <div className="flex gap-1 items-center">
          <p className="font-semibold">Total Tasks</p>
          <p>{tasks.length}</p>
        </div>
        <div className="flex gap-1 items-center">
          <p className="font-semibold">Tasks Completed</p>
          <p>{taskCompleted}</p>
        </div>
        <div className="flex gap-1 items-center">
          <p className="font-semibold">Tasks Pending</p>
          <p>{taskPending}</p>
        </div>
      </div>
      {filteredTasks.length > 0 ? (
        <ul>
          {filteredTasks.map((task) => (
            <TaskItem
              search={deferredInput}
              deleteTask={toggleHandler}
              key={task.id}
              task={task}
            />
          ))}
        </ul>
      ) : (
        <div className="container flex flex-col gap-2 justify-center h-3/4 items-center">
          <EmptyImg className="size-10 text-gray-500" aria-hidden="true" />
          <Button
            onClick={() => navigate("/new")}
            aria-label="Add Task"
            className="text-sm shadow-lg border flex items-center gap-2 border-blue-700"
          >
            <PlusIcon className="size-5" aria-hidden="true" />
            <p>Add Task</p>
          </Button>
        </div>
      )}
    </main>
  );
}

export default TaskList;
