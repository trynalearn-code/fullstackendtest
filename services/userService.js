import express from "express"
export function createUserService(username, password, email){
    const result = {username, password, email}
    // if (!username || !password || !email){
    //     throw new Error("You must fill in your username, password, and email")
    // }
    return result
}
