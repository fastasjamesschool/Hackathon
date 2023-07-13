import { useState, useEffect } from 'react';
import React from "react"
import { useParams, useNavigate } from "react-router-dom";

export function Homepage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate();

    async function submitInfo(event) {
        event.preventDefault()
        let resResponse = 0
        const loginInfo = {"username": username, "password":password};
        const url = `/api/Auth`;
        const currentUserLoginInfo = await fetch(url, {
            method: "POST", headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(loginInfo)
        }).then(res => {resResponse = res.status})
        // Put it in the list. Update the page to show our new todo.
        // setTodos([...todos, theNewTodo])\
        // console.log(resResponse)
        if (resResponse === 200){
            navigate('/Projects')
        }
        else{
            console.log("incorrect info")
        }
        // console.log(username, password)
    }


    return (
        <div className="Auth-form-container">
            <form onSubmit={event => submitInfo(event)} className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Username</label>
                        <input id="input"
                            type="username"
                            className="form-control mt-1"
                            placeholder="Enter username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input id="password"
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button
                            type="submit"
                            className="btn btn-primary"
                        // onClick={event => sendNewTodo(description, priority, event)}>
                        >
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
        </div>
    )
}