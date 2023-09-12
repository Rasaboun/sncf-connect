import Image from 'next/image'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'

const countries = {

	NL: (
		<div className="flex flex-row items-center space-x-2">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.5 513 342"><path fill="#FFF" d="M0 85.5h513v342H0z"/><path fill="#cd1f2a" d="M0 85.5h513v114H0z"/><path fill="#1d4185" d="M0 312h513v114H0z"/></svg>
			<p>Pays-bas</p>
		</div>
	),
	FR: (
		<div className="flex flex-row items-center space-x-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333" className='w-5 h-4'>
				<path fill="#FFF" d="M0 85.331h512v341.337H0z" />
				<path fill="#0052B4" d="M0 85.331h170.663v341.337H0z" />
				<path fill="#D80027" d="M341.337 85.331H512v341.337H341.337z" />
			</svg>
			<p>France</p>
		</div>
	),
	BE: (
		<div className="flex flex-row item-center space-x-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342" className='w-5 h-4'>
				<path fill="#fdda25" d="M0 0h513v342H0z" />
				<path d="M0 0h171v342H0z" />
				<path fill="#ef3340" d="M342 0h171v342H342z" />
			</svg>
			<p>Belgique</p>
		</div>
	),
	CH: (
		<div className="flex flex-row item-center space-x-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 513 342" className='w-5 h-4'>
				<path fill="red" d="M0 85.337h513v342H0z" />
				<path
					fill="#FFF"
					d="M356.174 222.609h-66.783v-66.783h-66.782v66.783h-66.783v66.782h66.783v66.783h66.782v-66.783h66.783z"
				/>
			</svg>
			<p>Suisse</p>
		</div>
	),
	DE: (
		<div className="flex flex-row item-center space-x-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333" className='w-5 h-4'>
				<path fill="#D80027" d="M0 85.331h512v341.337H0z" />
				<path d="M0 85.331h512v113.775H0z" />
				<path fill="#FFDA44" d="M0 312.882h512v113.775H0z" />
			</svg>
			<p>Allemagne</p>
		</div>
	),
	ES: (
		<div className="flex flex-row item-center space-x-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333" className='w-5 h-4'>
				<path fill="#FFDA44" d="M0 85.331h512v341.337H0z" />
				<g fill="#D80027">
					<path d="M0 85.331h512v113.775H0zM0 312.882h512v113.775H0z" />
				</g>
			</svg>
			<p>Espagne</p>
		</div>
	),
	IT: (
		<div className="flex flex-row item-center space-x-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333" className='w-5 h-4'>
				<path fill="#FFF" d="M341.334 85.33H0v341.332h512V85.33z" />
				<path fill="#6DA544" d="M0 85.333h170.663V426.67H0z" />
				<path fill="#D80027" d="M341.337 85.333H512V426.67H341.337z" />
			</svg>
			<p>Italie</p>
		</div>
	),
	EU: (
		<div className="flex flex-row item-center space-x-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 810 540" className='w-5 h-4'>
				<path fill="#003399" d="M0,0 h810 v540 h-810z" />
				<path
					fill="#FFCC00"
					d="M 404.951,59.865 411.686,80.583 433.58,80.583 415.947,93.395 422.585,114.135 404.951,101.323 387.317,114.135 394.053,93.406 376.42,80.594 398.216,80.594 z"
				/>
				<path
					fill="#FFCC00"
					d="M 314.951,83.865 321.686,104.583 343.58,104.583 325.947,117.395 332.585,138.135 314.951,125.323 297.317,138.135 304.053,117.406 286.42,104.594 308.216,104.594 z"
				/>
				<path
					fill="#FFCC00"
					d="M 248.951,149.865 255.686,170.583 277.58,170.583 259.947,183.395 266.585,204.135 248.951,191.323 231.317,204.135 238.053,183.406 220.42,170.594 242.216,170.594 z"
				/>
				<path
					fill="#FFCC00"
					d="M 224.951,239.864 231.686,260.583 253.58,260.583 235.947,273.396 242.585,294.136 224.951,281.323 207.317,294.136 214.053,273.405 196.42,260.594 218.216,260.594 z"
				/>
				<path
					fill="#FFCC00"
					d="M 248.951,329.865 255.686,350.584 277.58,350.584 259.947,363.395 266.585,384.135 248.951,371.324 231.317,384.135 238.053,363.406 220.42,350.594 242.216,350.594 z"
				/>
				<path
					fill="#FFCC00"
					d="M 314.951,395.865 321.686,416.584 343.58,416.584 325.947,429.395 332.585,450.135 314.951,437.324 297.317,450.135 304.053,429.406 286.42,416.594 308.216,416.594 z"
				/>
				<path
					fill="#FFCC00"
					d="M 494.951,83.865 501.686,104.583 523.58,104.583 505.947,117.395 512.584,138.135 494.951,125.323 477.316,138.135 484.053,117.406 466.42,104.594 488.215,104.594 z"
				/>
				<path
					fill="#FFCC00"
					d="M 560.951,149.865 567.686,170.583 589.58,170.583 571.947,183.395 578.584,204.135 560.951,191.323 543.316,204.135 550.053,183.406 532.42,170.594 554.215,170.594 z"
				/>
				<path
					fill="#FFCC00"
					d="M 584.951,239.865 591.686,260.583 613.58,260.583 595.947,273.396 602.585,294.136 584.951,281.323 567.317,294.136 574.053,273.405 556.42,260.594 578.216,260.594 z"
				/>
				<path
					fill="#FFCC00"
					d="M 560.951,329.865 567.686,350.584 589.58,350.584 571.947,363.395 578.585,384.135 560.951,371.324 543.317,384.135 550.053,363.406 532.42,350.594 554.216,350.594 z"
				/>
				<path
					fill="#FFCC00"
					d="M 404.951,419.865 411.686,440.584 433.58,440.584 415.947,453.395 422.585,474.135 404.951,461.324 387.317,474.135 394.053,453.406 376.42,440.594 398.216,440.594 z"
				/>
				<path
					fill="#FFCC00"
					d="M 494.951,395.864 501.686,416.583 523.58,416.583 505.947,429.395 512.586,450.135 494.951,437.323 477.318,450.135 484.053,429.405 466.42,416.594 488.217,416.594 z"
				/>
			</svg>
			<p>Europe</p>
		</div>
	),
	LU: ( 
		<div className="flex flex-row item-center  space-x-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 85.333 512 341.333" className='w-5 h-4'>
				<path fill="#FFF" d="M0 85.337h512v341.326H0z" />
				<path fill="#D80027" d="M0 85.337h512v113.775H0z" />
				<path fill="#338AF3" d="M0 312.888h512v113.775H0z" />
			</svg>
			<p>Luxembourg</p>
		</div>
	)
}

