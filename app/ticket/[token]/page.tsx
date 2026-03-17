// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";

// export default function TicketPage() {

//   const params = useParams();
//   const token = params.token as string;

//   const [data,setData] = useState<any>(null);
//   const [loading,setLoading] = useState(true);

//   useEffect(()=>{

//     if(!token) return;

//     const load = async()=>{

//       const res = await fetch(`/api/ticket/scan/${token}`);

//       const json = await res.json();

//       setData(json);
//       setLoading(false);

//     };

//     load();

//   },[token]);

//   if(loading){
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-black text-[var(--text-main)]">
//         Jegy ellenőrzése...
//       </div>
//     );
//   }

//   if(data.error){
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-black text-red-500 text-xl">
//         Érvénytelen jegy
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[var(--bg-main)] text-[var(--text-main)]">

//       <div className="bg-[var(--card-bg)] p-10 rounded-xl shadow-xl w-[420px]">

//         <h1 className="text-2xl font-bold mb-6 text-center">
//           Loop Cinema 🎬
//         </h1>

//         {data.used ? (

//           <div className="text-center text-red-400 text-xl font-bold mb-6">
//             ❌ Jegy már beváltva
//           </div>

//         ) : (

//           <div className="text-center text-green-400 text-xl font-bold mb-6">
//             ✔ Érvényes jegy
//           </div>

//         )}

//         <div className="space-y-2">

//           <div>Film: <b>{data.movie}</b></div>
//           <div>Terem: {data.hall}</div>
//           <div>Idő: {new Date(data.start).toLocaleString()}</div>
//           <div>Sor: {data.row}</div>
//           <div>Szék: {data.seat}</div>
//           <div>Típus: {data.type}</div>

//         </div>

//       </div>

//     </div>
//   );
// }