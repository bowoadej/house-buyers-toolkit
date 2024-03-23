import { useState } from "react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useContext } from "react";
import { PdfContext } from "./FeatureFlags";

export default function ViewingChecklist() {

    const [isActive, setIsActive] = useState(false);
    const divElement = document.getElementById("accordion-item-viewing-checklist");

    const pdfValue = useContext(PdfContext);

    function generatePDF() {
        const content = document.getElementById('viewing-checklist')!;
        const text = content.innerText;
        const textArea = content.querySelector('textarea')!;
        const valueOfTextArea = textArea.value;


        html2canvas(content).then((canvas) => {
            const doc = new jsPDF();
            doc.text(text, 10, 10);
            doc.text(valueOfTextArea, 30, 30);
            doc.save('property_viewing_checklist_report.pdf');
        });
    }

    function toggleActive() {
        if (isActive) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    };



    return (
        <div className="accordion-viewing-checklist">
            <div className="accordion-item-viewing-checklist" id="accordion-item-viewing-checklist">
                <div className="accordion-title" onClick={() => toggleActive()}><h2>House Viewing Checklist<div className="accordion-icon">{isActive ? '-' : '+'}</div></h2></div>
                {isActive &&
                    <div className="viewing-checklist" id="viewing-checklist" >

                        <div className="checklist" id="ViewingChecklist">
                            <div id="section-1">
                                <h3>Section 1: Exterior</h3>
                                <div id="id-1">
                                    <input type="checkbox" id="driveway" name="driveway" value="driveway" />
                                    <label>Driveway</label>
                                </div>
                                <div id="id-2">
                                    <input type="checkbox" id="patio" name="patio" value="patio" />
                                    <label>Patio</label>
                                </div>
                                <div id="id-3">
                                    <input type="checkbox" id="garden" name="garden" value="garden" />
                                    <label>Garden</label>
                                </div>
                                <br></br>
                                <div id="section-1-textarea">
                                    <label htmlFor="section-one-text-area">Comments:</label>
                                    <br></br>
                                    <textarea id="section-one-text-area"></textarea>
                                </div>
                            </div>
                            <div id="section-2">
                                <h3>Section 2: Interior</h3>
                                <div id="id-1">
                                    <input type="checkbox" id="bedroom" name="bedroom" value="bedroom" />
                                    <label>Bedroom</label>
                                </div>
                                <div id="id-2">
                                    <input type="checkbox" id="bathroom" name="bathroom" value="bathroom" />
                                    <label>Bathroom</label>
                                </div>
                                <div id="id-3">
                                    <input type="checkbox" id="kitchen" name="kitchen" value="kitchen" />
                                    <label>Kitchen</label>
                                </div>
                                <br></br>
                                <div id="section-2-textarea">
                                    <label htmlFor="section-two-text-area">Comments:</label>
                                    <br></br>
                                    <textarea id="section-two-text-area"></textarea>
                                </div>
                            </div>
                            <div id="section-2">
                                <h3>Section 3: Miscellaneous</h3>
                                <div id="id-1">
                                    <input type="checkbox" id="burglar-alarm" name="burglar-alarm" value="burglar-alarm" />
                                    <label>Bedroom</label>
                                </div>
                                <div id="id-2">
                                    <input type="checkbox" id="smoke-alarm" name="smoke-alarm" value="smoke-alarm" />
                                    <label>Bathroom</label>
                                </div>
                                <div id="id-3">
                                    <input type="checkbox" id="carbon-monoxide-alarm" name="carbon-monoxide-alarm" value="carbon-monoxide-alarm" />
                                    <label>Kitchen</label>
                                </div>
                                <div id="id-4">
                                    <input type="checkbox" id="internet-speed" name="internet-speed" value="internet-speed" />
                                    <label>Internet Speed</label>
                                </div>
                                <div id="id-5">
                                    <input type="checkbox" id="planning-permission" name="planning-permission" value="planning-permission" />
                                    <label>Planning Permission</label>
                                </div>
                                <br></br>
                                <div id="section-3-textarea">
                                    <label htmlFor="section-three-text-area">Comments:</label>
                                    <br></br>
                                    <textarea id="section-three-text-area"></textarea>
                                </div>
                            </div> {pdfValue &&
                                <button onClick={generatePDF}>Generate PDF</button>
                            }

                        </div>
                    </div>
                }
            </div>
        </div >
    )

}