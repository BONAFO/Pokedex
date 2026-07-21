"use client";

import { useState } from "react";

import { useAuth } from "@/src/contexts/AuthContext";

export default function LoginModal({ close }) {
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/user", {
        password,
      });

      if (response.data.success) {
        login();
        close();
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    <div
      className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                bg-black/70
            "
      onClick={close}
    >
      <div
        className="
                    w-80
                    rounded-2xl
                    border
                    border-neutral-800
                    bg-neutral-950
                    p-6
                "
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          className="
                        mb-4
                        text-xl
                        font-bold
                        text-white
                    "
        >
          Login
        </h2>

        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
          placeholder="Password"
          className="
                        w-full
                        rounded-lg
                        border
                        border-neutral-700
                        bg-neutral-900
                        px-3
                        py-2
                        text-white
                        outline-none
                        focus:border-red-500
                    "
        />

        {error && (
          <p className="mt-2 text-sm text-red-400">Password incorrecto</p>
        )}

        <div
          className="
                        mt-5
                        flex
                        justify-end
                        gap-3
                    "
        >
          <button
            onClick={close}
            className="
                            rounded-lg
                            px-4
                            py-2
                            text-neutral-400
                        "
          >
            Cancelar
          </button>

          <button
            onClick={handleLogin}
            className="
                            rounded-lg
                            bg-red-600
                            px-4
                            py-2
                            text-white
                            hover:bg-red-700
                        "
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
