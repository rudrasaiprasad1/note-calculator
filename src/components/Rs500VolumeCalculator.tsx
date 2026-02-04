"use client";

import { useState } from "react";

const NOTE_VOLUME = 1089; // mm³
const BAG_VOLUME = 16200000; // mm³
// const LORRY_VOLUME = 23840000000; // mm³
const LORRY_VOLUME_MAX = 26760000000; // mm³

export default function Rs500VolumeCalculator() {
    const [notes, setNotes] = useState(0);
    const [bags, setBags] = useState<number | null>(null);
    const [remainingNotes, setRemainingNotes] = useState(0);
    const [showLorry, setShowLorry] = useState(false);

    const calculate = () => {
        if (notes <= 0) {
            setBags(null);
            setShowLorry(false);
            return;
        }

        const totalVolume = notes * NOTE_VOLUME;

        // 🚚 EXCEEDS LORRY CAPACITY
        if (totalVolume > LORRY_VOLUME_MAX) {
            setShowLorry(true);
            setBags(null);
            setRemainingNotes(0);
            return;
        }

        setShowLorry(false);

        // 🎒 ONE BAG IS ENOUGH
        if (totalVolume <= BAG_VOLUME) {
            setBags(1);
            setRemainingNotes(0);
            return;
        }

        // 🎒 MULTIPLE BAGS
        const bagCount = Math.floor(totalVolume / BAG_VOLUME);
        const remainingVolume = totalVolume % BAG_VOLUME;
        const remaining = Math.floor(remainingVolume / NOTE_VOLUME);

        setBags(bagCount);
        setRemainingNotes(remaining);
    };

    return (
        <div className="p-6 max-w-xl mx-auto border rounded-xl">
            <h2 className="text-lg font-semibold mb-4">
                ₹500 Note Volume Calculator
            </h2>

            <input
                type="number"
                placeholder="Enter number of notes"
                className="border p-2 rounded w-full mb-3"
                value={notes}
                onChange={(e) => setNotes(Number(e.target.value))}
            />

            <button
                onClick={calculate}
                className="bg-green-600 text-white px-4 py-2 rounded"
            >
                Calculate
            </button>

            {/* 🚚 Lorry Result */}
            {showLorry && (
                <div className="mt-6 text-center">
                    <img
                        src="/artifacts/lorry.webp"
                        alt="Lorry"
                        className="w-48 mx-auto mb-3"
                    />
                    <p className="text-red-600 font-semibold">
                        Notes volume exceeds lorry capacity
                    </p>
                </div>
            )}

            {/* 🎒 Bag Result */}
            {!showLorry && bags !== null && (
                <div className="mt-6 flex flex-col items-center">
                    <div className="flex gap-3 mb-4 flex-wrap shadow sm:shadow-md p-3 rounded-lg hover:shadow-lg transition-shadow duration-300">
                        <div
                            className="font-bold text-white bg-blue-600 w-20 h-20 flex items-center justify-center rounded-lg"
                        >{Number(bags)}</div>
                        <img
                            src="/artifacts/laptop_bag_image.jpg"
                            alt="Bag"
                            className="w-20"
                        />
                    </div>

                    {remainingNotes === 0 ? (
                        <p className="text-red-600 font-semibold">
                            Bag is enough for this {`${Number(remainingNotes) * Number(500)}`} notes
                        </p>
                    ) : (
                        <div className="flex gap-3 mb-4 flex-wrap shadow sm:shadow-md p-3 rounded-lg hover:shadow-lg transition-shadow duration-300">
                            <div
                                className="font-bold text-white bg-blue-600 w-20 h-20 flex items-center justify-center rounded-lg"
                            >you need extra space for {Number(remainingNotes)}</div>
                            <img
                                src="/artifacts/500-note-front.png"
                                alt="₹500 Note"
                                className="w-12 h-24 object-contain"
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}













// "use client";

// import { useState } from "react";

// const NOTE_VOLUME = 1089; // mm³
// const BAG_VOLUME = 16200000; // mm³
// const LORRY_VOLUME = 23840000000; // mm³ (23.84 billion mm³)
// const LORRY_VOLUME_MAX = 26760000000; // mm³ (26.76 billion mm³)

// export default function Rs500VolumeCalculator() {
//     const [notes, setNotes] = useState(0);
//     const [bags, setBags] = useState<number | null>(null);
//     const [remainingNotes, setRemainingNotes] = useState<number>(0);

//     const calculate = () => {
//         if (notes <= 0) {
//             setBags(null);
//             return;
//         }

//         const totalVolume = notes * NOTE_VOLUME;

//         // ONE BAG IS ENOUGH
//         if (totalVolume <= BAG_VOLUME) {
//             setBags(1);
//             setRemainingNotes(0);
//             return;
//         }

//         // MULTIPLE BAGS
//         const bagCount = Math.floor(totalVolume / BAG_VOLUME);
//         const remainingVolume = totalVolume % BAG_VOLUME;
//         const remaining = Math.floor(remainingVolume / NOTE_VOLUME);

//         setBags(bagCount);
//         setRemainingNotes(remaining);
//     };

//     return (
//         <div className="p-6 max-w-xl mx-auto border rounded-xl">
//             <h2 className="text-lg font-semibold mb-4">
//                 ₹500 Note Bag Volume Calculator
//             </h2>

//             <img
//                 // key={i}
//                 src="/artifacts/laptop_bag_image.jpg"
//                 alt="Bag"
//                 className="w-20"
//             />

//             <input
//                 type="number"
//                 placeholder="Enter number of notes"
//                 className="border p-2 rounded w-full mb-3"
//                 value={notes}
//                 onChange={(e) => setNotes(Number(e.target.value))}
//             />

//             <button
//                 onClick={calculate}
//                 className="bg-green-600 text-white px-4 py-2 rounded"
//             >
//                 Calculate
//             </button>

//             {bags !== null && (
//                 <div className="mt-6">
//                     {/* Bags */}
//                     <div className="flex gap-3 mb-4 flex-wrap">
//                         {Array.from({ length: bags }).map((_, i) => (
//                             <img
//                                 key={i}
//                                 src="/artifacts/laptop_bag_image.jpg"
//                                 alt="Bag"
//                                 className="w-20"
//                             />
//                         ))}
//                     </div>

//                     {/* Result Text / Notes */}
//                     {remainingNotes === 0 ? (
//                         <p className="text-red-600 font-semibold">
//                             Bag is enough for this number of notes
//                         </p>
//                     ) : (
//                         <div className="flex gap-2 flex-wrap">
//                             {Array.from({ length: remainingNotes }).map((_, i) => (
//                                 <img
//                                     key={i}
//                                     src="/artifacts/500-note-front.png"
//                                     alt="₹500 Note"
//                                     className="w-24"
//                                 />
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// }






// "use client";

// import { useState } from "react";

// const NOTE_VOLUME = 1089; // mm³ for one ₹500 note
// const BAG_VOLUME = 16200000; // mm³

// export default function Rs500VolumeCalculator() {
//     const [notes, setNotes] = useState<number>(0);
//     const [bags, setBags] = useState<number | null>(null);
//     const [remainingNotes, setRemainingNotes] = useState<number | null>(null);

//     const calculateVolume = () => {
//         if (notes <= 0) {
//             setBags(0);
//             setRemainingNotes(0);
//             return;
//         }

//         const totalVolume = notes * NOTE_VOLUME;
//         const fullBags = Math.floor(totalVolume / BAG_VOLUME);
//         const remainingVolume = totalVolume % BAG_VOLUME;
//         const remaining = Math.floor(remainingVolume / NOTE_VOLUME);

//         setBags(fullBags);
//         setRemainingNotes(remaining);
//     };

//     return (
//         <div className="p-6 max-w-xl mx-auto border rounded-xl shadow">
//             <h2 className="text-xl font-semibold mb-4">
//                 ₹500 Note Volume Calculator
//             </h2>

//             {/* Input */}
//             <div className="flex gap-4 mb-4">
//                 <select disabled className="border p-2 rounded w-1/2">
//                     <option>₹500 Note</option>
//                 </select>

//                 <input
//                     type="number"
//                     min={0}
//                     placeholder="Number of notes"
//                     className="border p-2 rounded w-1/2"
//                     value={notes}
//                     onChange={(e) => setNotes(Number(e.target.value))}
//                 />
//             </div>

//             <button
//                 onClick={calculateVolume}
//                 className="bg-green-600 text-white px-4 py-2 rounded"
//             >
//                 Calculate Volume
//             </button>

//             {/* Results */}
//             {bags !== null && remainingNotes !== null && (
//                 <div className="mt-6">
//                     <p className="mb-2">
//                         <strong>Bag Volume:</strong> {BAG_VOLUME.toLocaleString()} mm³
//                     </p>

//                     {/* Bags */}
//                     <div className="flex flex-wrap gap-3 mb-4">
//                         {Array.from({ length: bags }).map((_, i) => (
//                             <img
//                                 key={i}
//                                 src="/bag.png"
//                                 alt="Bag"
//                                 className="w-20 h-20 object-contain"
//                             />
//                         ))}
//                     </div>

//                     {/* Remaining Notes */}
//                     {remainingNotes > 0 ? (
//                         <div className="flex gap-2 flex-wrap">
//                             {Array.from({ length: remainingNotes }).map((_, i) => (
//                                 <img
//                                     key={i}
//                                     src="/500-note.png"
//                                     alt="₹500 Note"
//                                     className="w-24 object-contain"
//                                 />
//                             ))}
//                         </div>
//                     ) : (
//                         <p className="text-red-600 font-semibold">
//                             0 notes left — bag is enough for this number of notes.
//                         </p>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// }
