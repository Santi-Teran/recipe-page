export default function Nutrition() {
  return (
    <div className="px-6 md:px-0">
      <h2 className="young-serif text-3xl text-Nutmeg my-6">Nutrition</h2>
      <p className="text-Brown mb-6">The table below shows nutritional values per serving without the additional fillings.</p>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse">
          <tbody>
            <tr>
              <td className="px-10 py-2 border-b text-Brown">Calories</td>
              <td className="px-32 py-2 border-b text-Nutmeg font-semibold">277kcal</td>
            </tr>
            <tr>
              <td className="px-10 py-2 border-b text-Brown">Carbs</td>
              <td className="px-32 py-2 border-b text-Nutmeg font-semibold">0g</td>
            </tr>
            <tr>
              <td className="px-10 py-2 border-b text-Brown">Protein</td>
              <td className="px-32 py-2 border-b text-Nutmeg font-semibold">20g</td>
            </tr>
            <tr>
              <td className="px-10 py-2 text-Brown">Fat</td>
              <td className="px-32 py-2 text-Nutmeg font-semibold">22g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
