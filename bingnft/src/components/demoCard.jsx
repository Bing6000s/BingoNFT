//demo cards. 

/*
 * Demo cards
 * Fields: 
 * Name <- username
 * mainIMG <- photo image url
 * quote 1
 * quote 2
 */

 export default function NftProfileCardGeneric({ username, imageUrl, quote1, quote2 }) {
  return (
    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md border border-gray-200 p-6 mx-auto flex flex-col md:flex-row gap-6">
      {/* Left: Text */}
      <div className="md:w-2/3 flex flex-col justify-between">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{username}</h2>

        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>{quote1}</li>
          <li>{quote2}</li>
        </ul>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/3 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={username}
          className="w-full max-w-[200px] aspect-square object-cover rounded-2xl border border-gray-300 shadow-sm"
        />
      </div>
    </div>
  );
}
