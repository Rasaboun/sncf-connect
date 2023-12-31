import { Chevron } from "../utils/functions/utils";
import { section } from "../types/type";
import { TransportLogo } from "./TransportLogo";

function SvgWalk({ duration, length }: { duration: string; length: number }) {
	return (
		<div className="flex flex-row items-end	-space-x-0.5">
			<svg
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				type="MODE"
				path="/modes/foot"
				role="img"
				className="h-6 w-6 "
			>
				<path d="M18.0735 11.543C18.0208 11.3197 17.9234 11.1095 17.7873 10.9248C17.6506 10.7387 17.4779 10.582 17.2795 10.4639C17.0832 10.3453 16.8656 10.2664 16.6389 10.2315C16.0775 10.1432 15.5639 9.86378 15.1848 9.44046C14.8176 9.0287 14.61 8.49896 14.5998 7.9473C14.5979 7.57382 14.4738 7.21123 14.2463 6.91498C14.0867 6.71636 13.8854 6.55534 13.6565 6.44336C14.0957 6.17547 14.4375 5.77382 14.6316 5.29738C14.8258 4.82093 14.8621 4.29479 14.7352 3.7962C14.6083 3.29762 14.3249 2.85285 13.9266 2.5272C13.5283 2.20154 13.0361 2.01216 12.5222 1.98686C12.0083 1.96156 11.4999 2.10166 11.0715 2.38661C10.6432 2.67155 10.3174 3.08633 10.1422 3.57003C9.96688 4.05374 9.9513 4.5809 10.0977 5.07411C10.2441 5.56733 10.5448 6.00062 10.9556 6.31036C9.80826 6.59579 8.77071 7.21344 7.97289 8.08592C7.16601 8.96463 6.65208 10.0723 6.50218 11.2558C6.41854 11.8369 6.41986 12.4271 6.5061 13.0078C6.54852 13.2334 6.63582 13.4482 6.7628 13.6394C6.88979 13.8307 7.05389 13.9944 7.24536 14.1211C7.61498 14.3733 8.06722 14.4743 8.50903 14.4033C8.8965 14.3375 9.25125 14.1452 9.51782 13.8564C9.41771 14.2869 9.2628 14.7027 9.05688 15.0937C8.6845 15.6601 8.11695 16.0699 7.46216 16.2451C6.97602 16.3718 6.55695 16.6801 6.29126 17.1064C6.02441 17.5303 5.93628 18.0426 6.04614 18.5312C6.15693 19.0201 6.45266 19.4471 6.87134 19.7226C7.30355 20.0057 7.82742 20.1132 8.33618 20.0234C9.17399 19.8222 9.96644 19.4651 10.6721 18.9707V20.1045C10.6721 20.3685 10.7273 20.6297 10.8342 20.8711C10.9476 21.1248 11.1137 21.3515 11.3215 21.5361L11.4641 21.6425C11.8401 21.8658 12.2671 21.9889 12.7043 22H12.717C12.8996 21.9995 13.0811 21.9711 13.2551 21.916C13.5538 21.82 13.8262 21.6563 14.051 21.4375C14.4085 21.0943 14.6153 20.6233 14.6262 20.1279V13.2217C15.0877 13.4209 15.5717 13.5633 16.0676 13.6455C16.5256 13.7188 16.9942 13.612 17.3752 13.3476C17.7536 13.0838 18.0117 12.6806 18.093 12.2265C18.1334 11.9998 18.1267 11.7671 18.0735 11.543ZM12.4016 2.99998C12.6792 2.99998 12.9505 3.08229 13.1812 3.23649C13.412 3.39068 13.5919 3.60985 13.6981 3.86628C13.8043 4.1227 13.8321 4.40486 13.778 4.67708C13.7238 4.9493 13.5902 5.19934 13.3939 5.3956C13.1976 5.59186 12.9476 5.72551 12.6754 5.77966C12.4032 5.83381 12.121 5.80602 11.8646 5.6998C11.6082 5.59359 11.389 5.41372 11.2348 5.18295C11.0806 4.95217 10.9983 4.68085 10.9983 4.4033C10.9988 4.03129 11.1468 3.67466 11.4099 3.4116C11.673 3.14855 12.0296 3.00052 12.4016 2.99998ZM16.8039 12.5273C16.635 12.6406 16.4301 12.6873 16.2288 12.6582C15.5764 12.551 14.951 12.3185 14.387 11.9736C14.3111 11.9273 14.2244 11.902 14.1355 11.9003C14.0467 11.8987 13.9591 11.9207 13.8816 11.9642C13.8041 12.0076 13.7396 12.071 13.6947 12.1476C13.6498 12.2243 13.6262 12.3115 13.6262 12.4004V20.1055C13.6235 20.1851 13.611 20.2642 13.5891 20.3408C13.5409 20.4854 13.4593 20.6166 13.3508 20.7236C13.238 20.8328 13.1017 20.9146 12.9524 20.9629C12.8764 20.9798 12.7994 20.9922 12.7219 21C12.4799 20.9948 12.2424 20.9329 12.0286 20.8193L11.97 20.7754C11.876 20.6892 11.8008 20.5844 11.7493 20.4678C11.6986 20.3533 11.6724 20.2296 11.6721 20.1045V17.9062C11.6721 17.8077 11.643 17.7114 11.5884 17.6293C11.5338 17.5473 11.4562 17.4832 11.3654 17.4451C11.2745 17.407 11.1744 17.3967 11.0776 17.4153C10.9809 17.4339 10.8918 17.4807 10.8215 17.5498C10.0783 18.2788 9.1528 18.7945 8.14183 19.043C7.8917 19.0832 7.63558 19.0281 7.42406 18.8887C7.22085 18.7562 7.07697 18.55 7.02269 18.3135C6.97052 18.081 7.01266 17.8373 7.13988 17.6358C7.27197 17.4249 7.47997 17.2729 7.72093 17.211C8.62768 16.9663 9.41072 16.3925 9.91722 15.6016C10.3554 14.7801 10.6052 13.8714 10.6487 12.9414V10.0713C10.6486 9.97087 10.6183 9.87283 10.5617 9.78988C10.5052 9.70692 10.425 9.64291 10.3315 9.60615C10.2381 9.56939 10.1358 9.56158 10.0379 9.58375C9.93993 9.60592 9.85095 9.65704 9.78246 9.73045C9.29726 10.2512 8.99519 10.916 8.9221 11.624V11.9843C8.92318 12.1696 8.93918 12.3544 8.96995 12.5371C8.97523 12.5933 8.97425 12.65 8.96702 12.706C8.96625 12.8753 8.90454 13.0386 8.79319 13.166C8.67775 13.2984 8.52006 13.3867 8.3469 13.416C8.20374 13.4366 8.05767 13.4168 7.92516 13.3588C7.79266 13.3008 7.67897 13.207 7.5969 13.0879C7.54715 13.0137 7.51171 12.9309 7.49241 12.8437C7.42292 12.3615 7.42325 11.8718 7.49341 11.3896C7.61695 10.408 8.04249 9.48898 8.71117 8.75975C9.37823 8.02925 10.2463 7.51215 11.2063 7.27342H13.1184C13.2501 7.32436 13.3653 7.41049 13.4514 7.52242C13.5475 7.6473 13.5997 7.80041 13.5998 7.95797C13.6131 8.75055 13.91 9.51212 14.4368 10.1045C14.9702 10.7009 15.6932 11.0949 16.4836 11.2197C16.5834 11.2351 16.6792 11.2695 16.7659 11.3213C16.8497 11.3714 16.9228 11.4378 16.9807 11.5166C17.0374 11.593 17.0782 11.68 17.1008 11.7724C17.1226 11.865 17.125 11.9611 17.1077 12.0547C17.0911 12.1497 17.0557 12.2405 17.0035 12.3217C16.9514 12.4028 16.8835 12.4728 16.8039 12.5273Z"></path>
			</svg>
			{length == 1 ? (
				<p>À pied</p>
			) : (
				<p className="text-xs font-light text-[#646C7A]">{duration}</p>
			)}
		</div>
	)
}

