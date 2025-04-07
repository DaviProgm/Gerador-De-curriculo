export default function Step4Experiencias({ form, onChange, onProximo, onVoltar }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onProximo(); }} className="space-y-4">
      <h2 className="text-xl font-bold">Experiências</h2>
      <textarea name="experiencias" value={form.experiencias || ''} onChange={onChange} placeholder="Descreva suas experiências anteriores" className="w-full p-2 border rounded h-32" />
      <div className="flex gap-4">
        <button type="button" onClick={onVoltar} className="bg-gray-500 text-white px-4 py-2 rounded">Voltar</button>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Próximo</button>
      </div>
    </form>
  );
}
