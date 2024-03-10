import { useState } from "react";

export default function ViewingChecklist() {

    return (
        <div id="noming">
            <h2>Viewing Checklist</h2>
            <div id="ViewingChecklist">
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
                </div>
            </div>
        </div>
    )

}