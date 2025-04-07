import { useState } from 'react';

export default function Step6Idiomas({ form, onChange, onProximo, onVoltar, onLinksChange }) {
  const [novoLink, setNovoLink] = useState('');

  const adicionarLink = () => {
    const link = novoLink.trim();
    if (link) {
      onLinksChange([...form.links, link]);
      setNovoLink('');
    }
  };

  const removerLink = (index) => {
    const novosLinks = form.links.filter((_, i) => i !== index);
    onLinksChange(novosLinks);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Idiomas e Links</h2>

      <textarea
        name="idiomas"
        value={form.idiomas}
        onChange={onChange}
        placeholder="Digite os idiomas que você domina"
        className="w-full p-2 border rounded h-24"
      />

      <div>
        <label className="block mb-1 font-medium">Links (LinkedIn, GitHub, portfólio...)</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={novoLink}
            onChange={(e) => setNovoLink(e.target.value)}
            placeholder="https://..."
            className="flex-grow p-2 border rounded"
          />
          <button
            type="button"
            onClick={adicionarLink}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Adicionar
          </button>
        </div>

        {form.links.length > 0 && (
          <ul className="mt-3 list-disc ml-5 space-y-1">
            {form.links.map((link, index) => (
              <li key={index} className="flex justify-between items-center">
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline truncate max-w-xs">
                  {link}
                </a>
                <button
                  type="button"
                  onClick={() => removerLink(index)}
                  className="text-red-600 hover:text-red-800 ml-2"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex justify-between mt-4">
        <button type="button" onClick={onVoltar} className="bg-gray-400 text-white px-4 py-2 rounded">
          Voltar
        </button>
        <button type="button" onClick={onProximo} className="bg-blue-600 text-white px-4 py-2 rounded">
          Próximo
        </button>
      </div>
    </div>
  );
}
