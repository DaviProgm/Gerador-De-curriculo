export default function ProgressBar({ currentStep, totalSteps }) {
    const percentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
  
    return (
      <div className="w-full mb-6">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-sm text-center mt-2 text-gray-700">
          Etapa {currentStep} de {totalSteps}
        </p>
      </div>
    );
  }
  