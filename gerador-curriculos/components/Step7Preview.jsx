import { useRef, useEffect, useState } from 'react';

export default function Step7Preview({ form, onVoltar, onProximo, estiloSelecionado }) {
  const cvRef = useRef();
  const [html2pdf, setHtml2pdf] = useState(null);

  // Carrega html2pdf.js no client
  useEffect(() => {
    import('html2pdf.js').then((module) => {
      setHtml2pdf(module.default);
    });
  }, []);

  function gerarPDF() {
    if (!html2pdf) return;

    const elemento = cvRef.current;
    const opt = {
      margin: 0.5,
      filename: 'curriculo.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(elemento).save();
  }

  return (
    <div className="space-y-4">
      <div
        ref={cvRef}
        className={`p-6 border rounded bg-white shadow preview-${estiloSelecionado}`}
      >
        <h2 className="text-2xl font-bold mb-2">{form.nome}</h2>
        <p><strong>Email:</strong> {form.email}</p>
        <p><strong>Telefone:</strong> {form.telefone}</p>
        <p><strong>Endereço:</strong> {form.endereco}</p>
        <p><strong>Cargo desejado:</strong> {form.cargo}</p>
        <p className="mt-2"><strong>Resumo:</strong></p>
        <p>{form.resumo}</p>
        <hr className="my-4" />
        <p><strong>Formação:</strong></p>
        <p>{form.formacao}</p>
        <p><strong>Experiências:</strong></p>
        <p>{form.experiencias}</p>
        <p><strong>Cursos:</strong></p>
        <p>{form.cursos}</p>
        <p><strong>Idiomas:</strong></p>
        <p>{form.idiomas}</p>
        <p><strong>Links:</strong></p>
        <ul className="list-disc ml-5">
          {(form.links || []).map((link, index) => (
            <li key={index}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onVoltar}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Voltar
        </button>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={gerarPDF}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Baixar PDF
          </button>

          <button
            type="button"
            onClick={onProximo}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}
