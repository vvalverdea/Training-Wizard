export const exercises: { [muscle: string]: { [part: string]: { id: number; title: string }[] } } = {
    Biceps: {
        "Braquial": [
            { id: 1, title: "Curl martillo" },
            { id: 2, title: "Curl inverso" },
        ],
        "Cabeza Corta": [
            { id: 3, title: "Curl con barra Z agarre ancho" },
            { id: 4, title: "Curl concentrado" },
        ],
        "Cabeza Larga": [
            { id: 5, title: "Curl con barra agarre cerrado" },
            { id: 6, title: "Curl en banco inclinado" },
        ],
    },
    Triceps: {
        "Cabeza Larga": [
            { id: 7, title: "Press francés con barra Z" },
            { id: 8, title: "Extensiones con mancuerna tras la cabeza" },
            { id: 9, title: "Press cerrado en banco plano" },
        ],
        "Cabeza Corta": [
            { id: 10, title: "Fondos en paralelas" },
            { id: 11, title: "Press cerrado con barra" },
            { id: 12, title: "Extensión de tríceps en polea con cuerda" },
        ],
        "Cabeza Medial": [
            { id: 13, title: "Extensiones de tríceps en polea con barra recta" },
            { id: 14, title: "Press de banca con agarre estrecho" },
            { id: 15, title: "Patada de tríceps con mancuerna" },
        ]
    },
    Chest: {
        "Superior": [
            { id: 16, title: "Press inclinado con barra" },
            { id: 17, title: "Press inclinado con mancuernas" },
            { id: 18, title: "Aperturas inclinadas" },
        ],
        "Medio": [
            { id: 19, title: "Press banca plano con barra" },
            { id: 20, title: "Press banca plano con mancuernas" },
            { id: 21, title: "Aperturas en banco plano" },
        ],
        "Inferior": [
            { id: 22, title: "Press declinado con barra" },
            { id: 23, title: "Fondos en paralelas" },
        ],
    },
    Back: {
        "Dorsal ancho": [
            { id: 24, title: "Dominadas agarre ancho" },
            { id: 25, title: "Jalón al pecho" },
        ],
        "Trapecio": [
            { id: 26, title: "Remo con barra" },
            { id: 27, title: "Remo con mancuerna" },
        ],
        "Romboides": [
            { id: 28, title: "Encogimientos con barra" },
            { id: 29, title: "Encogimientos con mancuernas" },
        ],
    },
    Shoulders: {
        "Anterior": [
            { id: 30, title: "Press militar" },
            { id: 31, title: "Elevaciones frontales" },
        ],
        "Lateral": [
            { id: 32, title: "Elevaciones laterales" },
        ],
        "Posterior": [
            { id: 33, title: "Pájaros (rear delts)" },
            { id: 34, title: "Face pulls" },
        ],
    },
    Legs: {
        "Cuádriceps": [
            { id: 35, title: "Sentadillas" },
            { id: 36, title: "Prensa de pierna" },
            { id: 37, title: "Zancadas" },
        ],
        "Isquiotibiales": [
            { id: 38, title: "Peso muerto rumano" },
            { id: 39, title: "Curl femoral" },
        ],
        "Glúteos": [
            { id: 40, title: "Hip thrust" },
            { id: 41, title: "Puente de glúteo" },
        ],
        "Pantorrillas": [
            { id: 42, title: "Elevaciones de talones de pie" },
            { id: 43, title: "Elevaciones de talones sentado" },
        ],
    },
    Core: {
        "Recto abdominal": [
            { id: 44, title: "Crunch abdominal" },
            { id: 45, title: "Elevación de piernas" },
        ],
        "Oblicuos": [
            { id: 46, title: "Russian twist" },
            { id: 47, title: "Side plank" },
        ],
        "Transverso": [
            { id: 48, title: "Plancha" },
            { id: 49, title: "Dead bug" },
        ],
    },
    Forearms: {
        "Flexores": [
            { id: 50, title: "Curl de muñeca con barra" },
            { id: 51, title: "Farmer’s walk" },
        ],
        "Extensores": [
            { id: 52, title: "Curl inverso" },
            { id: 53, title: "Extensión de muñeca" },
        ],
    },
};



