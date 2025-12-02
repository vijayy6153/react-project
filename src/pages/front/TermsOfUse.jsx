import React from "react";
import { useEffect, useState } from "react";

export default function PrivacyPolicy() {

  const [data, setData] = useState(null);
      useEffect(() => {
        fetch("http://localhost:5000/api/terms")
          .then(res => res.json())
          .then(res => {
            if (res.status === 200) setData(res.data);
          })
          .catch(err => console.log(err));
      }, []);
  
    if (!data) return <div>Loading...</div>;

  return (
    <section class="secTextOnly position-relative w-100 py-4 pb-5">
            <div class="container-fluid">
                <div class="teXt">
                    <div dangerouslySetInnerHTML={{ __html: data.content }} />
                </div>
            </div>
        </section>
  );
}
