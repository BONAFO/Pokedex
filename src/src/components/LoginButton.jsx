"use client";

import { useState } from "react";

import LoginModal from "./LoginModal";

import { useAuth } from "@/src/contexts/AuthContext";

export default function LoginButton() {
  const [showModal, setShowModal] = useState(false);

  const { isLoggedIn, logout } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <button
          onClick={logout}
          className="
                        rounded-xl
                        border
                        border-red-500
                        px-4
                        py-2
                        text-red-400
                        transition
                        hover:bg-red-500/10
                    "
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => setShowModal(true)}
          className="
                        rounded-xl
                        bg-red-600
                        px-4
                        py-2
                        text-white
                        transition
                        hover:bg-red-700
                    "
        >
          Login
        </button>
      )}

      {showModal && <LoginModal close={() => setShowModal(false)} />}
    </>
  );
}
