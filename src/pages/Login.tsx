import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleLogin() {
    setError("");

    if (!username || !password) {
      setError("لطفاً نام کاربری و رمز عبور را وارد کنید");
      return;
    }

    try {
      const response = await fetch(
        "https://cafe-menu-backend-615c.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      // ذخیره Token
      localStorage.setItem("token", data.token);

      // ورود به پنل ادمین
      navigate("/admin");

    } catch (error) {
      console.error(error);

      setError("خطا در اتصال به سرور");
    }
  }

  return (
    <div
      className="
        min-h-screen
        bg-black
        text-white
        flex
        items-center
        justify-center
        px-5
      "
    >

      <div
        className="
          w-full
          max-w-md
          bg-zinc-900
          border
          border-zinc-800
          rounded-2xl
          p-6
          md:p-8
        "
      >

        <h1 className="text-2xl text-yellow-400 font-bold text-center mb-8">
          ورود مدیر
        </h1>

        {/* Username */}

        <input
          dir="rtl"
          type="text"
          placeholder="نام کاربری"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="
            w-full
            bg-zinc-800
            rounded-xl
            p-3
            mb-4
            text-right
            outline-none
            focus:ring-2
            focus:ring-yellow-500
          "
        />

        {/* Password */}

        <input
          dir="rtl"
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="
            w-full
            bg-zinc-800
            rounded-xl
            p-3
            mb-4
            text-right
            outline-none
            focus:ring-2
            focus:ring-yellow-500
          "
        />

        {/* Error */}

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">
            {error}
          </p>
        )}

        {/* Login Button */}

        <button
          onClick={handleLogin}
          className="
            w-full
            bg-yellow-500
            text-black
            font-bold
            p-3
            rounded-xl
            hover:bg-yellow-400
            hover:scale-105
            transition
          "
        >
          ورود
        </button>

      </div>

    </div>
  );
}

export default Login;