export default function Footer() {
	return (
		<div className="flex flex-col md:flex-row bg-[#0C131F] p-8 justify-center items-start space-y-8 md:space-y-0 md:space-x-36">
			<div className="flex flex-col w-full md:w-1/3 ">
				<p className="text-lg text-white mb-4">Nos engagements</p>
				<div className='flex flex-col md:space-y-6'>
				<p className="cursor-pointer text-sm text-slate-500 hover:text-[#8DE8FE]">
					Meilleurs prix garantis
				</p>
				<p className="cursor-pointer text-sm text-slate-500 hover:text-[#8DE8FE]">
					Paiement sécurisé
				</p>
				<p className="cursor-pointer text-sm text-slate-500 hover:text-[#8DE8FE]">Contact 7j/7</p>
				</div>
			</div>
			<div className="flex flex-col w-full md:w-1/3">
				<p className="text-lg text-white mb-4">Moyens de paiement</p>
				<div className="flex flex-row space-x-4 mb-4">
					<Image src={'/cb.png'} alt="cb-img" width={30} height={30} />
					<Image src={'/visa.png'} alt="cb-img" width={30} height={30} />
					<Image src={'/mastercard.png'} alt="cb-img" width={30} height={30} />
					<Image src={'/amex.png'} alt="cb-img" width={30} height={30} />
					<Image src={'/mooncard-logo-.png'} alt="cb-img" width={30} height={30} />
					<Image src={'/apple-pay.png'} alt="cb-img" width={30} height={30} />
					<Image src={'/ancv_0.png'} alt="cb-img" width={30} height={30} />
				</div>

				<div className='flex flex-col space-y-6'>
				<p className="cursor-pointer text-sm text-slate-500 hover:text-[#8DE8FE]">
					Infos et conditions
				</p>

				<p className="cursor-pointer text-sm text-slate-500 hover:text-[#8DE8FE]">
					Paiement en Chèque-Vacances Connect
				</p>

				<p className="cursor-pointer text-sm text-slate-500 hover:text-[#8DE8FE]">
					Infos et conditions paiement ALD Automotive, Betterway, RoadMate, Swile ou Worklife
				</p>
				</div>
			</div>
			<div className="flex flex-col w-full md:w-1/3 space-y-4">
				<p className="text-lg text-white">Choix du pays</p>
				<Select>
					<SelectTrigger className="w-full text-white">
						<SelectValue placeholder={countries.FR}>{}</SelectValue>
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="BE">
							{countries.BE}
						</SelectItem>
						<SelectItem value="DE">
						{countries.DE}
						</SelectItem>
						<SelectItem value="ES">
						{countries.ES}
						</SelectItem>
						<SelectItem value="FR">
						{countries.FR}
						</SelectItem>
						<SelectItem value="IT">
						{countries.IT}
						</SelectItem>
						<SelectItem value="LU">
						{countries.LU}
						</SelectItem>
						<SelectItem value="NL">
						{countries.NL}
						</SelectItem>
						<SelectItem value="CH">
						{countries.CH}
						</SelectItem>
						<SelectItem value="EU">
						{countries.EU}
						</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	)
}