export function ItineraireRow({ elem, id, section }: { elem: section; id: number; section: section[] }) {
	if (elem.type == 'street_network') {
		return (
			<>
				<SvgWalk duration={(elem.duration / 60).toFixed()} length={section.length} />
				{Chevron(id, section) && (
					<svg
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 fill-[#5e6878]"
					>
						<path d="M8.79362 6.6659C8.36568 7.06175 8.36568 7.73825 8.79362 8.1341L12.973 12L8.79362 15.8659C8.36568 16.2617 8.36568 16.9383 8.79362 17.3341L8.83447 17.3719C9.21775 17.7264 9.80928 17.7264 10.1926 17.3719L15.2064 12.7341C15.6343 12.3383 15.6343 11.6617 15.2064 11.2659L10.1926 6.62811C9.80928 6.27358 9.21775 6.27358 8.83447 6.62811L8.79362 6.6659Z"></path>
					</svg>
				)}
			</>
		)
	}
	if (elem.type == 'public_transport')
		return (
			<>
				{<TransportLogo elem={elem} id={id} />}

				{Chevron(id, section) && (
					<svg
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 fill-[#5e6878]"
					>
						<path d="M8.79362 6.6659C8.36568 7.06175 8.36568 7.73825 8.79362 8.1341L12.973 12L8.79362 15.8659C8.36568 16.2617 8.36568 16.9383 8.79362 17.3341L8.83447 17.3719C9.21775 17.7264 9.80928 17.7264 10.1926 17.3719L15.2064 12.7341C15.6343 12.3383 15.6343 11.6617 15.2064 11.2659L10.1926 6.62811C9.80928 6.27358 9.21775 6.27358 8.83447 6.62811L8.79362 6.6659Z"></path>
					</svg>
				)}
			</>
		)
}