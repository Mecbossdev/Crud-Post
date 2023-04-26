import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Props } from '../../pages/Home'
import { DivText } from '../../pages/Home/styles';
import { DivInput } from './styles';

type FormProps = {
  newProps: Props[];
  setNewProps?: React.Dispatch<React.SetStateAction<Props[]>>
  task?: Props | null;
  handleUpdate?(id: number, title: string, body: string): void; 
}


const FormTask = ({newProps, setNewProps, task, handleUpdate}: FormProps) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  const [body, setBody] = useState<string>("")

  useEffect(() => {
    if(task) {
      setId(task.id)
      setTitle(task.title)
      setBody(task.body)
    }
    
  }, [task])

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(handleUpdate){
      handleUpdate(id, title, body)
    } else {
      
      const newPost: Props = {id, title, body}

      setNewProps!([...newProps, newPost])

      setTitle("")
      setBody("")
    }
    
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === 'title') {
      setTitle(e.target.value)
    }else {
      setBody(e.target.value)
    }
  }

  return (
    <div>
      <form action="post" onSubmit={handleAddTask}>
        <DivInput>
          
          <input 
            type="text"
            name='title'
            value={title}
            onChange={handleChange}
          />
          

          <input 
            type="text"
            name='body'
            value={body}
            onChange={handleChange} 
          />
          
        </DivInput>

        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default FormTask