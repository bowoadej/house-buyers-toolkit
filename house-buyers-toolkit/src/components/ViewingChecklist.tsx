import { useState } from "react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useContext } from "react";
import { FeatureFlagsContext } from "./FeatureFlags";
import { text } from "stream/consumers";


export default function ViewingChecklist() {

    const [isActive, setIsActive] = useState(false);
    const divElement = document.getElementById("accordion-item-viewing-checklist");

    const pdfValue = useContext(FeatureFlagsContext).PdfContext;

    function generatePDF() {
        const sectionOneContent = document.getElementById('section-1')!.innerText;
        const sectionTwoContent = document.getElementById('section-2')!.innerText;
        const sectionThreeContent = document.getElementById('section-3')!.innerText;
        const textareaOne = (document.getElementById('section-one-text-area') as HTMLInputElement).value;
        const textareaTwo = (document.getElementById('section-two-text-area') as HTMLInputElement).value;
        const textareaThree = (document.getElementById('section-three-text-area') as HTMLInputElement).value;



        const pdf = new jsPDF();

        //Title
        pdf.setFontSize(50)
        pdf.text("House Buyers Toolkit", 10, 20);

        //Section One
        pdf.setFontSize(22);
        pdf.text("Section One:", 20, 40);

        pdf.setFontSize(16)
        pdf.text([sectionOneContent, textareaOne], 20, 50);

        //Section Two
        pdf.setFontSize(22)
        pdf.text("Section Two:", 20, 70);

        pdf.setFontSize(16)
        pdf.text([sectionTwoContent, textareaTwo], 20, 80);

        //Section Three

        pdf.setFontSize(22)
        pdf.text("Section Three:", 20, 100);

        pdf.setFontSize(16)
        pdf.text([sectionThreeContent, textareaThree], 20, 110);

        pdf.save('property_viewing_checklist_report.pdf');

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
                                {pdfValue &&
                                    <div id="section-1-textarea">
                                        <label htmlFor="section-one-text-area">Comments:</label>
                                        <br></br>
                                        <textarea id="section-one-text-area"></textarea>
                                    </div>
                                }
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
                                {pdfValue &&
                                    < div id="section-2-textarea">
                                        <label htmlFor="section-two-text-area">Comments:</label>
                                        <br></br>
                                        <textarea id="section-two-text-area"></textarea>
                                    </div>
                                }
                            </div>
                            <div id="section-3">
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
                                {pdfValue &&
                                    <div id="section-3-textarea">
                                        <label htmlFor="section-three-text-area">Comments:</label>
                                        <br></br>
                                        <textarea id="section-three-text-area"></textarea>
                                    </div>
                                }
                            </div> <br></br>{pdfValue &&
                                <button onClick={generatePDF}>Generate PDF</button>
                            }

                        </div>
                    </div>
                }
            </div>
        </div >
    )

}