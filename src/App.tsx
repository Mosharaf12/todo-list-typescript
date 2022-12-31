import * as React from "react"
import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, StackDivider, Image, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import TodoForm from "./components/TodoForm"
import Login from "./components/Login"


export const App = () => (
  <ChakraProvider theme={theme}>
<Login></Login> 
<TodoForm></TodoForm>
  </ChakraProvider>
)
