import { Button, TabList, WrapItem } from '@chakra-ui/react';
import React from 'react'
import { ITask } from '../Interfaces'
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

interface Props {
    task: ITask;
    completedTask(taskNameToDelete: string): void;
}

const TodoTask=({task, completedTask}:Props)=> {
  return (
      <Tr>
        <Td>{task?.taskName}</Td>
        <Td>{task?.deadLine}</Td>
     
      <Button onClick={()=>{
        completedTask(task.taskName)
        }} w={'full'} colorScheme='teal'>Deleted</Button>
 
      </Tr>
    
  
  
  )
}

export default TodoTask
