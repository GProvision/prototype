import { useState } from "react";
import Style from "../styles/pages/Ingresar.module.css";
import {
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import useUser from "../context/useUser";
const Ingresar = () => {
  const { access } = useUser();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const submit = (data) => {
    if (!data.user) {
      toast.error("Usuario es requerido");
      return;
    }
    if (!data.password) {
      toast.error("Contraseña es requerida");
      return;
    }
    if (data.user === "admin" && data.password === "admin") {
      toast.success("Ingresando");
      access({ user: data.user });
      navigate("/");
    } else {
      toast.error("Usuario o contraseña deben ser iguales");
    }
  };
  return (
    <section id={Style.ingresar}>
      <picture>
        <img src="/brand.svg" alt="" />
      </picture>
      <form onSubmit={handleSubmit(submit)}>
        <fieldset>
          <label htmlFor="user">
            <UserIcon fill="var(--indi-900)" width={24} height={24} />
          </label>
          <input
            type="text"
            id="user"
            name="user"
            placeholder="Usuario"
            {...register("user")}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">
            <LockClosedIcon fill="var(--indi-900)" width={24} height={24} />
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Contraseña"
            {...register("password")}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeIcon fill="var(--indi-900)" width={24} height={24} />
            ) : (
              <EyeSlashIcon fill="var(--indi-900)" width={24} height={24} />
            )}
          </button>
        </fieldset>
        <button type="submit">Ingresar</button>
      </form>
    </section>
  );
};

export default Ingresar;
