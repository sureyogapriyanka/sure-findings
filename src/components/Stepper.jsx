import React from 'react';
import { Check } from 'lucide-react';

const Stepper = ({ steps, currentStep, onStepChange }) => {
    return (
        <div className="w-full py-6">
            <div className="relative">
                {/* Progress bar background */}
                <div className="absolute top-4 left-0 right-0 h-1 bg-orange-200 rounded-full z-0"></div>

                {/* Animated progress line */}
                <div
                    className="absolute top-4 left-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full z-10 transition-all duration-500 ease-in-out"
                    style={{
                        width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
                        maxWidth: '100%'
                    }}
                ></div>

                {/* Steps */}
                <div className="relative flex justify-between z-20">
                    {steps.map((step, index) => {
                        const stepNumber = index + 1;
                        const isCompleted = stepNumber < currentStep;
                        const isCurrent = stepNumber === currentStep;

                        return (
                            <div key={index} className="flex flex-col items-center">
                                <button
                                    onClick={() => onStepChange && onStepChange(stepNumber)}
                                    disabled={!isCompleted && !isCurrent}
                                    className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                    ${isCompleted
                                            ? 'bg-green-500 text-white border-2 border-green-500'
                                            : isCurrent
                                                ? 'bg-orange-500 text-white border-2 border-orange-500 shadow-lg transform scale-110'
                                                : 'bg-white text-gray-400 border-2 border-gray-300'
                                        }
                    ${!isCompleted && !isCurrent ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-105'}
                  `}
                                >
                                    {isCompleted ? <Check className="w-4 h-4" /> : stepNumber}
                                </button>
                                <span className={`mt-2 text-xs font-medium text-center w-24 ${isCurrent ? 'text-orange-700 font-bold' : 'text-gray-600'}`}>
                                    {step}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Stepper;