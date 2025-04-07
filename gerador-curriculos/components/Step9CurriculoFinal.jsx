// components/Step9CurriculoFinal.jsx
export default function Step9CurriculoFinal({ form, onVoltar }) {
    const { nome, email, telefone, endereco, cargo, resumo, formacao, experiencias, cursos, idiomas, links, estilo } = form;
  
    const estiloClasses = {
      classico: "bg-white text-black p-6 border",
      moderno: "bg-gray-900 text-white p-6 rounded-lg shadow-lg",
      minimalista: "bg-gray-100 text-gray-800 p-6 font-light border-l-4 border-blue-500",
    };
  
    return (
      <div className={`mt-6 ${estiloClasses[estilo]}`}>
        <h1 className="text-2xl font-bold mb-2">{nome}</h1>
        <p>{email} | {telefone} | {endereco}</p>
        <h2 className="mt-4 font-semibold">Cargo Desejado:</h2>
        <p>{cargo}</p>
  
        <h2 className="mt-4 font-semibold">Resumo:</h2>
        <p>{resumo}</p>
  
        <h2 className="mt-4 font-semibold">Formação:</h2>
        <p>{formacao}</p>
  
        <h2 className="mt-4 font-semibold">Experiências:</h2>
        <p>{experiencias}</p>
  
        <h2 className="mt-4 font-semibold">Cursos:</h2>
        <p>{cursos}</p>
  
        <h2 className="mt-4 font-semibold">Idiomas:</h2>
        <p>{idiomas}</p>
  
        <h2 className="mt-4 font-semibold">Links:</h2>
        <ul className="list-disc list-inside">
          {links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
  
        <div className="mt-6">
          <button onClick={onVoltar} className="bg-gray-600 text-white px-4 py-2 rounded">Voltar</button>
        </div>
      </div>
    );
  }
  
  