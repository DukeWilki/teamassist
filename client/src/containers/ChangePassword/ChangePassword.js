import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function ChangePassword(props) {

    return (
        <input
        type="password"
        placeholder="Password"
        className="input"
        required
        // value= {formState.pass}
        // onChange= {(e)=> {
        //   setFormState({
        //     ...formState,
        //     pass: e.target.value
        //   })
        // }} 
      ></input>


    )}
    export default ChangePassword;