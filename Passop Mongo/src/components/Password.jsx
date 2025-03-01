import React from "react";
import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const Password = () => {
  const [form, setform] = useState({ url: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);
  const ref = useRef();

  useEffect(() => {
    getpassword();
  }, []);
  const getpassword = async () => {
    let req = await fetch("http://localhost:3000/");
    let passwords = await req.json();

    setpasswordArray(passwords);
  };
  const copyText = (text) => {
    window.navigator.clipboard.writeText(text);
    toast.success("🦄 Added to the clipboard!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const handleclick = () => {
    const password = document.getElementById("password");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
    // alert("Please")
    if (ref.current.src.includes("/eye-line.svg")) {
      ref.current.src = "/eye-off-line.svg";
    } else {
      ref.current.src = "/eye-line.svg";
    }
  };
  const savepassword = async () => {
    console.log(form);
    toast.success("🦄 Saved Password!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    await fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ ...form, id: uuidv4() }),
    });
    await fetch("http://localhost:3000/", {
      method: "DELETE",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ id: form.id }),
    });

    console.log(passwordArray);
    setform({ url: "", username: "", password: "" });
  };
  const deletepassword = async (id) => {
    let c = confirm("Do you really want to delete??");
    if (c) {
      setpasswordArray(passwordArray.filter((item) => item.id !== id));

      await fetch("http://localhost:3000/", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
    }
  };
  const editpassword = async (id) => {
    setform({ ...passwordArray.filter((item) => item.id === id)[0], id: id });
    setpasswordArray(passwordArray.filter((item) => item.id !== id));
  };
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>

      <div className=" flex mt-5 justify-center p-4">
        <div className="w-full max-w-md bg-white/80 shadow-xl border border-green-200 rounded-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white p-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
              </svg>
            </div>
            <h2 className="text-center text-2xl font-bold">Secured.</h2>
            <p className="text-center text-green-100">
              Hamro personal password Manager!
            </p>
          </div>

          {/* Form Content */}
          <div className=" relative p-6 space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="url"
                className="text-sm font-medium flex items-center gap-2 text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                Website URL
              </label>
              <input
                onChange={handlechange}
                value={form.url}
                id="url"
                name="url"
                placeholder="Enter the URL of the site"
                className="w-full px-4 py-2 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="username"
                className="text-sm font-medium flex items-center gap-2 text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Username
              </label>
              <input
                onChange={handlechange}
                value={form.username}
                id="username"
                name="username"
                placeholder="Enter your username"
                className="w-full px-4 py-2 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium flex items-center gap-2 text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                </svg>
                Password
              </label>
              <input
                onChange={handlechange}
                value={form.password}
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
              />
              <span className="absolute right-10 bottom-11 ">
                <img
                  ref={ref}
                  onClick={handleclick}
                  className="w-5"
                  src="/eye-line.svg"
                  alt=""
                />
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 pb-6 flex justify-center">
            <button
              onClick={savepassword}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Save Credentials
            </button>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 mt-5 mx-auto">
          <div className="flex flex-col  text-center w-full">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Passwords
            </h1>
          </div>

          {passwordArray.length == 0 && (
            <div className="flex mx-auto p-6 w-fit bg-white shadow-lg rounded-2xl border border-gray-300">
              <h3 className="text-xl font-semibold text-gray-800">
                No passwords, please enter your credentials
              </h3>
            </div>
          )}
          {passwordArray.length != 0 && (
            <div className="lg:w-2/3 w-full mx-auto overflow-auto mt-5 rounded-2xl">
              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead className="text-center">
                  <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-green-100 rounded-tl rounded-bl">
                      Website Url
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-green-300">
                      Usename
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-green-200">
                      Password
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-green-200">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {passwordArray.map((item) => {
                    return (
                      <tr
                        key={item.url}
                        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold"
                      >
                        <td className="px-4 py-3">
                          {item.url}{" "}
                          <img
                            className="mx-auto"
                            width={20}
                            src="/file-copy-fill.svg"
                            alt=""
                            onClick={() => {
                              copyText(item.url);
                            }}
                          />
                        </td>
                        <td className="px-4 py-3">
                          {item.username}{" "}
                          <img
                            className="mx-auto"
                            width={20}
                            src="/file-copy-fill.svg"
                            alt=""
                            onClick={() => {
                              copyText(item.username);
                            }}
                          />
                        </td>
                        <td className="px-4 py-3">
                          {item.password}{" "}
                          <img
                            className="mx-auto"
                            width={20}
                            src="/file-copy-fill.svg"
                            alt=""
                            onClick={() => {
                              copyText(item.password);
                            }}
                          />
                        </td>
                        <td className="px-4 py-3 flex gap-5">
                          <span
                            onClick={() => {
                              editpassword(item.id);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/exymduqj.json"
                              trigger="hover"
                              style={{ width: "30px", height: "30px" }}
                            ></lord-icon>
                          </span>
                          <span
                            onClick={() => {
                              deletepassword(item.id);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/hwjcdycb.json"
                              trigger="hover"
                              style={{ width: "30px", height: "30px" }}
                            ></lord-icon>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Password;
