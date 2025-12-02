import React from "react";

// Import all images from src/assets/images
import icon18 from "../../assets/images/iCon-18.svg";
import icon19 from "../../assets/images/iCon-19.svg";
import icon20 from "../../assets/images/iCon-20.png";
import icon22 from "../../assets/images/iCon-22.png";

import img8 from "../../assets/images/iMG-8.jpg";
import img9 from "../../assets/images/iMG-9.jpg";
import img10 from "../../assets/images/iMG-10.jpg";

import { useEffect, useState } from "react";

export default function Products() {
    const [data, setData] = useState(null);
    useEffect(() => {
      fetch("http://localhost:5000/api/productspage")
        .then(res => res.json())
        .then(res => {
          if (res.status === 200) setData(res.data);
        })
        .catch(err => console.log(err));
    }, []);

   if (!data) return <div>Loading...</div>;

  return (
    <>
      <section className="secProducts position-relative w-100 py-5">
        <div className="container-fluid pb-3">
          <div className="productsList d-flex flex-wrap justify-content-between">
            {/* Two Products */}
            <div className="twoProduct position-relative">
              <div className="d-flex flex-column align-items-center position-relative z-3">
                <h4 className="py-2 px-3 text-center d-flex align-items-center">
                  <img src={icon18} alt="" className="iCon me-2 flex-shrink-0" />
                  {data.centralized_title}
                </h4>

                <ul className="d-flex flex-wrap justify-content-between">
                  <li className="position-relative px-4 my-3">
                    <div className="tiTle-iMG position-relative mb-4">
                      <div className="BG position-relative z-2">
                        <div className="p-2 text-center">
                          <p className="fw-bold clrWhite">{data.sub_title1}</p>
                          <p>{data.sub_text1}</p>
                        </div>
                        <img src={`http://localhost:5000/uploads/homepage/${data.image1}`} alt="" className="iMG w-100" />
                      </div>
                    </div>

                    {data.content1?.split(",").map((feature, i) => (
                      <p key={i} className="iconList d-flex align-items-start my-1">
                        <img src={icon20} alt="" className="me-2 flex-shrink-0" />
                        {feature.trim()}
                      </p>
                    ))}
                    
                  </li>

                  <li className="position-relative px-4 my-3">
                    <div className="tiTle-iMG position-relative mb-4">
                      <div className="BG position-relative z-2">
                        <div className="p-2 text-center">
                          <p className="fw-bold clrWhite">{data.sub_title2}</p>
                          <p>{data.sub_text2}</p>
                        </div>
                        <img src={`http://localhost:5000/uploads/homepage/${data.image2}`} alt="" className="iMG w-100" />
                      </div>
                    </div>

                    <p className="iconList d-flex align-items-start my-2">
                      <img src={icon20} alt="" className="me-2 flex-shrink-0" />
                      {data.content2}
                    </p>

                    <div className="highLighted text-center p-2 my-4">
                      <p>
                        {data.bottom_text}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Arrow image */}
            <img src={icon22} alt="" className="iMG-Arrow" />

            {/* One Product */}
            <div className="oneProduct position-relative">
              <div className="d-flex flex-column align-items-center position-relative z-3">
                <h4 className="py-2 px-3 text-center d-flex align-items-center">
                  <img src={icon19} alt="" className="iCon me-2 flex-shrink-0" />
                 {data.wireless_title}
                </h4>

                <ul className="d-flex flex-wrap justify-content-between">
                  <li className="position-relative px-4 my-3">
                    <div className="tiTle-iMG position-relative mb-4">
                      <div className="BG position-relative z-2">
                        <div className="p-2 text-center">
                          <p className="fw-bold clrWhite">{data.wireless_title1}</p>
                          <p>{data.wireless_text1}</p>
                        </div>
                        <img src={`http://localhost:5000/uploads/homepage/${data.wireless_image}`} alt="" className="iMG w-100" />
                      </div>
                    </div>

                    {/* Sensor Features */}
                    {data.wireless_content?.split(",").map((feature, i) => (
                      <p key={i} className="iconList d-flex align-items-start my-1">
                        <img src={icon20} alt="" className="me-2 flex-shrink-0" />
                        {feature.trim()}
                      </p>
                    ))}

                    <div className="highLighted text-center p-2">
                      <p>{data.wireless_righttext}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
