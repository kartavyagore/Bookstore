
import React, { useState, useEffect} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';



const EditBook = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const{id} = useParams();

  useEffect(()=>{
    setLoading(true);
    axios.get(`https://bookstore-hoac.onrender.com/books/${id}`).then((response)=>{
      setAuthor(response.data.author);
      setPublishYear(response.data.publishYear);
      setTitle(response.data.title);
      setLoading(false);
    }).catch((error)=>{
      setLoading(false);
      alert('An error occured, check console.')
      console.log(error);
    })
  },[])
  const handleEditBook = () =>{
    const data = {
      title,author,publishYear
    };
    setLoading(true);

    axios.put(`http://localhost:5555/books/${id}`,data).then(()=> {
      setLoading(false);
      navigate('/');
    }).catch((error)=>{
      setLoading(false);
      alert('an error occured please check console')
      console.log(error);
    })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? <Spinner /> : ""}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
            <label className='text-xl mr-4 text-grey-500'>Title</label>
            <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)} className='border-2 border-grey-500 px-2 py-4 w-full'></input>

            <label className='text-xl mr-4 text-grey-500'>Author</label>
            <input type='text' value={author} onChange={(e)=> setAuthor(e.target.value)} className='border-2 border-grey-500 px-2 py-4 w-full'></input>

            <label className='text-xl mr-4 text-grey-500'>Publish Year</label>
            <input type='number' value={publishYear} onChange={(e)=> setPublishYear(Number(e.target.value))} className='border-2 border-grey-500 px-2 py-4 w-full'></input>
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
        Save
        </button>
      </div>
    </div>
  )
}

export default EditBook