import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { DivCard, DivMain, DivPost, DivText } from "./styles";
import { AiFillStar } from "react-icons/ai";
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import FormTask from "../../components/FormTask";

export type Props = {
  id: number;
  title: string;
  body: string;
}

export type Posts = {
  posts: Props;
}


const App = () => {

  const [allpost, setAllPost] = useState<Props[]>([])
  const [newPost, setNewPost] = useState<Posts[]>([])
  const [updateTask, setUpdateTask] = useState<Props | null>(null)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [search, setSearch] = useState<string>("")


  const filtered = search ? 
    allpost.filter(item => {
      return item.title.toLowerCase().includes(
        search.toLowerCase()
      )
    }) : allpost
    
  const handleApi = async () => {
    const api = await axios('https://jsonplaceholder.typicode.com/posts')
    const data = api.data

    setAllPost(data)
  }

  useEffect(() => {
    handleApi()
  },[])

  const handleAdd = (id: number) => {
    const post = allpost.find(item => item.id === id)
    const addPost = newPost.find(item => item.posts.id === id)

    if(addPost) {
      const novoPost: Posts[] = newPost.map((item) => {
        if(novoPost.posts.id === id) ({
          ...item
        })
        return item
       
      })
      setNewPost(novoPost) 

      
    }
    const cardItem: Posts = {
      posts: post!
    }

    const novPost: Posts[] = [...newPost, cardItem]
    setNewPost(novPost)    

  }

  const handleDelete = (id: number) => {
    const deleteItem = newPost.filter(item => {
      return item.posts.id !== id
    })
    setNewPost(deleteItem)
    
  }

  const handleEdit = (task: Props) => {
    setUpdateTask(task)
    setOpenModal(true)
  }

  const updateToTask = (id: number, title: string, body: string) => {

    const updateTask: Props = {id, title, body}
    const updateItem = allpost.map((item) => {
      return item.id === updateTask.id ? updateTask : item
    })

    setAllPost(updateItem)
  }


  return (
    <>
      <Header 
        children={
          <input 
            type="text"
            onChange={e => setSearch(e.target.value)}
            value={search} 
          />
        }
      />
      <Modal visible={openModal} closeModal={() => setOpenModal(!openModal)}>
        <DivMain>
        <FormTask 
          newProps={allpost}
          task={updateTask}
          handleUpdate={updateToTask}
        />          
        </DivMain>

      </Modal>
      <DivCard>
        {filtered.map((item) => 
          <DivMain key={item.id}>
            <AiFillStar onClick={() => handleAdd(item.id)} cursor={"pointer"} color="#403226" size={20}/>
            <DivText>
              <p>{item.id}</p>
              <h1>{item.title}</h1>
              <p>{item.body}</p>              
            </DivText>
            <DivPost>
              <MdEditSquare onClick={() => handleEdit(item)} cursor={"pointer"} color="#403226" size={30}/>
              
              <MdDelete onClick={() => handleDelete(item.id)} cursor={"pointer"} color="#403226" size={30}/>              
            </DivPost>
          </DivMain>
        )}
      </DivCard>      
      

      
      <DivCard>
        {newPost.map(item =>
          <DivMain key={item.posts.id}>
            <DivText>
              <p>{item.posts.id}</p>
              <h1>
                {item.posts.title}
              </h1>
              <p>{item.posts.body}</p>              
            </DivText>
            
            <MdDelete onClick={() => handleDelete(item.posts.id)} cursor={"pointer"} color="#403226" size={30}/>
          </DivMain> 
        )}
      </DivCard>
  </>
    
  )
}

export default App
