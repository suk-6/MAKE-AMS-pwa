// 문의 상태를 나타내는 열거형(Enum)을 정의합니다. const enum을 사용하여 컴파일 시점에 값이 치환되도록 합니다.
export const enum DoorStatus {
    LOCKED = "LOCKED",    // 문이 잠긴 상태
    UNLOCKED = "UNLOCKED",  // 문이 열린 상태 (자유 출입 가능)
    RESTRICTED = "RESTRICTED" // 문이 QR 코드로 제한된 상태
}
