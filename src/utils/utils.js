export const priorityOptions = [
  { value: "", label: "Select Priority" },
  { value: 0, label: "Low" },
  { value: 1, label: "Medium" },
  { value: 2, label: "High" },
];

export const statusOptions = [
  { value: "all", label: "All" },
  { value: "completed", label: "Completed" },
  { value: "pending", label: "Pending" },
];

export const sortingOptions = [
  { value: "priority", label: "Priority" },
  { value: "dueDate", label: "Due Date" },
  { value: "status", label: "Status" },
];

export const priorityList = ["Low", "Medium", "High"];

export const HighlightedText = (text, highlight) => {
  const startIndex = text.toLowerCase().indexOf(highlight.toLowerCase());

  const endIndex = startIndex + highlight.length;
  const beforeHighlight = text.slice(0, startIndex);
  const highlightedText = text.slice(startIndex, endIndex);
  const afterHighlight = text.slice(endIndex);

  return {
    beforeHighlight,
    highlightedText,
    afterHighlight,
  };
};
