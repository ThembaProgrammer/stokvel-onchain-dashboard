import {
    Text,
    Flex,
    Title,
} from "@tremor/react";
import {
    EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

export default function AfrocoinOwnership() {
    const ownershipPercentage = 22.5;
    const strokeDasharray = 2 * Math.PI * 90;
    const strokeDashoffset = strokeDasharray * (1 - ownershipPercentage / 100);

    return (
        <>
            <Flex className="mb-2">
                <Title className="text-lg font-bold text-gray-900">Gold Coin Ownership</Title>
                <button>
                    <EllipsisVerticalIcon className="w-5 h-5 text-gray-400" />
                </button>
            </Flex>
            <Text className="text-gray-500 text-sm mb-8">Ownership of krugerrand 1oz gold 2025 coin</Text>

            <div className="flex justify-center mb-8">
                <div className="relative w-52 h-52">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle
                            cx="104"
                            cy="104"
                            r="90"
                            stroke="#E5E7EB"
                            strokeWidth="16"
                            fill="none"
                        />
                        <circle
                            cx="104"
                            cy="104"
                            r="90"
                            stroke="#a88320"
                            strokeWidth="16"
                            fill="none"
                            strokeDasharray={strokeDasharray}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <img 
                            src='https://isibaya.afrocoin.xyz/ipfs/QmeWovr3UPVJUhYCWAHGcNrxCqCsPCebvQNUu4Lvou6Q4V/obverse.png' 
                            height={150} 
                            width={150}
                            alt="Gold Coin"
                        />
                    </div>
                </div>
            </div>

            <div className="text-center mb-6">
                <Text className="text-sm text-gray-500 mb-1">Stokvel Ownership</Text>
                <div className="text-3xl font-bold text-gray-900">{ownershipPercentage}%</div>
            </div>

            <div className="flex items-center justify-center gap-6 pb-10">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#a88320]"></div>
                    <Text className="text-sm text-gray-600">Stokvel Onchain</Text>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#E5E7EB]"></div>
                    <Text className="text-sm text-gray-600">Stokvel Gold</Text>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                    <Text className="text-xs text-gray-500 mb-2">Today Target</Text>
                    <div className="flex items-center justify-center gap-1">
                        <span className="font-bold text-gray-900 text-base">R80,258</span>
                        <span className="text-red-500 text-sm">↓</span>
                    </div>
                </div>
                <div className="text-center">
                    <div className="mb-2 px-2 py-1 bg-[#a88320] text-white text-xs rounded inline-block font-medium">
                        Current price
                    </div>
                    <div className="flex items-center justify-center gap-1">
                        <span className="font-bold text-gray-900 text-base">R67,259</span>
                        <span className="text-green-500 text-sm">↑</span>
                    </div>
                </div>
            </div>
        </>
    );
}