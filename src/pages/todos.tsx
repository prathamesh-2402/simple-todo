import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { DataStore } from '@aws-amplify/datastore';
import { Todos } from '@/models';
import { useRouter } from "next/navigation";
import { Trash2 } from 'lucide-react';

const UserTodo = () => {
    const [open, setOpen] = useState(false);
    const [todo, setTodo] = useState({ title: '', description: '' })
    const [allTodos, setAllTodos] = useState<any>([])

    const router = useRouter();
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    useEffect(() => {
        getTodo();
    }, [])

    const getTodo = async () => {
        try {
            const data = await DataStore.query(Todos, (c) => c.userId.eq(localStorage.getItem("id")));
            setAllTodos(data);
        } catch (error) {
            console.log(error);
        }
    }

    const addTodo = async () => {
        try {
            // Save new user
            const data = await DataStore.save(new Todos({ ...todo, userId: localStorage.getItem("id") }));
            if (data) {
                // Successfully registered
                onCloseModal();
                Swal.fire({
                    icon: "success",
                    title: "New Todo Created Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                getTodo();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTodo = async (todo:any) => {
        await DataStore.delete(todo); 
        Swal.fire({
            icon: "success",
            title: "Todo Deleted Successfully",
            showConfirmButton: false,
            timer: 1500
        });
        getTodo()
    }

    const logoutUser = () => {
        localStorage.clear();
        router.push('/');
        Swal.fire({
            icon: "info",
            title: "Logged Out Successfully",
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        <div className='p-6'>
            <Modal open={open} onClose={onCloseModal} center styles={{ modal: { width: '100%' } }}>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-3xl font-semibold'>Add Todo</h1>
                    <input type="text" placeholder="Title" className="border focus:border-[#27272a] border-[#ededee] bg-inherit text-[#2f2f31] py-2 pl-3 rounded mt-2 outline-none" onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
                    <textarea placeholder="description" className="border focus:border-[#27272a] border-[#ededee] bg-inherit text-[#2f2f31] py-2 pl-3 rounded mt-2 outline-none" onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
                    <button type="button" className="cursor-pointer py-2 px-4 my-4 block bg-[#18181b] hover:bg-[#2f2f31] font-bold w-full text-center rounded text-[#efefef] transition-all" onClick={addTodo}>Add Todo</button>
                </div>
            </Modal>
            <div className='flex justify-between items-center flex-col sm:flex-row gap-6 sm:gap-0'>
                <h1 className='text-3xl font-bold'>Simple Todo</h1>
                <div className='flex gap-4'>
                    <button type="button" className="cursor-pointer py-2 px-4 hover:bg-green-600 bg-[#2f2f31] font-bold text-center rounded text-[#efefef] transition-all" onClick={onOpenModal} >Add New Todo</button>
                    <button type="button" className="cursor-pointer py-2 px-4 hover:bg-red-600 bg-red-500 font-bold text-center rounded text-[#efefef] transition-all" onClick={logoutUser} >Logout</button>
                </div>
            </div>
            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                {allTodos?.map((todo: any) => (
                    <div className='border-4 border-green-600 text-green-800 bg-[rgba(22,163,74,0.10)] p-4 rounded-md flex flex-col gap-4' key={todo.id}>
                        <div className='flex justify-between'>
                            <h1 className='text-3xl font-bold'>{todo.title}</h1>
                            <Trash2 className='cursor-pointer text-red-500 hover:scale-110 transition-all' onClick={() => deleteTodo(todo)} />
                        </div>
                        <p className=''>{todo.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserTodo;