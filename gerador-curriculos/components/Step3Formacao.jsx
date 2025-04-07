export default function Step3Formacao({ form, onChange, onProximo, onVoltar }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onProximo(); }} className="space-y-4">
      <h2 className="text-xl font-bold">Formação Acadêmica</h2>
      <input name="formacao" value={form.formacao || ''} onChange={onChange} placeholder="Ex: Bacharel em Sistemas de Informação" className="w-full p-2 border rounded" />
      <div className="flex gap-4">
        <button type="button" onClick={onVoltar} className="bg-gray-500 text-white px-4 py-2 rounded">Voltar</button>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Próximo</button>
      </div>
    </form>
  );
}
