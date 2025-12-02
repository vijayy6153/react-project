import { useEffect, useState } from "react";

export default function Applications() {

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/api/homepage")
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) setData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

   if (!data) return <div>Loading...</div>;
  return (
    <section className="orionApps position-relative w-100">
      <div className="container">
        <h4 className="text-center fw-normal mb-3">{data.some_orion_title}</h4>
        <ul className="logoList position-relative d-flex flex-wrap justify-content-around p-2 p-md-0">
          <li className="z-3 position-relative d-flex flex-column align-items-center m-2 m-md-4">
            <a href="https://ngl.org/" target="_blank" className="d-flex flex-column align-items-center position-relative">
              <img src={`http://localhost:5000/uploads/homepage/${data.logo1}`}  alt="NGL" className="logoIMG mb-2" />
              <span className="fw-normal text-center">{data.logo1_text}</span>
            </a>
          </li>
          <li className="z-3 position-relative d-flex flex-column align-items-center m-2 m-md-4">
            <a href="https://orionhealthmate.com/" target="_blank" className="d-flex flex-column align-items-center position-relative">
              <img src={`http://localhost:5000/uploads/homepage/${data.logo2}`}  alt="OrionHealthMate" className="logoIMG mb-2" />
              <span className="fw-normal text-center">{data.logo2_text}</span>
            </a>
          </li>
          <li className="z-3 position-relative d-flex flex-column align-items-center m-2 m-md-4">
            <a href="https://airwerx.ai/" target="_blank" className="d-flex flex-column align-items-center position-relative">
              <img src={`http://localhost:5000/uploads/homepage/${data.logo3}`}  alt="AIRWERX" className="logoIMG mb-2" />
              <span className="fw-normal text-center">{data.logo3_text}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
