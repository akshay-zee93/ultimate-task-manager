import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PencilSquareIcon from "@heroicons/react/24/solid/PencilSquareIcon";
import TrashIcon from "@heroicons/react/24/solid/TrashIcon";
import { useDispatch } from "react-redux";
import { taskStatusUpdate } from "../store/taskSlice";
import toast from "react-hot-toast";
import Input from "./Input";
import Label from "./Label";
import Tag from "./Tag";
import { HighlightedText, priorityList } from "../utils/utils";

function TaskItem({ task, deleteTask, search = "" }) {
  const dispatch = useDispatch();
  const [highlightTitle, setHighlightTitle] = useState({
    beforeHighlight: "",
    highlightedText: "",
    afterHighlight: "",
  });
  const [highlightDesc, setHighlightDesc] = useState({
    beforeHighlight: "",
    highlightedText: "",
    afterHighlight: "",
  });

  useEffect(() => {
    if (search.length > 0) {
      setHighlightTitle(HighlightedText(task.title, search));
      setHighlightDesc(HighlightedText(task.description, search));
    }
  }, [search]);

  const toggleCompletion = (id) => {
    dispatch(taskStatusUpdate({ id: Number(id) }));
    if (!task.completed) {
      toast(`${task.title} is marked as completed`);
    }
  };

  return (
    <li className="flex justify-between items-center mb-2 p-4 border rounded bg-white shadow-sm">
      <div className="flex flex-col gap-2 justify-start">
        <Tag
          text={task.completed ? "Completed" : "Pending"}
          className={`${
            task.completed
              ? "border-green-500 bg-green-50 text-green-500"
              : "border-orange-500 bg-orange-50 text-orange-500"
          }`}
        />

        {search.length > 0 ? (
          <h3 className="text-lg flex font-bold">
            {highlightTitle.beforeHighlight}
            <p className=" text-yellow-500">{highlightTitle.highlightedText}</p>
            {highlightTitle.afterHighlight}
          </h3>
        ) : (
          <h3 className="text-lg flex font-bold">{task.title}</h3>
        )}
        {search.length > 0 ? (
          <span>
            {highlightDesc.beforeHighlight}
            <span className="text-yellow-500">
              {highlightDesc.highlightedText}
            </span>
            {highlightDesc.afterHighlight}
          </span>
        ) : (
          <p>{task.description}</p>
        )}
        <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
        <p className="text-sm text-gray-500">
          Priority: {priorityList[task.priority]}
        </p>

        <div className="flex gap-2 items-center">
          <Input
            checked={task.completed}
            aria-labelledby={`completed-${task.id}`}
            type="checkbox"
            className="rounded-xl"
            onChange={() => toggleCompletion(task.id)}
            id={`completed-${task.id}`}
          />
          <Label
            htmlFor={`completed-${task.id}`}
            className="text-sm text-gray-500"
            text="Mark as completed"
          />
        </div>
      </div>
      <div className="flex space-x-2">
        <Link to={`/edit/${task.id}`} className="text-blue-500">
          <PencilSquareIcon className="w-5 h-5" />
        </Link>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500"
          aria-label={`Delete task ${task.title}`}
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
