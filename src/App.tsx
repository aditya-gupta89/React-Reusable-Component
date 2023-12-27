import AppClass from "./app.module.scss";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PdfFile from "./components/pdf/pdfExample";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {
        /* <PDFViewer height="100%" style={{ border: "none" }} width="100%">
      <PdfFile />
    </PDFViewer> */
        // To view the PDF we use PDFViewer to show the pdf in the dom
      }
      {
        /* <PDFDownloadLink
        document={<PdfFile />}
        fileName="Aditya"
        style={{ textDecoration: "none" }}
      >
        <button>Download</button>
      </PDFDownloadLink> */
        // to download the pdf we have PDFDownloadLink wrapper component
      }
    </div>
  );
}

export default App;
