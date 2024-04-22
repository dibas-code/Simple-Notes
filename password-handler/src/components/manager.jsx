import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import 'react-toastify/dist/ReactToastify.css';


const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])


    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        let passwordArray;
        if (passwords) {
            passwordArray = JSON.parse(passwords);
            console.log(passwordArray)
            setpasswordArray(passwordArray);
        }
    }, [])


    const showPassword = () => {
        passwordRef.current.type = "text";
        if (ref.current.src.includes("/eye.png")) {
            ref.current.src = "/eyeopen.png";
            passwordRef.current.type = "text";
        } else {
            ref.current.src = "/eye.png";
            passwordRef.current.type = "password";
        }

    }
    const copyText = (text) => {
        toast('Copied to Clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text);
    }

    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 6) {
            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            setform({ site: "", username: "", password: "" })
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        } else {
            alert("not saved(minimum character required) site-3, user-3 and pass-6")
        }
    }

    const deletePassword = (id) => {
        let confirmation = confirm("do you want to proceed")
        if (confirmation) {
            setpasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id != id)))
        }
        else {

        }
        toast('Password deleted Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const editPassword = (id) => {
        setform(passwordArray.filter(item => item.id === id)[0]);
        setpasswordArray(passwordArray.filter(item => item.id != id))
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    }

    return (<>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        {/* Same as */}
        <ToastContainer />

        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

        <div className="lg:px-40 px-5 py-16 mx-auto">
            <h1 className='text-4xl text font-bold text-center'>
                <span className="text-green-700">&lt;</span>
                Pass <span className='text-green-700'>OP</span>
                <span className="text-green-700">/ &gt;</span>
            </h1>
            <p className='text-green-900 text-lg text-center'>Your own password manager</p>

            <div className='flex flex-col p-4 text-black gap-8 items-center'>
                <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className="rounded-full border-solid border-2 border-green-800 w-full p-4 py-1" type="text" name="site" id="site" />
                <div className="flex flex-col md:flex-row w-full gap-8 ">
                    <input value={form.username} onChange={handleChange} placeholder='Enter Username(contain min-3 letters)' className="rounded-full border-solid border-2 border-green-800 w-full p-4 py-1" type="text" name="username" id="username" />
                    <div className="flex relative items-center">
                        <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password(min-6 letters)' className="rounded-full border-solid border-2 border-green-800 w-full p-4 py-1" type="password" name="password" id="password" />
                        <span className='absolute right-2 cursor-pointer' onClick={showPassword}>
                            <img ref={ref} width={20} src="/eye.png" alt="eye" />
                        </span>
                    </div>
                </div>
                <button onClick={savePassword} className='flex justify-center gap-2 items-center bg-green-600 hover:bg-green-400 rounded-full px-4 py-2 w-fit border border-green-800'>
                    <lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="hover"
                    ></lord-icon>
                    Add Password</button>

            </div>

            <div className="passwords overflow-x-auto mx-auto">
                <h2 className='font-bold text-2xl py-4'>Your passwords</h2>
                {passwordArray.length === 0 && <div>No passwords to show</div>}

                {passwordArray.length != 0 && (
                    <div className="overflow-x-scrool scroolbar">
                        <table className="md:w-full min-w-[600px] rounded-md pb-2">
                            <thead className=' bg-green-800 text-white'>
                                <tr>
                                    <th className='py-2'>site</th>
                                    <th className='py-2'>username</th>
                                    <th className='py-2'>password</th>
                                    <th className='py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-purple-300'>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index}>
                                        <td className='py-2 text-center'>
                                            <div className='flex items-center justify-center gap-2'><a href={item.site} target='_blank'>{item.site}</a>
                                                <img className="w-5 cursor-pointer pt-2 hover:opacity-60" onClick={() => { copyText(item.site) }} src="/copy.png" alt="copy" /></div>
                                        </td>
                                        <td className='py-2 text-center'>
                                            <div className='flex items-center justify-center gap-2'>{item.username}
                                                <img className="w-5 cursor-pointer pt-2 hover:opacity-60" onClick={() => { copyText(item.username) }} src="/copy.png" alt="copy" /></div>
                                        </td>
                                        <td className='py-2 text-center'><div className='flex items-center justify-center gap-2'><span>{item.password}</span>
                                            <img className="w-5 cursor-pointer pt-2 hover:opacity-60" src="/copy.png" alt="copy" onClick={() => { copyText(item.password) }} /></div>
                                        </td>
                                        <td className='py-2  text-center'>
                                            <span className='flex items-center gap-3'><img className="w-5 cursor-pointer hover:opacity-60" src="/delete.png" alt="delete" onClick={() => { deletePassword(item.id) }} />
                                                <img className="w-5 cursor-pointer hover:opacity-60" src="/edit.png" alt="edit" onClick={() => { editPassword(item.id) }} /></span>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table ></div>)}
            </div >
        </div >
    </>
    )
}

export default Manager
