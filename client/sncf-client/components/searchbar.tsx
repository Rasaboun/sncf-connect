import { ReactEventHandler, useState } from "react";

type places = {
  id: string;
  name: string;
  embedded_type: string;
};

type placesProps = {
  place: places[];
};

const defaultPlace: places[] = [];

const sleep = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export default function SearchBar() {
  const [focus, setFocus] = useState(false);
  const [place, setPlace] = useState(defaultPlace);
  const [placesecond, setPlaceSecond] = useState(defaultPlace);
  const [focustwo, setFocustwo] = useState(false);
  const [firstinput, setFirstInput] = useState("");
  const [secondinput, setSecondInput] = useState("");

  const inputfocus = "border-2 border-[#8DE8FE]";
  const input =
    "inline-flex items-center border-2 border-transparent hover:border-[#8DE8FE]/20 flex-row w-full md:w-1/2 group  bg-[#242b35] rounded-r-xl ";

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("Change Here")
    setFirstInput(e.target.value)
    if (e.target.value) {
      const res = await fetch(`/autocomplet?q=${e.target.value}`);
      const data = await res.json();
      
      setPlace(data);
    }
    else{
      setPlace([])
    }
    
  }

  async function handleChangeTwo(e: React.ChangeEvent<HTMLInputElement>) {
    setSecondInput(e.target.value)
    if (e.target.value) {
      const res = await fetch(`/autocomplet?q=${e.target.value}`);
      const data = await res.json();
      
      setPlaceSecond(data);
    }
    else{
      console.log("FIN")
      setPlaceSecond([])
    }
   
  }

  function changeInputValue(){
    let placeTmp = place;
    setPlace(placesecond);
    setPlaceSecond(placeTmp)

    let inputvalueTmp = firstinput;
    setFirstInput(secondinput);
    setSecondInput(inputvalueTmp);
  }

  return (
    <div className="h-72 -z-0 relative bg-[#0C131F] pl-1 md:pl-6 pt-9 md:pt-0">
      <h1 className="text-white pt-6">Itinéraires</h1>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 max-w-7xl">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-[2px] w-full md:w-3/5		 relative items-center">
          <button className="h-9 w-9 cursor-pointer   absolute inset-y-0 m-auto md:left-0 right-0 " onClick={changeInputValue}>
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-9 h-9 rounded-full bg-[#0c131f] hover:bg-[#8DE8FE] p-2 fill-white hover:fill-black"
            >
              <path
                d="M43.0754 39.3978C43.0756 39.5509 43.0455 39.7028 42.987 39.8444C42.9282 39.9858 42.8423 40.1146 42.734 40.2229C42.6255 40.3312 42.497 40.4173 42.3553 40.4758C42.2137 40.5344 42.062 40.5645 41.9087 40.5645H16.0815L24.8588 49.3418C24.969 49.4496 25.0567 49.5784 25.1167 49.7203C25.1769 49.8624 25.2081 50.0147 25.2088 50.169C25.2098 50.3232 25.1799 50.476 25.1213 50.6186C25.0625 50.7612 24.9762 50.8907 24.8672 50.9999C24.7583 51.1088 24.6288 51.1952 24.486 51.2537C24.3434 51.3125 24.1906 51.3422 24.0366 51.3415C23.8823 51.3408 23.7297 51.3093 23.5879 51.2493C23.4458 51.1891 23.3171 51.1016 23.2092 50.9915L13.8506 41.6332C13.2586 41.0398 12.9261 40.236 12.9261 39.3978C12.9261 38.5597 13.2586 37.7556 13.8506 37.1625L23.2091 27.804C23.4287 27.5888 23.7241 27.4691 24.0314 27.4705C24.339 27.4722 24.6332 27.5949 24.8504 27.8124C25.0679 28.0296 25.1906 28.3238 25.1923 28.6311C25.1937 28.9387 25.074 29.2341 24.8588 29.4536L16.0815 38.2312H41.9087C42.062 38.2309 42.2137 38.261 42.3553 38.3198C42.497 38.3784 42.6255 38.4643 42.734 38.5725C42.8423 38.681 42.9282 38.8096 42.987 38.9512C43.0455 39.0929 43.0756 39.2445 43.0754 39.3978ZM14.0911 17.77H39.9196L31.1411 26.5472C31.031 26.6553 30.9432 26.7838 30.8833 26.9259C30.8231 27.068 30.7918 27.2204 30.7911 27.3746C30.7902 27.5289 30.82 27.6817 30.8786 27.8243C30.9374 27.9668 31.0237 28.0963 31.1327 28.2053C31.2417 28.3145 31.3714 28.4008 31.514 28.4594C31.6565 28.518 31.8094 28.5478 31.9634 28.5471C32.1176 28.5462 32.2702 28.5149 32.4121 28.4547C32.5542 28.3948 32.6827 28.307 32.7908 28.1969L42.1514 18.8386C42.7427 18.2448 43.0742 17.4409 43.0742 16.603C43.074 15.7651 42.7417 14.9615 42.1502 14.3679L32.7908 5.00843C32.5712 4.79332 32.2758 4.6735 31.9685 4.67506C31.661 4.6766 31.3667 4.79938 31.1495 5.01671C30.932 5.23404 30.8093 5.52836 30.8077 5.83571C30.8063 6.14303 30.926 6.43857 31.1411 6.65809L39.9184 15.4366H14.0911C13.7817 15.4366 13.485 15.5595 13.2662 15.7783C13.0474 15.997 12.9244 16.2938 12.9244 16.6032C12.9244 16.9127 13.0474 17.2094 13.2662 17.4282C13.485 17.647 13.7817 17.77 14.0911 17.77Z"
                className=""
              />
            </svg>
          </button>

          <div
            className={`inline-flex items-center flex-row w-full md:w-1/2 group  bg-[#242b35] rounded-xl md:rounded-none md:rounded-l-xl ${
              focus ? inputfocus : input
            }`}
            onFocus={() => setFocus(true)}
            onBlur={
              async () =>{
                await sleep(200);
                setFocus(false)
              }
            }
          >
            <button className="p-2.5 rounded-l-xl pl-4 select-none  outline-none  group-hover:bg-[#8DE8FE]/20 cursor-text text-slate-400  whitespace-nowrap">
              Départ :
            </button>
            <input
              type="text"
              className="truncate bg-[#242b35] outline-none  pl-8 group-hover:bg-[#8DE8FE]/20 text-white   block w-full p-2.5   "
              placeholder="D'où partons-nous ?"
              onChange={handleChange}

              value={firstinput}
              required
            />
          </div>
          <div
            className={`inline-flex items-center flex-row w-full md:w-1/2 group test bg-[#242b35] rounded-xl md:rounded-none md:rounded-r-xl ${
              focustwo ? inputfocus : input
            }`}
            onFocus={() => setFocustwo(true)}
            onBlur={async () => {
              await sleep(200)
              setFocustwo(false);
            }}
          >
            <button className="p-2.5 pl-4 select-none  outline-none  group-hover:bg-[#8DE8FE]/20 cursor-text text-slate-400  whitespace-nowrap">
              Arrivée :
            </button>
            <input
              type="text"
              className=" truncate bg-[#242b35] outline-none  pl-8 group-hover:bg-[#8DE8FE]/20 text-white   block w-full p-2.5 rounded-r-xl "
              placeholder="Où allons-nous ?"
              onChange={handleChangeTwo}
              value={secondinput}
              required
            />
          </div>
          {focus && <ScrollCity place={place} setInputValue={setFirstInput} ></ScrollCity>}
          {focustwo && <ScrollCity place={placesecond} setInputValue={setSecondInput}></ScrollCity>}
        </div>
        <button className="flex flex-row space-x-2 rounded-xl bg-[#242b35] items-center p-3 md:ml-5 w-fit" onClick={()=> console.log(firstinput)}>
          <span className="text-slate-500">Départ</span>
          <span className="text-white">Maintenant</span>
        </button>
      </div>
    </div>
  );
}

function ScrollCity(props: { place: places[], setInputValue: React.Dispatch<React.SetStateAction<string>>}) {
  return (
    <>
    <div  className="absolute w-full bg-white inset-x-0 top-28 max-h-96 overflow-auto  md:top-16 rounded-xl flex flex-col z-50 ">
      {props.place.map((elem, id) => (
        <button onClick={()=> props.setInputValue(elem.name)} className="p-4 hover:bg-slate-200" key={elem.name + id}>{elem.name}</button>
      ))}
    </div>
        <div className="hidden fixed inset-0 top-72 md:top-40 z-40 bg-[#0C131F]/40 	 backdrop-blur-sm "></div>
    </>
  );
}
