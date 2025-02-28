import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim()) {
      editTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <motion.div
      className={`todo-item ${todo.completed ? "completed" : ""}`}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          autoFocus
        />
      ) : (
        <span onClick={() => toggleComplete(todo.id)}>
          {todo.text}
          {todo.completed && <FaCheck style={{ marginLeft: "10px", color: "#4a90e2" }} />}
        </span>
      )}
      <div className="actions">
        <button onClick={() => setIsEditing(!isEditing)}>
          <FaEdit />
        </button>
        <button onClick={() => deleteTodo(todo.id)}>
          <FaTrash />
        </button>
      </div>
    </motion.div>
  );
}

export default TodoItem;