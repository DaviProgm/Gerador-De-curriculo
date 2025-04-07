// components/Step8Templates.jsx
export default function Step8Templates({ form, onChange, onVoltar, onProximo }) {
  const templates = [
    { id: 'classico', nome: 'Clássico' },
    { id: 'moderno', nome: 'Moderno' },
    { id: 'minimalista', nome: 'Minimalista' },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-center">Escolha um Estilo de Currículo</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {templates.map((template) => (
          <label
            key={template.id}
            className={`border p-4 rounded cursor-pointer transition duration-300 ${
              form.estilo === template.id ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
            }`}
          >
            <input
              type="radio"
              name="estilo"
              value={template.id}
              checked={form.estilo === template.id}
              onChange={onChange}
              className="hidden"
            />
            <div className="text-center font-semibold">{template.nome}</div>
            {/* Aqui você pode colocar uma imagem ou preview visual do template */}
            <div className="mt-2 h-24 bg-gray-100 rounded shadow-inner flex items-center justify-center text-sm text-gray-500">
              Prévia do {template.nome}
            </div>
          </label>
        ))}
      </div>

      <div className="flex justify-between">
        <button onClick={onVoltar} className="bg-gray-600 text-white px-4 py-2 rounded">Voltar</button>
        <button onClick={onProximo} className="bg-blue-600 text-white px-4 py-2 rounded">Finalizar</button>
      </div>
    </div>
  );
}
