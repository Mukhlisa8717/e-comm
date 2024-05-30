import React, { useEffect } from "react";
import "./Admin.scss";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="admin">
      <div className="container">
        <div className="admin__cont">
          <h1>Admin panel</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur cupiditate inventore, deserunt magnam provident dolores
            blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore
            laudantium quam deleniti id consequatur. Minus delectus officia unde
            quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis,
            quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur cupiditate inventore, deserunt magnam provident dolores
            blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore
            laudantium quam deleniti id consequatur. Minus delectus officia unde
            quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis,
            quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur cupiditate inventore, deserunt magnam provident dolores
            blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore
            laudantium quam deleniti id consequatur. Minus delectus officia unde
            quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis,
            quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
          </p>
          <button onClick={handleLogout}>Log out</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
