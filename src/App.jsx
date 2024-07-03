import "./App.css";
import { useState } from "react";




function App() {
  const [next, setNext] = useState(false);
  const [formdata, setFormdata] = useState({
    cardholder: "",
    cardnumber: "",
    month: "",
    year: "",
    CVV: "",
  });
  const [error, setError] = useState({});
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();

    const validationerro = {};

    if (!formdata.cardholder.trim()) {
      validationerro.cardholder = "CARDHOLDER name is required";
    }

    if (!formdata.cardnumber.trim()) {
      validationerro.cardnumber = "CARDNUMBER name is required";
    }

    if (!formdata.month.trim()) {
      validationerro.month = "MONTH is required";
    }

    if (!formdata.year.trim()) {
      validationerro.year = "Year is required";
    }
    if (!formdata.CVV.trim()) {
      validationerro.CVV = "CVV is required";
    }

    setError(validationerro);

    if (Object.keys(validationerro).length === 0) {
      setNext(true);
    } else {
      setNext(false);
    }
  };
  return (
    <>
      <section className="w-full h-[100vh] ">
        <div className=" grid grid-cols-1  md:grid-cols-3    ">
          <div className="left  h-[300px] md:h-[100vh] flex relative justify-end ">
            <div className="card1 absolute right-32 md:top-32 md:-right-16 lg:top-32 lg:-right-16 -bottom-12 z-10 p-4  " >

<svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
             <div className="mt-8 lg:mt-16">
             <h1 className="text-center text-white text-3xl tracking-widest ">{formdata.cardnumber}</h1>
              <ul className="flex justify-between text-white uppercase tracking-widest mt-6 lg:mt-9">
                <li>{formdata.cardholder}</li>
                <li>{formdata.year}</li>
              </ul>
             </div>

            
             {/* crd-2 deatais */}
            </div >
            <div className="card2 relative mt-10 mr-5 md:absolute md:bottom-44 md:-right-36 lg:absolute lg:bottom-44  lg:-right-36 ">
              <p className=" absolute right-10 text-xl text-white top-[77px] md:top-[100px] md:right-5  lg:text-2xl lg:top-[100px] py-1.5">{formdata.CVV}</p>
            </div>
          </div>

          {/* formn ifomation */}
          <div className=" col-span-2  md:h-[100vh] ">
            <div className=" form-data flex justify-center items-center  w-[50%] md:mt-[24%]   lg:mt-[15%] ">
            <div className=" mt-14">
              
        {next === false ? (
          <form action="" className=" " onSubmit={handlesubmit}>
            <div className="cont flex flex-col">
              <label className="mt-4 text-gray-400 font-semibold text-lg" htmlFor="">CARDHOLDER NAME</label>
              <input
              className=" text-xl border-[2px] border-gray-300 px-4 lg:px-4 py-3 lg:text-2xl font-semibold rounded-lg outline-none"
                type="text"
                name="cardholder"
                value={formdata.cardholder}
                placeholder="eg.pawan singh"
                onChange={handlechange}
              />
              {error.cardholder && <p className="text-orange-700 font-thin text-xs lg:text-lg">{error.cardholder}</p>}
            </div>
            <div className="cont flex flex-col">
              <label className="mt-4 text-gray-400 font-semibold text-lg" htmlFor="">CARD NUMBER</label>
              <input
              className=" text-xl border-[2px] border-gray-300 px-4 lg:px-4 py-3 lg:text-2xl font-semibold rounded-lg outline-none"
                type="tel"
                maxLength={15}
                name="cardnumber"
                value={formdata.cardnumber}
                placeholder="0000-0000-0000-0000"
                onChange={handlechange}
              />
              {error.cardnumber && <p className="text-orange-700 font-thin text-xs lg:text-lg">{error.cardnumber}</p>}
            </div>

            <div className="main grid grid-cols-3 gap-5">
              <div className="cont flex flex-col">
                <label className="mt-4 text-gray-400 font-semibold text-lg" htmlFor="">EXP.MM</label>
                <input
                  type="phoneno"
                className=" text-xl border-[2px] border-gray-300 px-4 lg:px-4 py-3 lg:text-2xl font-semibold rounded-lg outline-none"
                  maxLength={2}
                  name="month"
                  value={formdata.month}
                  placeholder="MM"
                  onChange={handlechange}
                />
                {error.month && <p className="text-orange-700 font-thin text-xs lg:text-lg" >{error.month}</p>}
              </div>
              <div className="cont flex flex-col">
                <label className="mt-4 text-gray-400 font-semibold text-lg" htmlFor="">EXP.YY</label>
                <input
                  type="phoneno"
                  className=" text-xl border-[2px] border-gray-300 px-4 lg:px-4 py-3 lg:text-2xl font-semibold rounded-lg outline-none"
                  maxLength={4}
                  name="year"
                  value={formdata.year}
                  placeholder="YY"
                  onChange={handlechange}
                />
                {error.year && <p className="text-orange-700 font-thin text-xs lg:text-lg" >{error.year}</p>}
              </div>
              <div className="cont flex flex-col">
                <label className="mt-4  text-gray-400 font-semibold text-lg" htmlFor="">CVV</label>
                <input
                  type="phone"
                  className=" text-xl border-[2px] border-gray-300 px-4 lg:px-4 py-3 lg:text-2xl font-semibold rounded-lg outline-none"                  maxLength={4}
                  name="CVV"
                  value={formdata.CVV}
                  placeholder="eg.123"
                  onChange={handlechange}
                />
                {error.CVV && <p className="text-orange-700 font-thin text-xs lg:text-lg" >{error.CVV}</p>}
              </div>
            </div>
            <button type="submit" className="w-[100%] bg-blue-600 px-4 py-3  mt-8 rounded-lg text-white text-xl font-semibold" >CONFRIM</button>
          </form>
        ) : (
          <div className="success-message w-[100%] px-10 mt-10">
            <svg className=" ml-[80px] lg:ml-[89px]" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>

            <p className="text-4xl font-semibold text-center mt-5">Thankyou!</p>
            <p className="text-gray-500 text-lg mt-2">The card detail is add in The bank</p>
            <button className="w-[100%] bg-blue-600 px-4 py-3  mt-4 rounded-lg text-white text-xl font-semibold" onClick={() => setNext(false)}>BACK</button>
          </div>
        )}
      </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
