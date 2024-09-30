"use client";

import React, { useState } from "react";
import style from "../styles/Form.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormData {
  name: string;
  email: string;
  message: string;
}

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  const [sending, setSending] = useState<boolean>(false);
  const [sended, setSended] = useState<boolean>(false);

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    setSending(true);
    console.log(data);
    setTimeout(() => {
      setSended(true);
    }, 2000);
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        {sended ? (
          <>
            <p className={style.title}>We have received your message.</p>
            <p className={style.title} style={{ marginTop: "1rem" }}>
              We'll contact you shortly.
            </p>
          </>
        ) : (
          <>
            <button className={style.button}>
              Book your free consultation
            </button>
            <h2 className={style.title}>Get a free consultation</h2>
            <div className={style.inputs}>
              {errors.name && (
                <div className={style.error}>{errors.name.message}</div>
              )}
              <input
                className={style.input}
                disabled={sending}
                {...register("name", { required: "Name required" })}
                placeholder="Name"
                type="text"
              />
              {errors.email && (
                <div className={style.error}>{errors.email.message}</div>
              )}
              <input
                className={style.input}
                disabled={sending}
                {...register("email", {
                  required: "Email required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email",
                  },
                })}
                placeholder="contact@email.com"
                type="text"
              />
            </div>
            {errors.message && (
              <div className={style.errorArea}>{errors.message.message}</div>
            )}
            <textarea
              className={style.textArea}
              disabled={sending}
              {...register("message", {
                required: "Message required",
                minLength: {
                  value: 12,
                  message: "Message must be at least 12 characters",
                },
              })}
              placeholder="Please type your message here..."
            ></textarea>
            <button disabled={sending} className={style.submitButton}>
              {sending ? "Sending email..." : "Get in Touch"}
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default Form;