export const EXERCISES_DATA: { [id: number]: { title: string; image: string; description: string } } = {
    1: {
        title: 'Curl martillo',
        image: 'assets/exercises/curlmartillo.gif',
        description: 'Para comenzar el ejercicio nos colocaremos de pie con las rodillas levemente flexionadas y una mancuerna en cada mano, tomadas de manera tal que las palmas se miren entre ellas. Con la espalda recta e intentando no movilizar el brazo y codo sino únicamente el antebrazo, inspiramos y realizamos una flexión de codo con uno de los brazos, conservando la posición de las manos.'
    },
    2: {
        title: 'Curl inverso',
        image: 'assets/exercises/curlinvertido.gif',
        description: 'De pie con los pies separados al ancho de los hombros. Sostén una barra con las palmas hacia abajo.Con un movimiento similar al de un curl con barra tradicional, lleva la barra a la altura de los hombros. Mantén el core y la espalda fuertes. Aprieta los músculos en la parte superior y vuelve suavemente a la posición inicial.'
    },
    3: {
        title: 'Curl con barra Z agarre ancho',
        image: 'assets/exercises/curlzbicepswide.gif',
        description: 'En caso de que tengas una barra recta, separa las manos unos 15 centímetros más de la anchura de los hombros. Presta especial atención a tu técnica, porque las articulaciones pueden sufrir con este movimiento en barra recta.'
    },
    4: {
        title: 'Curl concentrado',
        image: 'assets/exercises/curlconcentrado.gif',
        description: 'Desde esa posición iniciamos, con el tronco levemente inclinado, el movimiento. Inspiramos y flexionamos el codo para llevar el peso desde el pie hacia la rodilla contraria. Expiramos al final del movimiento y comenzamos un descenso controlado del peso hasta extender el codo nuevamente.'
    },
    5: {
        title: 'Curl con barra Z agarre cerrado',
        image: 'assets/exercises/curlzbicepsclose.gif',
        description: 'De nuevo, puedes optar por agarrar la curva interior de la barra Z, o utilizar una barra recta. En el segundo caso, coloca las manos a la misma distancia que los hombros y, después, recorta 5 centímetros hacia el centro de cada lado.'
    },
    6: {
        title: 'Curl en banco inclinado',
        image: 'assets/exercises/curlinclinado.gif',
        description: 'Desde esa posición iniciamos, con el tronco levemente inclinado, el movimiento. Inspiramos y flexionamos el codo para llevar el peso desde el pie hacia la rodilla contraria. Expiramos al final del movimiento y comenzamos un descenso controlado del peso hasta extender el codo nuevamente.'
    },
    30: {
        title: 'Press militar',
        image: 'assets/exercises/pressmilitar.gif',
        description: 'Posición inicial: Colócate de pie con los pies separados al ancho de los hombros. Mantén la barra a la altura de los hombros con un agarre ligeramente más ancho que los hombros.Core firme: Activa tu core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral. Imagina que estás tratando de acercar tus costillas hacia tu pelvis. Postura neutra: Mantén una postura neutra durante todo el movimiento. Evita hiperextender la espalda baja y concéntrate en mantener una línea recta desde la cabeza hasta los pies.'
    },
    31: {
        title: 'Elevaciones frontales',
        image: 'assets/exercises/elevacionesfrontales.gif',
        description: 'Levanta las mancuernas hacia delante sin balancearte y manteniendo las palmas mirando hacia abajo.Exhala profundamente mientras levantas las mancuernas y mantén una ligera flexión de los codos durante el ejercicio. Cuando las mancuernas estén a la altura de tus ojos, aprieta los deltoides y aguanta la postura 1-2 segundos.'
    },
    32: {
        title: 'Elevaciones laterales',
        image: 'assets/exercises/elevacioneslaterales.gif',
        description: 'Levanta los brazos hacia los lados del cuerpo de forma controlada y sin balanceos o movimientos bruscos hasta que los brazos estén en paralelo al suelo. En lugar de mantener los brazos completamente estirados y bloqueados, mantén una ligera flexión de los codos. En la parte alta del ejercicio, las mancuernas deben quedar en línea con los hombros a los lados del cuerpo, con las palmas de las manos mirando hacia el suelo. Haz una pausa de 1-2 segundos y vuelve a la posición inicial de forma lenta y controlada'
    },
    33: {
        title: 'Pájaros (rear delts)',
        image: 'assets/exercises/pajaros.gif',
        description: 'Posición inicial: De pie, con los pies separados a la anchura de los hombros, flexiona ligeramente las rodillas y inclínate hacia adelante desde las caderas, manteniendo la espalda recta y la cabeza alineada con la columna vertebral. Agarre: Sostén una mancuerna en cada mano, con las palmas mirándose entre sí. Movimiento: Con los brazos extendidos hacia abajo, levanta los brazos hacia los lados, manteniendo los codos ligeramente flexionados, hasta que estén paralelos al suelo. Control: Baja las mancuernas de manera controlada a la posición inicial, manteniendo el control del movimiento y evitando encorvar los hombros o redondear la espalda.'
    },
    34: {
        title: 'Face pulls',
        image: 'assets/exercises/facepull.gif',
        description: 'Ponte de pie frente a la máquina con los pies al ancho de hombros. Sujeta la cuerda con agarre prono, brazos extendidos y torso estable. Tira de la cuerda hacia la cara elevando los codos y contrayendo omóplatos, abre la cuerda alrededor del rostro y haz una breve pausa. Vuelve de forma controlada a la posición inicial manteniendo la tensión y repite las veces necesarias.'
    },
};


