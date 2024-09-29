'use client'

import React, { useState } from "react";
import style from "../styles/Form.module.css";
import {useForm, SubmitHandler} from "react-hook-form"

interface IFormData {
  name: string
  email: string
  message: string
}

function Form() {
  const {register, handleSubmit} = useForm<IFormData>()
  const [sending, setSending] = useState<boolean>(false)

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    setSending(true)
    console.log(`Nombre: ${data.name}, email: ${data.email}, message: ${data.message}`)
  }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <button className={style.button}>Book your free consultation</button>
        <h2 className={style.title}>Get a free consultation</h2>
        <div className={style.inputs}>
          <input className={style.input} disabled={sending} {...register("name",{required: true})} placeholder="Name" type="text" />
          <input className={style.input} disabled={sending} {...register("email",{required: true})} placeholder="contact@email.com" type="text" />
        </div>
        <textarea className={style.textArea} disabled={sending}  {...register("message",{required: true})} placeholder="Please type your message here..."></textarea>
        <button className={style.submitButton}>Get in Touch</button>
      </form>
    </div>
  );
}

export default Form;
