import { useState } from 'react';

export const CreateTask = ({ sendNewTask }) => {
  const [taskName, setTaskName] = useState("")
  const [description, setDescription] = useState("")
  const [assignedUser, setAssignedUser] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [estimatedDuration, setEstimatedDuration] = useState("")
  const styles = {
    section: {
      border: "2px solid var(--main-dark)",
      padding: "15px",
    },
    formField: {
      margin: "10px 0",
    },
    input: { width: "95%" },
  }

  return (
    <section style={styles.section} id="addTodoSection">
      <form>
        <div className="formField">
          <label htmlFor="taskName">What new task do you want to add? <br/><br/> Task name</label>
          <input value={taskName} onChange={e => setTaskName(e.target.value)} name="taskName" autoComplete="off" style={styles.input} />
        </div>
        <div className="formField">
          <label htmlFor="description">Description</label>
          <input value={description}
            onChange={e => setDescription(e.target.value)} name="description" style={styles.input} />
        </div>
        <div className="formField">
          <label htmlFor="AssignedUser">AssignedUser</label>
          <input value={assignedUser}
            onChange={e => setAssignedUser(e.target.value)} name="assignedUser" style={styles.input} />
        </div>
        <div className="formField">
          <label htmlFor="dueDate">Due Date</label>
          <input value={dueDate}
            onChange={e => setDueDate(e.target.value)} name="dueDate" style={styles.input} />
        </div>
        <div className="formField">
          <label htmlFor="estimatedDuration">Due Date</label>
          <input value={estimatedDuration}
            onChange={e => setEstimatedDuration(e.target.value)} name="estimatedDuration" style={styles.input} />
        </div>
        <div className="formField">
          <button onClick={event => sendNewTask(taskName, description,assignedUser,dueDate,estimatedDuration, event)} type="submit">Create to new task</button>
        </div>
      </form>
    </section>
  )

}