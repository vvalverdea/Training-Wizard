export const exercises: { [muscle: string]: { [part: string]: string[] } } = {
    Biceps: {
        "Braquial": [
            "Curl martillo",
            "Curl inverso",
        ],
        "Cabeza Corta": [
            "Curl con barra Z agarre cerrado",
            "Curl concentrado",
        ],
        "Cabeza Larga": [
            "Curl con barra agarre ancho",
            "Curl en banco inclinado",
        ],
    },
    Triceps: {
        "Cabeza Larga": [
            "Press francés con barra Z",
            "Extensiones con mancuerna tras la cabeza",
            "Press cerrado en banco plano"
        ],
        "Cabeza Corta": [
            "Fondos en paralelas",
            "Press cerrado con barra",
            "Extensión de tríceps en polea con cuerda"
        ],
        "Cabeza Medial": [
            "Extensiones de tríceps en polea con barra recta",
            "Press de banca con agarre estrecho",
            "Patada de tríceps con mancuerna"
        ]
    },
    Chest: {
        "Superior": [
            "Press inclinado con barra",
            "Press inclinado con mancuernas",
            "Aperturas inclinadas",
        ],
        "Medio": [
            "Press banca plano con barra",
            "Press banca plano con mancuernas",
            "Aperturas en banco plano",
        ],
        "Inferior": [
            "Press declinado con barra",
            "Fondos en paralelas",
        ],
    },
    Back: {
        "Dorsal ancho": [
            "Dominadas agarre ancho",
            "Jalón al pecho",
        ],
        "Trapecio": [
            "Remo con barra",
            "Remo con mancuerna",
        ],
        "Romboides": [
            "Encogimientos con barra",
            "Encogimientos con mancuernas",
        ],
    },
    Shoulders: {
        "Anterior": [
            "Press militar",
            "Elevaciones frontales",
        ],
        "Lateral": [
            "Elevaciones laterales",
        ],
        "Posterior": [
            "Pájaros (rear delts)",
            "Face pulls",
        ],
    },
    Legs: {
        "Cuádriceps": [
            "Sentadillas",
            "Prensa de pierna",
            "Zancadas",
        ],
        "Isquiotibiales": [
            "Peso muerto rumano",
            "Curl femoral",
        ],
        "Glúteos": [
            "Hip thrust",
            "Puente de glúteo",
        ],
        "Pantorrillas": [
            "Elevaciones de talones de pie",
            "Elevaciones de talones sentado",
        ],
    },
    Core: {
        "Recto abdominal": [
            "Crunch abdominal",
            "Elevación de piernas",
        ],
        "Oblicuos": [
            "Russian twist",
            "Side plank",
        ],
        "Transverso": [
            "Plancha",
            "Dead bug",
        ],
    },
    Forearms: {
        "Flexores": [
            "Curl de muñeca con barra",
            "Farmer’s walk",
        ],
        "Extensores": [
            "Curl inverso",
            "Extensión de muñeca",
        ],
    },
};
