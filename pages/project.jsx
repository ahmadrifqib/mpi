// import Images from "../components/images";

const Project = () => {
	return (
		<>
			<div className="flex items-center justify-center w-auto h-auto tracking-wide">
				<img
					src="/images/project/project-cover.jpeg"
					className="object-cover object-center w-screen h-60 blur-sm"
					style={{ filter: "grayscale(20%)" }}
				/>
				{/* <div className="object-cover object-center w-screen h-60 blur-sm" style={{ filter: "grayscale(20%)" }}>
					<Images
						src="/images/project/project-cover.jpeg"
						alt="project-cover"
						layout="fill"
						objectFit="cover"
						style={{ objectFit: "cover", objectPosition: "center" }}
					/>
				</div> */}

				<div className="absolute font-bold text-white underline text-7xl underline-offset-4 decoration-orange-500">
					Pengalaman Kerja
				</div>
			</div>
			<div className="bg-stone-200">
				<div className="py-20">
					<div className="p-10 text-5xl font-bold text-center text-orange-500">Triangle Pase</div>
					<div className="grid gap-4 mx-5 lg:mx-20 md:mx-10 lg:grid-cols-2">
						<img
							src="/images/project/triangle/1.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
						<img
							src="/images/project/triangle/2.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
						<img
							src="/images/project/triangle/3.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
						<img
							src="/images/project/triangle/4.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
					</div>
				</div>
				<div className="py-10">
					<div className="p-10 text-5xl font-bold text-center text-orange-500">Thamrin 10</div>
					<div className="grid gap-4 mx-5 lg:mx-20 md:mx-10 lg:grid-cols-2">
						<img
							src="/images/project/thamrin/1.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
						<img
							src="/images/project/thamrin/2.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
						<img
							src="/images/project/thamrin/3.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
						<img
							src="/images/project/thamrin/4.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
					</div>
				</div>
				<div className="py-10">
					<div className="p-10 text-5xl font-bold text-center text-orange-500">Mandalika</div>
					<div className="grid gap-4 mx-5 lg:mx-20 md:mx-10 lg:grid-cols-2">
						<img
							src="/images/project/mandalika/1.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
						<img
							src="/images/project/mandalika/2.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
						<img
							src="/images/project/mandalika/3.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
						<img
							src="/images/project/mandalika/4.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
					</div>
				</div>
				<div className="py-10">
					<div className="p-10 text-5xl font-bold text-center text-orange-500">
						Pembangunan Gedung Kampus dan Desain Interior Univeritas Muhammadiyah Bandung
					</div>
					<div className="grid gap-4 mx-5 lg:mx-20 md:mx-10 lg:grid-cols-2">
						<img
							src="/images/project/umb/1.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
						<img
							src="/images/project/umb/2.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
						<img
							src="/images/project/umb/3.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
						<img
							src="/images/project/umb/4.jpeg"
							className="object-cover object-center w-full p-4 bg-white hover:shadow-lg rounded-xl h-96"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Project;
