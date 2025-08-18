export const exercises: { [muscle: string]: { [part: string]: { id: number; title: string }[] } } = {
    Biceps: {
        "Braquial": [
            { id: 1, title: "Curl martillo" },
            { id: 2, title: "Curl inverso" },
        ],
        "Cabeza Corta": [
            { id: 3, title: "Curl con barra Z agarre cerrado" },
            { id: 4, title: "Curl concentrado" },
        ],
        "Cabeza Larga": [
            { id: 5, title: "Curl con barra agarre ancho" },
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
    3: {
        title: 'Curl con barra Z agarre cerrado',
        image: 'assets/exercises/curlzbiceps.gif',
        description: 'Mantén los codos pegados al cuerpo y controla el movimiento tanto al subir como al bajar la barra.'
    },
    30: {
        title: 'Press de Hombros con Mancuernas',
        image: 'assets/exercises/press-hombros.gif',
        description: 'Mantén la espalda recta y los hombros hacia abajo mientras empujas las mancuernas hacia arriba.'
    },
    10: {
        title: 'Fondos en Paralelas',
        image: 'assets/exercises/dips.gif',
        description: 'Baja lentamente manteniendo los codos cerca del torso y sube controlando el movimiento.'
    },
    35: {
        title: 'Sentadillas con Barra',
        image: 'assets/exercises/sentadillas.gif',
        description: 'Mantén la espalda recta y baja hasta que los muslos queden paralelos al suelo.'
    }
};


