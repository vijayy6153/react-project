export default function Footer() {
  return (
    <footer className="py-3">
      <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">
        <h5 className="copyRight text-center text-lg-start m-0 fw-normal">
          ©{new Date().getFullYear()} <a href="https://logistiwerx.com/" target="_blank" className="fw-medium">LogistiWerx, Inc.</a> All rights reserved.
        </h5>

        <div className="quickLinks d-flex justify-content-center my-2 my-lg-0">
          <a href="/contact" className="mx-3 fw-normal"><i>Contact</i></a>
          <a href="/privacy-policy" className="mx-3 fw-normal"><i>Privacy Policy</i></a>
          <a href="/terms-of-use" className="mx-3 fw-normal"><i>EULA</i></a>
        </div>

        <p className="patentProtected text-center text-lg-end fw-normal">Patent Protected</p>
      </div>
    </footer>
  );
}
