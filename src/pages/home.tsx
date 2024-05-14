const Home = () => {
	return (
		<div className="Page1 w-[430px] h-[932px] relative bg-white">
			<div className=" left-[10px] top-[40px] absolute text-center text-black text-[26px] font-bold font-['Pretendard']">
				메이커스페이스 출입관리
			</div>
			<div className="Line1 w-[406px] h-[0px] left-[10px] top-[82px] absolute border border-black"></div>
			<div className=" w-[195px] h-[93px] left-[218px] top-[93px] absolute">
				<div className="Rectangle1 w-[195px] h-[93px] left-0 top-0 absolute bg-green-400 rounded-[20px]" />
				<div className=" w-[39px] h-[39px] left-[78px] top-[27px] absolute text-center text-black text-[22px] font-semibold font-['Pretendard']">
					열기
				</div>
			</div>
			<div className=" w-[195px] h-[93px] left-[218px] top-[195px] absolute">
				<div className="Rectangle1 w-[195px] h-[93px] left-0 top-0 absolute bg-red-400 rounded-[20px]" />
				<div className=" left-[68px] top-[33px] absolute text-center text-black text-[22px] font-semibold font-['Pretendard']">
					초기화
				</div>
			</div>
			<div className="Group1 w-[195px] h-[195px] left-[13px] top-[93px] absolute">
				<div className="Rectangle2 w-[195px] h-[195px] left-0 top-0 absolute" />
				<img
					className="Rectangle3 w-[173px] h-[173px] left-[11px] top-[11px] absolute"
					src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"
				/>
			</div>
		</div>
	);
};

export default Home;
