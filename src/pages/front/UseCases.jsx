import React from "react";

// Import all images from src/assets/images
import img4 from "../../assets/images/iMG-4.jpg";
import img5 from "../../assets/images/iMG-5.jpg";
import img6 from "../../assets/images/iMG-6.jpg";
import img7 from "../../assets/images/iMG-7.jpg";
import icon17 from "../../assets/images/iCon-17.svg";

import { useEffect, useState } from "react";

export default function UseCases() {

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/api/usecases")
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) setData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

   if (!data) return <div>Loading...</div>;

  return (
    <>
      <section className="secUseCases position-relative w-100 py-4 pb-5">
        <div className="container-fluid">
          <div className="row">
            {/* Transportation */}
            <div className="col-12 col-md-6 col-xl-3 my-3">
              <div className="useCasesBox position-relative d-flex flex-column justify-content-between h-100">
                <div className="position-relative z-3">
                  <div className="iMG position-relative z-3 mx-3">
                    <img src={`http://localhost:5000/uploads/homepage/${data.image1}`} alt="Transportation" className="w-100 position-relative z-2" />
                  </div>
                  <div className="teXt position-relative z-4 px-3 pb-3 d-flex flex-column align-items-center">
                    <h4 className="py-2 px-3 text-center">{data.title1}</h4>
                    <p className="w-100 mt-3">
                      {data.content1}
                    </p>
                  </div>
                </div>
                <button
                className="readMore position-relative z-3 mx-3 mb-3 text-start p-0 btn btn-link"
                style={{ background: "none", boxShadow: "none",color: "#03fcfb", }}
                data-bs-toggle="modal"
                data-bs-target="#useCases-1">
                  <i><u>Read more</u></i>
                </button>
              </div>
            </div>

            {/* Home Health Care */}
            <div className="col-12 col-md-6 col-xl-3 my-3">
              <div className="useCasesBox position-relative d-flex flex-column justify-content-between h-100">
                <div className="position-relative z-3">
                  <div className="iMG position-relative z-3 mx-3">
                    <img src={`http://localhost:5000/uploads/homepage/${data.image2}`} alt="Home Health Care" className="w-100 position-relative z-2" />
                  </div>
                  <div className="teXt position-relative z-4 px-3 pb-3 d-flex flex-column align-items-center">
                    <h4 className="py-2 px-3 text-center">{data.title2}</h4>
                    <p className="w-100 mt-3">
                     {data.content2}
                    </p>
                  </div>
                </div>
                <button
                  className="readMore position-relative z-3 mx-3 mb-3 text-start p-0 btn btn-link"
                  style={{ background: "none", boxShadow: "none",color: "#03fcfb", }}
                  data-bs-toggle="modal"
                  data-bs-target="#useCases-2"
                >
                  <i><u>Read more</u></i>
                </button>
              </div>
            </div>

            {/* Autonomous Freight */}
            <div className="col-12 col-md-6 col-xl-3 my-3">
              <div className="useCasesBox position-relative d-flex flex-column justify-content-between h-100">
                <div className="position-relative z-3">
                  <div className="iMG position-relative z-3 mx-3">
                    <img src={`http://localhost:5000/uploads/homepage/${data.image3}`} alt="Autonomous Freight" className="w-100 position-relative z-2" />
                  </div>
                  <div className="teXt position-relative z-4 px-3 pb-3 d-flex flex-column align-items-center">
                    <h4 className="py-2 px-3 text-center">{data.title3}</h4>
                    <p className="w-100 mt-3">
                      {data.content3}
                    </p>
                  </div>
                </div>
                <button
                  className="readMore position-relative z-3 mx-3 mb-3 text-start p-0 btn btn-link"
                  style={{ background: "none", boxShadow: "none",color: "#03fcfb", }}
                  data-bs-toggle="modal"
                  data-bs-target="#useCases-3"
                >
                  <i><u>Read more</u></i>
                </button>
              </div>
            </div>

            {/* USDoT FMCSA eLog HOS */}
            <div className="col-12 col-md-6 col-xl-3 my-3">
              <div className="useCasesBox position-relative d-flex flex-column justify-content-between h-100">
                <div className="position-relative z-3">
                  <div className="iMG position-relative z-3 mx-3">
                    <img src={`http://localhost:5000/uploads/homepage/${data.image4}`} alt="USDoT FMCSA eLog HOS" className="w-100 position-relative z-2" />
                  </div>
                  <div className="teXt position-relative z-4 px-3 pb-3 d-flex flex-column align-items-center">
                    <h4 className="py-2 px-3 text-center">{data.title4}</h4>
                    <p className="w-100 mt-3">
                     {data.content4}
                    </p>
                  </div>
                </div>
                <button
                  className="readMore position-relative z-3 mx-3 mb-3 text-start p-0 btn btn-link"
                  style={{ background: "none", boxShadow: "none",color: "#03fcfb", }}
                  data-bs-toggle="modal"
                  data-bs-target="#useCases-4"
                >
                  <i><u>Read more</u></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <div className="modal fade" id="useCases-1" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body d-flex flex-column align-items-center">
              <button type="button" className="btn-close mb-5" data-bs-dismiss="modal" aria-label="Close">
                <img src={icon17} alt="Close" />
              </button>
              <h4 className="w-100 mb-3" style={{ color: '#fff' }}>{data.title1}</h4>
              <p className="w-100 mb-3">{data.content1}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Repeat for other modals with images if needed */}
      <div className="modal fade" id="useCases-2" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body d-flex flex-column align-items-center">
              <button type="button" className="btn-close mb-5" data-bs-dismiss="modal" aria-label="Close">
                <img src={icon17} alt="Close" />
              </button>
              <h4 className="w-100 mb-3" style={{ color: '#fff' }}>{data.title2}</h4>
              <p className="w-100 mb-3">{data.content2}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal 3 */}
      <div className="modal fade" id="useCases-3" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body d-flex flex-column align-items-center">
              <button type="button" className="btn-close mb-5" data-bs-dismiss="modal" aria-label="Close">
                <img src={icon17} alt="Close" />
              </button>
              <h4 className="w-100 mb-3" style={{ color: '#fff' }}>{data.title3}</h4>
              <p className="w-100 mb-3">{data.content3}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal 4 */}
      <div className="modal fade" id="useCases-4" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body d-flex flex-column align-items-center">
              <button type="button" className="btn-close mb-5" data-bs-dismiss="modal" aria-label="Close">
                <img src={icon17} alt="Close" />
              </button>
              <h4 className="w-100 mb-3" style={{ color: '#fff' }}>{data.title4}</h4>
              <p className="w-100 mb-3">{data.content4}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
