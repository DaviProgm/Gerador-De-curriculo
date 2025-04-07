export default function Step1DadosPessoais({ form, onChange, onProximo }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onProximo(); }} className="space-y-4">
      <h2 className="text-xl font-bold">Dados Pessoais</h2>
      <input name="nome" value={form.nome || ''} onChange={onChange} placeholder="Nome completo" className="w-full p-2 border rounded" />
      <input name="email" value={form.email || ''} onChange={onChange} placeholder="E-mail" className="w-full p-2 border rounded" />
      <input name="telefone" value={form.telefone || ''} onChange={onChange} placeholder="Telefone" className="w-full p-2 border rounded" />
      <input name="endereco" value={form.endereco || ''} onChange={onChange} placeholder="Endereço" className="w-full p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Próximo
      </button>
    </form>
  );
}
