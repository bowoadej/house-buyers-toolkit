import Disclaimer from "./Disclaimer";

export default function Header() {

    return (
        <div className='header'>
            <div className='header-container'>
                <h1>House Buyers Toolkit</h1>
                <div className="subheading">
                    <Disclaimer />

                </div>

            </div>
            <br></br>
        </div >
    )
}