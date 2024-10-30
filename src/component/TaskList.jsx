import { useState } from "react";

const AddTask = () => {
  const [taskValue, setTaskValue] = useState(" ");

  const handleChange = (x) => {
    setTaskValue(x.target.value);
  };

  return (
    <div>
      <h1>Task</h1>
      <form>
        <label>Task Name :</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="fill your task here"
          onChange={handleChange}
        />
        <button type="submit">ADD!</button>
      </form>
      <p>{taskValue}</p>
    </div>
  );
};

export default AddTask;
