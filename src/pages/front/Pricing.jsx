import React, { useEffect, useState } from "react";
import axios from "axios";

// Default images/icons as placeholders if needed
import imgPlaceholder from "../../assets/images/iMG-2.png";
import imgBtn from "../../assets/images/iMG-3.svg";
import iconPlaceholder from "../../assets/images/iCon-1.svg";

export default function Pricing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/pricing")
      .then((res) => {
        if (res.data.status === 200 && res.data.data) {
          // Map your API data to match the structure you need
          const mappedProducts = res.data.data.map((p) => ({
            id: p.id,
            name: p.name,
            price: `$${p.price}`, // Add $ if needed
            img: p.img ? `http://localhost:5000/uploads/homepage/${p.img}` : imgPlaceholder, // adjust path if needed
            includes: p.features || [], // Assuming features is an array
            annual: [], // If your API doesn't return this, keep empty or map accordingly
            radios: [], // map if you have radio data
            protocols: [], // map if you have protocol data
            power: [], // map if you have power data
          }));
          setProducts(mappedProducts);
        } else {
          setProducts([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching pricing:", err);
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center py-4">Loading pricing data...</p>;
  }

  return (
    <section className="secPricing position-relative w-100 py-4">
      <div className="container mb-4">
        <div className="row">
          {products.map((p) => (
            <div key={p.id} className="col-12 col-md-6 col-xl-3 my-3">
              <div className="pricingBox position-relative overflow-hidden pb-2 h-100">
                {/* IMAGE + PRICE */}
                <div className="iMGPrice d-flex align-items-center p-2">
                  <img src={p.img} alt={p.name} className="iMG p-1" />
                  <div className="Price d-flex flex-column align-items-end p-2">
                    <h4>{p.name}</h4>
                    <div className="Value text-end">
                      <p>{p.price}</p>
                    </div>
                  </div>
                </div>

                <hr className="m-2" />

                {/* BUTTON */}
                <div className="btniMG d-flex justify-content-center p-2">
                  <a href={`/contact?price=${p.price}`} className="iMG position-relative">
                    <img src={imgBtn} alt="" className="position-relative z-2" />
                  </a>
                </div>

                <hr className="m-2" />

                {/* Features */}
                <p className="fw-bold px-2">Includes:</p>
                <ul className="List">
                  {p.includes.length > 0 ? (
                    p.includes.map((x, i) => (
                      <li key={i} className="d-flex align-items-start p-2">
                        <img
                          src={`http://localhost:5000/uploads/homepage/${x.icon || iconPlaceholder}`}
                          alt=""
                          className="iCon flex-shrink-0"
                        />
                        <p>{x.text}</p>
                      </li>
                    ))
                  ) : (
                    <li className="p-2">No features available</li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
