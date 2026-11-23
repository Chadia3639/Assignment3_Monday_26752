import { useState } from "react";
import axios from "axios";
import ClinicButton from "./ClinicButton";
import { toast } from "react-toastify";

function Office({ onSave }) {
   const [officeName, setOfficeName] = useState("");
   const [officeNumber, setOfficeNumber] = useState("");

   function clearForm() {
      setOfficeName("");
      setOfficeNumber("");
   }

   async function saveOffice() {
      if (!officeName.trim()) {
         toast.error("Office name is required.");
         return;
      }
      if (!officeNumber.trim()) {
         toast.error("Office number is required.");
         return;
      }
      try {
         await axios.post("http://localhost:8082/api/office/save", {
            name: officeName,
            number: officeNumber
         });
         toast.success("Office saved successfully!");
         clearForm();
         if (onSave) onSave();
      } catch (error) {
         toast.error("Failed to save office: " + error.message);
      }
   }

   return (
      <div>
         <h1>Save Office</h1>
         <label>Office Name: </label>
         <input type="text" value={officeName} onChange={(e) => setOfficeName(e.target.value)} />
         <br /><br />
         <label>Office Number: </label>
         <input type="text" value={officeNumber} onChange={(e) => setOfficeNumber(e.target.value)} />
         <br /><br />
         <ClinicButton label="SAVE OFFICE" onClick={saveOffice} />
         <ClinicButton label="CLEAR" onClick={clearForm} />
      </div>
   );
}

export default Office;
