import { useState } from 'react';

export const UpdateTask = ({ updateTask , task }) => {
  const [taskName, setTaskName] = useState("")
  const [description, setDescription] = useState("")
  const [assignedUser, setAssignedUser] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [estimatedDuration, setEstimatedDuration] = useState("")
  console.log(typeof(task))
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
    <section style={styles.section} id="addTaskSection">
        <div>
        {/* <body>Project ID: {task[0].projectId}</body><br></br>
        <body> Task ID: {task[0].taskId}</body><br></br> */}
        </div>
      <form>
        <div className="formField">
          <label htmlFor="taskName">How do you want to change this task?<br/><br/> Task name</label>
          <br></br>
          <input value={taskName} onChange={e => setTaskName(e.target.value)} name="taskName" autoComplete="off" style={styles.input} />
        </div>
        <div className="formField">
          <label htmlFor="description">Description</label>
          <br></br>
          <input value={description}
            onChange={e => setDescription(e.target.value)} name="description" style={styles.input} />
        </div>
        <div className="formField">
          <label htmlFor="AssignedUser">AssignedUser</label>
          <br></br>
          <input value={assignedUser}
            onChange={e => setAssignedUser(e.target.value)} name="assignedUser" style={styles.input} />
        </div>
        <div className="formField">
          <label htmlFor="dueDate">Due Date</label>
          <br></br>
          <input value={dueDate}
            onChange={e => setDueDate(e.target.value)} name="dueDate" style={styles.input} />
        </div>
        <div className="formField">
          <label htmlFor="estimatedDuration">Estimated Duration</label>
          <br></br>
          <input value={estimatedDuration}
            onChange={e => setEstimatedDuration(e.target.value)} name="estimatedDuration" style={styles.input} />
        </div>
        <div className="formField">
          <button onClick={event => updateTask(task[0].projectId, task[0].taskId, taskName, description,assignedUser,dueDate,estimatedDuration, event)} type="submit">Update task:</button>
        </div>
      </form>
    </section>
  )

}