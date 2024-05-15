interface lockStatusBoxProps {
    status: string;
}

export const LockStatusBox = ({ status }: lockStatusBoxProps) => {
    if (status === "locked"){
        return (
            <div className="bg-red1 flex border-spacing-2 p-5 m-2 text-3xl font-bold font-['Pretendard'] justify-center items-center">
                강제 잠금 상태입니다.
            </div>
        )
    }

    if (status === "restriced"){
        return (
            <div className="bg-green1 flex border-spacing-2 p-5 m-2 text-3xl font-bold font-['Pretendard'] justify-center items-center">
                QR 출입 가능 상태입니다.
            </div>
        )
    }

    if (status === "unlocked"){
        return (
            <div className="bg-blue1 flex border-spacing-2 p-5 m-2 text-3xl font-bold font-['Pretendard'] justify-center items-center">
                자유 출입 가능 상태입니다.
            </div>
        )
    }
}