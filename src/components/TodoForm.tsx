import { Button, Center, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import {ITask} from '../Interfaces'
import TodoTask from './TodoTask';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const TodoForm = () => {
    const [task, setTask] = useState<string>("")
    const [deadLine, setDeadLine] = useState<number>(0)
    const [todoList, setTodoList] = useState<ITask[]>([])

    const handleChange = (event:any)=>{
        if(event.target.name === 'task'){
            setTask(event.target.value)
        }else{
            setDeadLine(event.target.value)

        }

    }
    const addTask = ():void =>{
        const newTask = {taskName: task, deadLine: deadLine}
        setTodoList([...todoList, newTask])
        setTask("")
        setDeadLine(0)
       
       
    }
    const completedTask = (taskNameToDelete: string): void =>{
        setTodoList(todoList.filter((task)=>{
            return task.taskName != taskNameToDelete
        }))
    }
    



    return (
        <Center>
           <div>
          <div>
          <Input mb='6px' value={task} name='task' style={{border: '2px solid black'}} type="text" placeholder='Task...' onChange={handleChange} />
            <Input value={deadLine} name='deadline' style={{border: '2px solid black'}} type="number" placeholder='Deadline....'  onChange={handleChange} />
          </div>
          <Button onClick={addTask} mt='6px' type='submit' bgGradient='linear(to-r, green.200, pink.500)' size='lg'>Add task</Button>
          <div>
          <TableContainer>
  <Table variant='striped' my={'12px'} colorScheme='teal' border={'2px solid black'}>
    <Thead>
      <Tr>
        <Th>TaskName</Th>
        <Th>DeadLine</Th>
        <Th>Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
    {todoList.map((task: ITask, key:number) => {
                return <TodoTask key={key} task={task}
                completedTask={completedTask}
              
                ></TodoTask>

            })}
    </Tbody>
  
  </Table>
</TableContainer>
          </div>
           </div>

      
        </Center>
    );
};

export default TodoForm;