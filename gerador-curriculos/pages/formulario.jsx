import { useState, } from 'react';
import dynamic from 'next/dynamic';
import ProgressBar from '../components/ProgressBar';
const Step9CurriculoFinal = dynamic(() => import('../components/Step9CurriculoFinal'), { ssr: false });

const Step1DadosPessoais = dynamic(() => import('../components/Step1DadosPessoais'));
const Step2Profissional = dynamic(() => import('../components/Step2Profissional'));
const Step3Formacao = dynamic(() => import('../components/Step3Formacao'));
const Step4Experiencias = dynamic(() => import('../components/Step4Experiencias'));
const Step5Cursos = dynamic(() => import('../components/Step5Cursos'));
const Step6Idiomas = dynamic(() => import('../components/Step6Idiomas'));
const Step7Preview = dynamic(() => import('../components/Step7Preview'), { ssr: false });
const Step8Templates = dynamic(() => import('../components/Step8Templates'), { ssr: false });

export default function Formulario() {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
        cargo: '',
        resumo: '',
        formacao: '',
        experiencias: '',
        cursos: '',
        idiomas: '',
        links: [],
        estilo: 'classico',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleLinksChange = (novosLinks) => {
        setForm((prev) => ({ ...prev, links: novosLinks }));
    };


    return (
        <main className="max-w-2xl mx-auto p-4">
            <ProgressBar step={step} totalSteps={8} />

            {step === 1 && (
                <Step1DadosPessoais
                    form={form}
                    onChange={handleChange}
                    onProximo={() => setStep(2)}
                />
            )}

            {step === 2 && (
                <Step2Profissional
                    form={form}
                    onChange={handleChange}
                    onProximo={() => setStep(3)}
                    onVoltar={() => setStep(1)}
                />
            )}

            {step === 3 && (
                <Step3Formacao
                    form={form}
                    onChange={handleChange}
                    onProximo={() => setStep(4)}
                    onVoltar={() => setStep(2)}
                />
            )}

            {step === 4 && (
                <Step4Experiencias
                    form={form}
                    onChange={handleChange}
                    onProximo={() => setStep(5)}
                    onVoltar={() => setStep(3)}
                />
            )}

            {step === 5 && (
                <Step5Cursos
                    form={form}
                    onChange={handleChange}
                    onProximo={() => setStep(6)}
                    onVoltar={() => setStep(4)}
                />
            )}

            {step === 6 && (
                <Step6Idiomas
                    form={form}
                    onChange={handleChange}
                    onLinksChange={handleLinksChange}
                    onProximo={() => setStep(7)}
                    onVoltar={() => setStep(5)}
                />
            )}

            {step === 7 && (
                <Step7Preview
                    form={form}
                    onVoltar={() => setStep(6)}
                    onProximo={() => setStep(8)}
                    estiloSelecionado={form.estilo}
                />
            )}


            {step === 8 && (
                <Step8Templates
                    form={form}
                    onChange={handleChange}
                    onVoltar={() => setStep(7)}
                    onProximo={() => setStep(9)}
                />
            )}
            {step === 9 && (
                <Step9CurriculoFinal
                    form={form}
                    onVoltar={() => setStep(8)}
                />
            )}

        </main>
    );
}
