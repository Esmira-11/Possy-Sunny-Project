import React from "react";
import Back from "../components/Back";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Formik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  return (
    <>
      {/* <a href="">
        <AiOutlineArrowUp className="gotopbtn" />
      </a> */}
      <Back page="Bizimlə Əlaqə" />
      <div className="contact" data-aos="zoom-in">
        <Formik
          initialValues={{
            name: "",
            surname: "",
            email: "",
            subject: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Ad boş buraxılmamalıdır."),
            surname: Yup.string().required("Soyad boş buraxılmamalıdır."),
            email: Yup.string().email().required("Email boş buraxılmamalıdır"),
            subject: Yup.string()
              .required()
              .oneOf(["Grooming", "Bağça", "Baytar", "Gəzinti"]),
          })}
        />

        <form id="contact">
          <h1>Sualınız var?</h1>
          <div className="form-elements">
            <input htmlFor="name" type="text" name="name" placeholder="Ad" />
          </div>

          <div className="form-elements">
            <input type="text" name="surname" placeholder="Soyad" />
          </div>
          <div className="form-elements">
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email"
              minLength="3"
              maxLength="64"
            />
          </div>
          <div className="form-elements">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Mesajınızı qeyd edin"
            ></textarea>
          </div>
          <div className="form-elements">
            <button type="submit">Mesaj Göndər</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
