import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  async function handleRegister() {
    setError("");
    setSuccess("");

    if (
      !name ||
      !username ||
      !email ||
      !phone ||
      !address ||
      !password
    ) {
      setError("لطفاً تمام فیلدها را پر کنید");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/user-auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            username,
            email,
            phone,
            address,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      setSuccess("ثبت نام با موفقیت انجام شد");

      setTimeout(() => {
        navigate("/user-login");
      }, 1000);

    } catch (error) {
      console.error(error);
      setError("خطا در اتصال به سرور");
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-5">

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8">

        <h1 className="text-2xl text-yellow-400 font-bold text-center mb-8">
          ثبت نام
        </h1>

        <input
          dir="rtl"
          type="text"
          placeholder="نام و نام خانوادگی"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-zinc-800 rounded-xl p-3 mb-4 text-right outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <input
          dir="rtl"
          type="text"
          placeholder="نام کاربری"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-zinc-800 rounded-xl p-3 mb-4 text-right outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <input
          dir="rtl"
          type="email"
          placeholder="ایمیل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-zinc-800 rounded-xl p-3 mb-4 text-right outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <input
          dir="rtl"
          type="tel"
          placeholder="شماره تماس"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full bg-zinc-800 rounded-xl p-3 mb-4 text-right outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <input
          dir="rtl"
          type="text"
          placeholder="آدرس"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full bg-zinc-800 rounded-xl p-3 mb-4 text-right outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <input
          dir="rtl"
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-zinc-800 rounded-xl p-3 mb-4 text-right outline-none focus:ring-2 focus:ring-yellow-500"
        />

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">
            {error}
          </p>
        )}

        {success && (
          <p className="text-green-500 text-sm text-center mb-4">
            {success}
          </p>
        )}

        <button
          onClick={handleRegister}
          className="w-full bg-yellow-500 text-black font-bold p-3 rounded-xl hover:bg-yellow-400 transition"
        >
          ثبت نام
        </button>

        <button
          onClick={() => navigate("/user-login")}
          className="w-full mt-3 text-zinc-400 hover:text-yellow-400 transition"
        >
          قبلاً حساب دارید؟ ورود
        </button>

      </div>
    </div>
  );
}

export default Register;