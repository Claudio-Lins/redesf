import Image from "next/image";
import Head from "next/head";

export default function ConselhoInternacional({ conselhoInternacional }) {
  return (
    <div className="py-20 lg:w-4/5 mx-auto">
      <Head>
        <title>RedeSF - Conselho Internacional</title>
      </Head>
      {conselhoInternacional &&
        conselhoInternacional.map((conselho) => (
          <div key={conselho.id}>
            <div className="lg:flex p-8 lg:items-center md:px-48 lg:py-2">
              <div className="flex-grow bg-white shadow-lg rounded-md border p-6">
                <div className="sm:flex sm:items-center sm:mx-auto">
                  <div className=" flex-shrink-0 mb-2 flex justify-center sm:items-center">
                    <Image
                      className="rounded-full object-cover"
                      src={conselho.picture.url}
                      alt={conselho.nome}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="sm:ml-4 sm:text-left text-center">
                    <h4 className="">
                      <strong className="text-sm text-gray-800">
                        {conselho.cargo}
                        {conselho.nome}
                      </strong>
                      <a
                        className="text-xs ml-2 text-blue-400"
                        href={conselho.email}
                      >
                        {conselho.email}
                      </a>
                    </h4>
                    <p className="text-gray-600 text-sm font-light text-justify">
                      {conselho.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://cryptic-retreat-90035.herokuapp.com/conselho-internacionals"
  );
  const conselhoInternacional = await res.json();

  return {
    props: {
      conselhoInternacional,
    },
  };
}

// import fetch from "isomorphic-unfetch";
// import Image from "next/image";
// import Head from "next/head";

// export default function ConselhoInternacional(props) {
//   return (
//     <div className="min-h-screen bg-white mt-36 mb-20 container mx-auto">
//       <Head>
//         <title>RedeSF - Conselho Internacional</title>
//         {/* <link rel="icon" href="/favicon.ico" /> */}
//       </Head>
//       <div className="font-bold text-center text-gray-800 text-3xl py-4 my-4">
//         <h1>Conselho Internacional</h1>
//       </div>

//       {/* Cards */}
//       {/* Card COntent */}

//       <div className="lg:flex p-8 lg:items-center md:px-48 lg:py-2">
//         <div className="flex-grow bg-white shadow-lg rounded-md border p-6">
//           <div className="sm:flex sm:items-center sm:mx-auto">
//             <div className=" flex-shrink-0 mb-2 flex justify-center sm:items-center">
//               <Image
//                 className="rounded-full object-cover"
//                 src={props.conselhoInter.imgUrl}
//                 alt={props.conselhoInter.alt}
//                 width={80}
//                 height={80}
//               />
//             </div>
//             <div className="sm:ml-4 sm:text-left text-center">
//               <h4 className="">
//                 <strong className="text-sm text-gray-800">
//                   {props.conselhoInter.cargo}
//                   {props.conselhoInter.name}
//                 </strong>
//                 <a
//                   className="text-xs  ml-2 text-blue-400"
//                   href={props.conselhoInter.emailLink}
//                 >
//                   {props.conselhoInter.email}
//                 </a>
//               </h4>
//               <p className="text-gray-600 text-sm font-light text-justify">
//                 {props.conselhoInter.descritivo}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className=" container px-4 sm:px-48 sm:py-2">
//         <hr></hr>
//       </div>

//       <div className="lg:flex p-8 lg:items-center md:px-48 lg:py-2">
//         <div className="flex-grow bg-white shadow-lg rounded-md border p-6">
//           <div className="sm:flex sm:items-center sm:mx-auto">
//             <div className=" flex-shrink-0 mb-2 flex justify-center sm:items-center">
//               <Image
//                 className="rounded-full object-cover"
//                 src={props.conselhoInter.imgUrl2}
//                 alt={props.conselhoInter.alt2}
//                 width={80}
//                 height={80}
//               />
//             </div>
//             <div className="sm:ml-4 sm:text-left text-center">
//               <h4 className="">
//                 <strong className="text-sm text-gray-800">
//                   {props.conselhoInter.name2}
//                 </strong>
//                 <a
//                   className="text-xs ml-2 text-blue-400"
//                   href={props.conselhoInter.emailLink2}
//                 >
//                   {props.conselhoInter.email2}
//                 </a>
//               </h4>
//               <p className="text-gray-600 text-sm font-light text-justify">
//                 {props.conselhoInter.descritivo2}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className=" container px-4 sm:px-48 sm:py-2">
//         <hr></hr>
//       </div>

//       <div className="lg:flex p-8 lg:items-center md:px-48 lg:py-2">
//         <div className="flex-grow bg-white shadow-lg rounded-md border p-6">
//           <div className="sm:flex sm:items-center sm:mx-auto">
//             <div className=" flex-shrink-0 mb-2 flex justify-center sm:items-center">
//               <Image
//                 className="rounded-full object-cover"
//                 src={props.conselhoInter.imgUrl3}
//                 alt={props.conselhoInter.alt3}
//                 width={80}
//                 height={80}
//               />
//             </div>
//             <div className="sm:ml-4 sm:text-left text-center">
//               <h4 className="">
//                 <strong className="text-sm text-gray-800">
//                   {props.conselhoInter.name3}
//                 </strong>
//                 <a
//                   className="text-xs ml-2 text-blue-400"
//                   href={props.conselhoInter.emailLink3}
//                 >
//                   {props.conselhoInter.email3}
//                 </a>
//               </h4>
//               <p className="text-gray-600 text-sm font-light text-justify">
//                 {props.conselhoInter.descritivo3}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className=" container px-4 sm:px-48 sm:py-2">
//         <hr></hr>
//       </div>

//       <div className="lg:flex p-8 lg:items-center md:px-48 lg:py-2">
//         <div className="flex-grow bg-white shadow-lg rounded-md border p-6">
//           <div className="sm:flex sm:items-center sm:mx-auto">
//             <div className=" flex-shrink-0 mb-2 flex justify-center sm:items-center">
//               <Image
//                 className="rounded-full object-cover"
//                 src={props.conselhoInter.imgUrl4}
//                 alt={props.conselhoInter.alt4}
//                 width={80}
//                 height={80}
//               />
//             </div>
//             <div className="sm:ml-4 sm:text-left text-center">
//               <h4 className="">
//                 <strong className="text-sm text-gray-800">
//                   {props.conselhoInter.name4}
//                 </strong>
//                 <a
//                   className="text-xs ml-2 text-blue-400"
//                   href={props.conselhoInter.emailLink4}
//                 >
//                   {props.conselhoInter.email4}
//                 </a>
//               </h4>
//               <p className="text-gray-600 text-sm font-light text-justify">
//                 {props.conselhoInter.descritivo4}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className=" container px-4 sm:px-48 sm:py-2">
//         <hr></hr>
//       </div>

//       <div className="lg:flex p-8 lg:items-center md:px-48 lg:py-2">
//         <div className="flex-grow bg-white shadow-lg rounded-md border p-6">
//           <div className="sm:flex sm:items-center sm:mx-auto">
//             <div className=" flex-shrink-0 mb-2 flex justify-center sm:items-center">
//               <Image
//                 className="rounded-full object-cover"
//                 src={props.conselhoInter.imgUrl5}
//                 alt={props.conselhoInter.alt5}
//                 width={80}
//                 height={80}
//               />
//             </div>
//             <div className="sm:ml-4 sm:text-left text-center">
//               <h4 className="">
//                 <strong className="text-sm text-gray-800">
//                   {props.conselhoInter.name5}
//                 </strong>
//                 <a
//                   className="text-xs ml-2 text-blue-400"
//                   href={props.conselhoInter.emailLink5}
//                 >
//                   {props.conselhoInter.email5}
//                 </a>
//               </h4>
//               <p className="text-gray-600 text-sm font-light text-justify">
//                 {props.conselhoInter.descritivo5}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className=" container px-4 sm:px-48 sm:py-2">
//         <hr></hr>
//       </div>

//       <div className="lg:flex p-8 lg:items-center md:px-48 lg:py-2">
//         <div className="flex-grow bg-white shadow-lg rounded-md border p-6">
//           <div className="sm:flex sm:items-center sm:mx-auto">
//             <div className=" flex-shrink-0 mb-2 flex justify-center sm:items-center">
//               <Image
//                 className="rounded-full object-cover"
//                 src={props.conselhoInter.imgUrl4}
//                 alt={props.conselhoInter.alt4}
//                 width={80}
//                 height={80}
//               />
//             </div>
//             <div className="sm:ml-4 sm:text-left text-center">
//               <h4 className="">
//                 <strong className="text-sm text-gray-800">
//                   {props.conselhoInter.name4}
//                 </strong>
//                 <a
//                   className="text-xs ml-2 text-blue-400"
//                   href={props.conselhoInter.emailLink4}
//                 >
//                   {props.conselhoInter.email4}
//                 </a>
//               </h4>
//               <p className="text-gray-600 text-sm font-light text-justify">
//                 {props.conselhoInter.descritivo4}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className=" container px-4 sm:px-48 sm:py-2">
//         <hr></hr>
//       </div>

//       <div className="lg:flex p-8 lg:items-center md:px-48 lg:py-2">
//         <div className="flex-grow bg-white shadow-lg rounded-md border p-6">
//           <div className="sm:flex sm:items-center sm:mx-auto">
//             <div className=" flex-shrink-0 mb-2 flex justify-center sm:items-center">
//               <Image
//                 className="rounded-full object-cover"
//                 src={props.conselhoInter.imgUrl7}
//                 alt={props.conselhoInter.alt7}
//                 width={80}
//                 height={80}
//               />
//             </div>
//             <div className="sm:ml-4 sm:text-left text-center">
//               <h4 className="">
//                 <strong className="text-sm text-gray-800">
//                   {props.conselhoInter.name7}
//                 </strong>
//                 <a
//                   className="text-xs ml-2 text-blue-400"
//                   href={props.conselhoInter.emailLink7}
//                 >
//                   {props.conselhoInter.email7}
//                 </a>
//               </h4>
//               <p className="text-gray-600 text-sm font-light text-justify">
//                 {props.conselhoInter.descritivo7}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export async function getServerSideProps(context) {
//   const res = await fetch("http://localhost:3000/api/conselho-inter-api");
//   const conselhoInter = await res.json();
//   return {
//     props: {
//       conselhoInter,
//     },
//   };
// }
