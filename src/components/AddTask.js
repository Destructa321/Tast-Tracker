import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [dayTime, setDayTime] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }
        if (!dayTime) {
            alert('Please set day and time')
            return
        }

        onAdd({ text, dayTime, reminder })

        setText('')
        setDayTime('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input 
                type='text' 
                placeholder='Add Task' 
                value={text} 
                onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input 
                type='text' 
                placeholder='Add Day & Time'
                value={dayTime} 
                onChange={(e) => setDayTime(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input 
                type='checkbox'
                checked={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block'/>
            
        </form>
    )
}

export default AddTask
