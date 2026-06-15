(() => {

    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {
        const redFruits = ['manzana', 'cereza', 'ciruela'];

        return redFruits.includes(fruit);
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    interface FruitsByColor {
        red: string[];
        yellow: string[];
        purple: string[];
    }

    function getFruitsByColor( color: string ): string[] {

        const fruitsByColor: FruitsByColor = {
            red: ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple: ['moras', 'uvas'],
        };

        const validColors = Object.keys(fruitsByColor);

        if ( !validColors.includes(color) ) {
            throw Error('the color must be: red, yellow, purple');
        }

        return fruitsByColor[color as keyof FruitsByColor];
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    interface WorkingStep {
        isWorking: boolean;
        errorMessage: string;
    }

    function workingSteps(): string {

        const steps: WorkingStep[] = [
            { isWorking: isFirstStepWorking, errorMessage: 'First step broken.' },
            { isWorking: isSecondStepWorking, errorMessage: 'Second step broken.' },
            { isWorking: isThirdStepWorking, errorMessage: 'Third step broken.' },
            { isWorking: isFourthStepWorking, errorMessage: 'Fourth step broken.' },
        ];

        const brokenStep = steps.find( step => !step.isWorking );

        return brokenStep ? brokenStep.errorMessage : 'Working properly!';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // false

    // getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores y esperar los resultados


})();