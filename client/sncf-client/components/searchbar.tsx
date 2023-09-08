import { useState } from 'react'
import { places } from './types/type'

const defaultPlaceList: places[] = []

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
type searchbarProps = {
	place: places
	placesecond: places
	setPlace: React.Dispatch<React.SetStateAction<places>>
	setPlaceSecond: React.Dispatch<React.SetStateAction<places>>
}
const defaultplace: places = {
	id: '',
	embedded_type: '',
	name: ''
}
export default function SearchBar({
	place,
	setPlace,
	setPlaceSecond,
	placesecond
}: searchbarProps) {
	const [focus, setFocus] = useState(false)
	const [listPlace, setListPlace] = useState(defaultPlaceList)

	const [listPlaceSecond, setListPlaceSecond] = useState(defaultPlaceList)
	const [focustwo, setFocustwo] = useState(false)
	const [firstinput, setFirstInput] = useState('')
	const [secondinput, setSecondInput] = useState('')

	const inputfocus = 'border-2 border-[#8DE8FE]'
	const input =
		'inline-flex items-center border-2 border-transparent hover:border-[#8DE8FE]/20 flex-row w-full md:w-1/2 group  bg-[#242b35]  '

	async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setFirstInput(e.target.value)
		if (e.target.value) {
			const res = await fetch(`/autocomplet?q=${e.target.value}`)
			const data = await res.json()

			setListPlace(data)
		} else {
			setPlace(defaultplace)
			setListPlace([])
		}
	}

	async function handleChangeTwo(e: React.ChangeEvent<HTMLInputElement>) {
		setSecondInput(e.target.value)
		if (e.target.value) {
			const res = await fetch(`/autocomplet?q=${e.target.value}`)
			const data = await res.json()

			setListPlaceSecond(data)
		} else {
			setPlaceSecond(defaultplace)
			setListPlaceSecond([])
		}
	}

	function changeInputValue() {
		let placeTmp = listPlace
		setListPlace(listPlaceSecond)
		setListPlaceSecond(placeTmp)

		setPlace(placesecond)
		setPlaceSecond(place)

		let inputvalueTmp = firstinput
		setFirstInput(secondinput)
		setSecondInput(inputvalueTmp)
	}

	return (
		<div className=" bg-[#0C131F] ">
			<div className="relative  mx-3 flex flex-col space-y-5 pb-4 pl-1 pt-9 lg:pl-28 lg:pt-0 ">
				<h1 className="pt-6 text-2xl font-medium text-white">Itinéraires</h1>
				<div className="flex max-w-7xl flex-col items-center space-y-4 lg:flex-row lg:space-y-0">
					<div className="relative flex w-full flex-col items-center space-y-2 md:flex-row md:space-x-[2px]		 md:space-y-0 lg:w-3/5">
						<button
							className="absolute inset-y-0 right-0   m-auto h-9 w-9 cursor-pointer md:left-0 "
							onClick={changeInputValue}
						>
							<svg
								width="56"
								height="56"
								viewBox="0 0 56 56"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="h-9 w-9 rounded-full bg-[#0c131f] fill-white p-2 hover:bg-[#8DE8FE] hover:fill-black"
							>
								<path
									d="M43.0754 39.3978C43.0756 39.5509 43.0455 39.7028 42.987 39.8444C42.9282 39.9858 42.8423 40.1146 42.734 40.2229C42.6255 40.3312 42.497 40.4173 42.3553 40.4758C42.2137 40.5344 42.062 40.5645 41.9087 40.5645H16.0815L24.8588 49.3418C24.969 49.4496 25.0567 49.5784 25.1167 49.7203C25.1769 49.8624 25.2081 50.0147 25.2088 50.169C25.2098 50.3232 25.1799 50.476 25.1213 50.6186C25.0625 50.7612 24.9762 50.8907 24.8672 50.9999C24.7583 51.1088 24.6288 51.1952 24.486 51.2537C24.3434 51.3125 24.1906 51.3422 24.0366 51.3415C23.8823 51.3408 23.7297 51.3093 23.5879 51.2493C23.4458 51.1891 23.3171 51.1016 23.2092 50.9915L13.8506 41.6332C13.2586 41.0398 12.9261 40.236 12.9261 39.3978C12.9261 38.5597 13.2586 37.7556 13.8506 37.1625L23.2091 27.804C23.4287 27.5888 23.7241 27.4691 24.0314 27.4705C24.339 27.4722 24.6332 27.5949 24.8504 27.8124C25.0679 28.0296 25.1906 28.3238 25.1923 28.6311C25.1937 28.9387 25.074 29.2341 24.8588 29.4536L16.0815 38.2312H41.9087C42.062 38.2309 42.2137 38.261 42.3553 38.3198C42.497 38.3784 42.6255 38.4643 42.734 38.5725C42.8423 38.681 42.9282 38.8096 42.987 38.9512C43.0455 39.0929 43.0756 39.2445 43.0754 39.3978ZM14.0911 17.77H39.9196L31.1411 26.5472C31.031 26.6553 30.9432 26.7838 30.8833 26.9259C30.8231 27.068 30.7918 27.2204 30.7911 27.3746C30.7902 27.5289 30.82 27.6817 30.8786 27.8243C30.9374 27.9668 31.0237 28.0963 31.1327 28.2053C31.2417 28.3145 31.3714 28.4008 31.514 28.4594C31.6565 28.518 31.8094 28.5478 31.9634 28.5471C32.1176 28.5462 32.2702 28.5149 32.4121 28.4547C32.5542 28.3948 32.6827 28.307 32.7908 28.1969L42.1514 18.8386C42.7427 18.2448 43.0742 17.4409 43.0742 16.603C43.074 15.7651 42.7417 14.9615 42.1502 14.3679L32.7908 5.00843C32.5712 4.79332 32.2758 4.6735 31.9685 4.67506C31.661 4.6766 31.3667 4.79938 31.1495 5.01671C30.932 5.23404 30.8093 5.52836 30.8077 5.83571C30.8063 6.14303 30.926 6.43857 31.1411 6.65809L39.9184 15.4366H14.0911C13.7817 15.4366 13.485 15.5595 13.2662 15.7783C13.0474 15.997 12.9244 16.2938 12.9244 16.6032C12.9244 16.9127 13.0474 17.2094 13.2662 17.4282C13.485 17.647 13.7817 17.77 14.0911 17.77Z"
									className=""
								/>
							</svg>
						</button>

						<div
							className={`group inline-flex w-full flex-row items-center rounded-xl rounded-r-xl bg-[#242b35] md:w-1/2 md:rounded-none md:rounded-l-xl ${
								focus ? inputfocus : input
							}`}
							onFocus={() => setFocus(true)}
							onBlur={async () => {
								await sleep(200)
								setFocus(false)
							}}
						>
							<button className="cursor-text select-none whitespace-nowrap rounded-l-xl  p-2.5  pl-4 text-slate-400 outline-none  group-hover:bg-[#8DE8FE]/20">
								Départ :
							</button>
							<input
								type="text"
								className="block w-full truncate  rounded-none bg-[#242b35] p-2.5   text-white outline-none group-hover:bg-[#8DE8FE]/20   "
								placeholder="D'où partons-nous ?"
								onChange={handleChange}
								value={firstinput}
								required
							/>
						</div>
						<div
							className={`group inline-flex w-full flex-row items-center rounded-xl bg-[#242b35] md:w-1/2 md:rounded-none md:rounded-r-xl ${
								focustwo ? inputfocus : input
							}`}
							onFocus={() => setFocustwo(true)}
							onBlur={async () => {
								await sleep(200)
								setFocustwo(false)
							}}
						>
							<button className="cursor-text select-none whitespace-nowrap  p-2.5  pl-4 text-slate-400 outline-none  group-hover:bg-[#8DE8FE]/20">
								Arrivée :
							</button>
							<input
								type="text"
								className=" block w-full truncate rounded-none bg-[#242b35]   p-2.5 text-white outline-none group-hover:bg-[#8DE8FE]/20 "
								placeholder="Où allons-nous ?"
								onChange={handleChangeTwo}
								value={secondinput}
								required
							/>
						</div>
						{
							<ScrollCity
								focus={focus}
								place={listPlace}
								setInputValue={setFirstInput}
								setPlaceValue={setPlace}
							></ScrollCity>
						}
						{
							<ScrollCity
								focus={focustwo}
								place={listPlaceSecond}
								setInputValue={setSecondInput}
								setPlaceValue={setPlaceSecond}
							></ScrollCity>
						}

						<div
							data-focus={focus || focustwo}
							className="absolute -left-4 top-64 z-20 h-screen w-screen backdrop-blur-sm transition-colors duration-500		 ease-in-out data-[focus=false]:scale-0	 data-[focus=false]:bg-[#0C131F]/0  data-[focus=true]:bg-[#0C131F]/40    md:top-48 lg:-left-32  lg:top-32 "
						></div>
					</div>
					<button className="flex w-full flex-row items-center space-x-7 rounded-xl bg-[#242b35] p-3 hover:bg-[#8DE8FE]/20 lg:ml-5 lg:w-fit lg:space-x-2">
						<span className="text-slate-500">Départ :</span>
						<span className="text-white">Maintenant</span>
					</button>
				</div>
				<div className="flex flex-row items-center  space-x-4 overflow-auto whitespace-nowrap pb-4 text-white">
					<p className="text-base font-medium">Filtrer par :</p>
					<button className="inline-flex flex-row space-x-2 rounded-3xl bg-[#242b35] px-3 py-1.5 text-base font-light hover:bg-[#8DE8FE]/20">
						<span>Mode de transport</span>
						<svg
							width="56"
							height="56"
							viewBox="0 0 56 56"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="h-7 w-7"
						>
							<path
								d="M28 4.66669C23.3851 4.66669 18.8738 6.03516 15.0367 8.59905C11.1995 11.163 8.20884 14.8071 6.44278 19.0708C4.67673 23.3343 4.21466 28.0259 5.11498 32.5521C6.01529 37.0783 8.23758 41.2359 11.5008 44.4993C14.764 47.7624 18.9216 49.9847 23.4479 50.8851C27.9741 51.7853 32.6657 51.3233 36.9292 49.5572C41.1929 47.7911 44.8371 44.8005 47.4009 40.9633C49.9648 37.1262 51.3333 32.6149 51.3333 28C51.3333 24.9359 50.7299 21.9017 49.5572 19.0707C48.3847 16.2398 46.6659 13.6675 44.4992 11.5008C42.3325 9.33412 39.7602 7.61541 36.9292 6.4428C34.0984 5.2702 31.0641 4.66666 28 4.66669ZM38.6754 29.8464H29.5164V39.0066C29.5164 39.4089 29.3566 39.7946 29.0724 40.0788C28.7879 40.3632 28.4022 40.523 28 40.523C27.5977 40.523 27.212 40.3632 26.9278 40.0788C26.6434 39.7946 26.4835 39.4089 26.4835 39.0066V29.8464H17.3234C16.9212 29.8464 16.5355 29.6866 16.2511 29.4024C15.9667 29.1179 15.8069 28.7322 15.8069 28.33C15.8069 27.9279 15.9667 27.5422 16.2511 27.2578C16.5355 26.9734 16.9212 26.8135 17.3234 26.8135H26.4835V17.6545C26.4835 17.2524 26.6434 16.8666 26.9278 16.5823C27.212 16.2979 27.5977 16.1381 28 16.1381C28.4022 16.1381 28.7879 16.2979 29.0724 16.5823C29.3566 16.8666 29.5164 17.2524 29.5164 17.6545V26.8135H38.6754C39.0777 26.8135 39.4634 26.9734 39.7478 27.2578C40.032 27.5422 40.1919 27.9279 40.1919 28.33C40.1919 28.7322 40.032 29.1179 39.7478 29.4024C39.4634 29.6866 39.0777 29.8464 38.6754 29.8464Z"
								fill="white"
							/>
						</svg>
					</button>
					<button className="inline-flex flex-row space-x-2 rounded-3xl bg-[#242b35] px-3 py-1.5 text-base font-light hover:bg-[#8DE8FE]/20">
						<span>Éviter une ligne</span>
						<svg
							width="56"
							height="56"
							viewBox="0 0 56 56"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="h-7 w-7"
						>
							<path
								d="M28 4.66669C23.3851 4.66669 18.8738 6.03516 15.0367 8.59905C11.1995 11.163 8.20884 14.8071 6.44278 19.0708C4.67673 23.3343 4.21466 28.0259 5.11498 32.5521C6.01529 37.0783 8.23758 41.2359 11.5008 44.4993C14.764 47.7624 18.9216 49.9847 23.4479 50.8851C27.9741 51.7853 32.6657 51.3233 36.9292 49.5572C41.1929 47.7911 44.8371 44.8005 47.4009 40.9633C49.9648 37.1262 51.3333 32.6149 51.3333 28C51.3333 24.9359 50.7299 21.9017 49.5572 19.0707C48.3847 16.2398 46.6659 13.6675 44.4992 11.5008C42.3325 9.33412 39.7602 7.61541 36.9292 6.4428C34.0984 5.2702 31.0641 4.66666 28 4.66669ZM38.6754 29.8464H29.5164V39.0066C29.5164 39.4089 29.3566 39.7946 29.0724 40.0788C28.7879 40.3632 28.4022 40.523 28 40.523C27.5977 40.523 27.212 40.3632 26.9278 40.0788C26.6434 39.7946 26.4835 39.4089 26.4835 39.0066V29.8464H17.3234C16.9212 29.8464 16.5355 29.6866 16.2511 29.4024C15.9667 29.1179 15.8069 28.7322 15.8069 28.33C15.8069 27.9279 15.9667 27.5422 16.2511 27.2578C16.5355 26.9734 16.9212 26.8135 17.3234 26.8135H26.4835V17.6545C26.4835 17.2524 26.6434 16.8666 26.9278 16.5823C27.212 16.2979 27.5977 16.1381 28 16.1381C28.4022 16.1381 28.7879 16.2979 29.0724 16.5823C29.3566 16.8666 29.5164 17.2524 29.5164 17.6545V26.8135H38.6754C39.0777 26.8135 39.4634 26.9734 39.7478 27.2578C40.032 27.5422 40.1919 27.9279 40.1919 28.33C40.1919 28.7322 40.032 29.1179 39.7478 29.4024C39.4634 29.6866 39.0777 29.8464 38.6754 29.8464Z"
								fill="white"
							/>
						</svg>
					</button>
					<button className="inline-flex flex-row space-x-2 rounded-3xl bg-[#242b35] px-3 py-1.5 text-base font-light hover:bg-[#8DE8FE]/20">
						<span>Éviter une correspondance</span>
						<svg
							width="56"
							height="56"
							viewBox="0 0 56 56"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="h-7 w-7"
						>
							<path
								d="M28 4.66669C23.3851 4.66669 18.8738 6.03516 15.0367 8.59905C11.1995 11.163 8.20884 14.8071 6.44278 19.0708C4.67673 23.3343 4.21466 28.0259 5.11498 32.5521C6.01529 37.0783 8.23758 41.2359 11.5008 44.4993C14.764 47.7624 18.9216 49.9847 23.4479 50.8851C27.9741 51.7853 32.6657 51.3233 36.9292 49.5572C41.1929 47.7911 44.8371 44.8005 47.4009 40.9633C49.9648 37.1262 51.3333 32.6149 51.3333 28C51.3333 24.9359 50.7299 21.9017 49.5572 19.0707C48.3847 16.2398 46.6659 13.6675 44.4992 11.5008C42.3325 9.33412 39.7602 7.61541 36.9292 6.4428C34.0984 5.2702 31.0641 4.66666 28 4.66669ZM38.6754 29.8464H29.5164V39.0066C29.5164 39.4089 29.3566 39.7946 29.0724 40.0788C28.7879 40.3632 28.4022 40.523 28 40.523C27.5977 40.523 27.212 40.3632 26.9278 40.0788C26.6434 39.7946 26.4835 39.4089 26.4835 39.0066V29.8464H17.3234C16.9212 29.8464 16.5355 29.6866 16.2511 29.4024C15.9667 29.1179 15.8069 28.7322 15.8069 28.33C15.8069 27.9279 15.9667 27.5422 16.2511 27.2578C16.5355 26.9734 16.9212 26.8135 17.3234 26.8135H26.4835V17.6545C26.4835 17.2524 26.6434 16.8666 26.9278 16.5823C27.212 16.2979 27.5977 16.1381 28 16.1381C28.4022 16.1381 28.7879 16.2979 29.0724 16.5823C29.3566 16.8666 29.5164 17.2524 29.5164 17.6545V26.8135H38.6754C39.0777 26.8135 39.4634 26.9734 39.7478 27.2578C40.032 27.5422 40.1919 27.9279 40.1919 28.33C40.1919 28.7322 40.032 29.1179 39.7478 29.4024C39.4634 29.6866 39.0777 29.8464 38.6754 29.8464Z"
								fill="white"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}

function ScrollCity(props: {
	place: places[]
	setInputValue: React.Dispatch<React.SetStateAction<string>>
	setPlaceValue: React.Dispatch<React.SetStateAction<places>>
	focus: boolean
}) {
	return (
		<>
			<div
				data-focus={props.focus}
				className="absolute  inset-x-0 top-28 z-30 flex max-h-96 w-full flex-col  overflow-auto rounded-xl bg-white data-[focus=false]:hidden md:top-16 "
			>
				{props.place.map((elem, id) => (
					<button
						onClick={() => {
							props.setInputValue(elem.name)
							props.setPlaceValue(elem)
						}}
						className="p-4 hover:bg-slate-200"
						key={elem.name + id}
					>
						{elem.name}
					</button>
				))}
			</div>
		</>
	)
}
