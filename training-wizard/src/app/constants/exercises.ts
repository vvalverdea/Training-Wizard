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
    7: {
        title: 'Press francés con barra Z',
        image: 'assets/exercises/pressfrances.gif',
        description: 'El press francés se realiza acostado en un banco plano, sujetando una barra o mancuernas con un agarre cerrado y los brazos extendidos hacia arriba. Desde esa posición, flexiona los codos llevando la barra por detrás de la cabeza o hacia la frente, manteniendo los codos lo más juntos posible y fijos durante todo el movimiento. Evita abrirlos hacia los lados y no arquees la espalda. Una vez alcanzado el punto más bajo del recorrido, extiende los brazos de forma controlada hasta volver a la posición inicial, contrayendo los tríceps al final del movimiento. La clave está en mantener una técnica estricta, con un movimiento controlado en la bajada y una extensión potente en la subida.',
    },
    8: {
        title: 'Extensiones con mancuerna tras la cabeza',
        image: 'assets/exercises/trasnuca.gif',
        description: 'Se realizan flexionando y extendiendo el codo por detrás de la cabeza, manteniendo el torso firme y los codos lo más cerca posible de la cabeza. Es importante evitar arquear la espalda, abrir los codos hacia afuera y realizar un recorrido incompleto.',
    },
    9: {
        title: 'Press cerrado en banco plano',
        image: 'assets/exercises/presscerrado.gif',
        description: 'Baja la barra hacia el pecho de forma controlada mientras inhalas. La clave para maximizar la estimulación del tríceps es evitar que los codos se abran durante la subida y la bajada de la barra. Por lo tanto, mantén los codos cerca del torso y busca la conexión mente-músculo apretando los tríceps durante el ejercicio. Desde esa posición, haz una pausa de un segundo y sube la barra con un movimiento explosivo hacia arriba. Haz otra pequeña pausa en la parte alta del ejercicio y vuelve a bajar la barra hacia la posición inicial de forma controlada mientras exhalas. Al igual que con todos los ejercicios, la técnica y el tempo son muy importantes y hay que tenerlos en cuenta. Para el tempo en el press de banca con agarre cerrado, baja la barra de forma lenta y controlada durante unos 2-3 segundos, haz una pausa de unos 2 segundos en la parte baja del ejercicio y empuja la barra de forma explosiva hacia arriba mientras aprietas los tríceps al mismo tiempo. En resumen, realiza la fase excéntrica lenta, haz una pausa en la parte baja y realiza la fase concéntrica explosiva.'
    },
    10: {
        title: 'Fondos en paralelas',
        image: 'assets/exercises/fondos.gif',
        description: 'Colocarse en un aparato de fondos con un agarre relativamente estrecho (no más ancho que la anchura de los hombros). Comenzar con el cuerpo vertical y los brazos extendidos. Flexionar los brazos lentamente hasta bajar el cuerpo, manteniendo una postura vertical durante todo el movimiento. Cuando los codos alcancen aproximadamente los 90 grados, empujar hacia arriba hasta la posición de inicio.'
    },
    11: {
        title: 'Press cerrado con barra',
        image: 'assets/exercises/presscerradoconbarra.gif',
        description: 'Túmbate en un banco plano, inclinado o declinado, sujeta la barra con agarre cerrado al ancho de hombros y brazos extendidos sobre el pecho; baja la barra lentamente 2-3s hacia el pecho manteniendo codos pegados al torso e inhalando, pausa 2s abajo, luego empuja explosivamente hacia arriba apretando tríceps, pausa un instante arriba y repite con control.'
    },
    12: {
        title: 'Extensión de tríceps en polea con cuerda',
        image: 'assets/exercises/tricepsextensioncola.gif',
        description: 'De pie con pies a la anchura de los hombros, agarre la cuerda de la polea alta con codos a 90° y pegados al cuerpo, espalda recta; contraiga tríceps extendiendo los codos hasta llevar las manos a los muslos al exhalar, moviendo solo antebrazos, y regrese lentamente a la posición inicial inhalando sin golpear las placas.'
    },
    13: {
        title: 'Extensiones de tríceps en polea con barra recta',
        image: 'assets/exercises/tricepsextensioncola.gif',
        description: 'De pie con pies a la anchura de los hombros, agarre la cuerda de la polea alta con codos a 90° y pegados al cuerpo, espalda recta; contraiga tríceps extendiendo los codos hasta llevar las manos a los muslos al exhalar, moviendo solo antebrazos, y regrese lentamente a la posición inicial inhalando sin golpear las placas.'
    },
    14: {
        title: 'Press de banca con agarre estrecho',
        image: 'assets/exercises/presscerrado.gif',
        description: 'Túmbate en un banco plano, inclinado o declinado, sujeta la barra con agarre cerrado al ancho de hombros y brazos extendidos sobre el pecho; baja la barra lentamente 2-3s hacia el pecho manteniendo codos pegados al torso e inhalando, pausa 2s abajo, luego empuja explosivamente hacia arriba apretando tríceps, pausa un instante arriba y repite con control.'
    },
    15: {
        title: 'Patada de tríceps con mancuerna',
        image: 'assets/exercises/tricepkickback.gif',
        description: 'De pie o apoyado con una rodilla en un banco, sujeta una mancuerna con la palma mirando al torso y el codo pegado al costado en ángulo de 90°; extiende el brazo hacia atrás hasta que quede paralelo al suelo contrayendo el tríceps al exhalar, y regresa lentamente a la posición inicial inhalando sin mover el hombro.'
    },
    16: {
        title: 'Press inclinado con barra',
        image: 'assets/exercises/inclinebenchpressbar.gif',
        description: 'Túmbate en un banco inclinado a 30-45°, sujeta la barra con agarre un poco más ancho que los hombros y brazos extendidos; baja la barra lentamente hacia la parte superior del pecho inhalando, haz una breve pausa y empuja explosivamente hacia arriba exhalando, manteniendo los codos en un ángulo natural y la espalda apoyada en el banco.'
    },
    17: {
        title: 'Press inclinado con mancuernas',
        image: 'assets/exercises/inclinebenchpressdumbbell.gif',
        description: 'En banco inclinado a 30-45°, sujeta una mancuerna en cada mano sobre el pecho con palmas hacia adelante; baja lentamente las mancuernas a los lados del pecho inhalando, haz una pausa y empuja hacia arriba de forma explosiva exhalando, juntando ligeramente las mancuernas arriba sin golpearlas.'
    },
    18: {
        title: 'Aperturas inclinadas',
        image: 'assets/exercises/inclinefly.gif',
        description: 'En banco inclinado a 30-45°, sujeta una mancuerna en cada mano sobre el pecho con ligera flexión de codos; abre los brazos de forma controlada hacia los lados inhalando hasta sentir el estiramiento en el pecho, luego contrae el pectoral llevando las mancuernas de nuevo arriba exhalando, sin bloquear los codos.'
    },
    19: {
        title: 'Press banca plano con barra',
        image: 'assets/exercises/flatbenchpressbar.gif',
        description: 'Túmbate en banco plano con pies firmes en el suelo, sujeta la barra con agarre un poco más ancho que los hombros y brazos extendidos; baja lentamente la barra hacia el centro del pecho inhalando, haz una pausa breve y empuja explosivamente hacia arriba exhalando, manteniendo glúteos y espalda en contacto con el banco.'
    },
    20: {
        title: 'Press banca plano con mancuernas',
        image: 'assets/exercises/flatbenchpressdumbbell.gif',
        description: 'En banco plano, sujeta una mancuerna en cada mano sobre el pecho con palmas al frente; baja las mancuernas de forma controlada hacia los lados del torso inhalando, haz una pausa y empuja hacia arriba exhalando hasta extender brazos, juntando ligeramente las mancuernas arriba sin chocar.'
    },
    21: {
        title: 'Aperturas en banco plano',
        image: 'assets/exercises/flatfly.gif',
        description: 'En banco plano, sujeta una mancuerna en cada mano sobre el pecho con codos semiflexionados; abre los brazos lateralmente de forma lenta inhalando hasta sentir el estiramiento en el pecho, luego contrae los pectorales llevando las mancuernas de nuevo arriba exhalando, manteniendo siempre la ligera flexión de codos.'
    },
    22: {
        title: 'Press declinado con barra',
        image: 'assets/exercises/declinebenchpressbar.gif',
        description: 'Túmbate en banco declinado con los pies bien asegurados, sujeta la barra con agarre un poco más ancho que los hombros y brazos extendidos; baja lentamente la barra hacia la parte baja del pecho inhalando, haz una pausa y empuja explosivamente hacia arriba exhalando, controlando la trayectoria en todo momento.'
    },
    23: {
        title: 'Fondos en paralelas',
        image: 'assets/exercises/fondos.gif',
        description: 'Sujeta las barras paralelas con brazos extendidos y cuerpo ligeramente inclinado hacia adelante; desciende flexionando los codos hasta que los brazos estén paralelos al suelo inhalando, y empuja con fuerza hacia arriba exhalando extendiendo completamente los codos, manteniendo la tensión en el pecho y tríceps.'
    },
    24: {
        title: 'Dominadas agarre ancho',
        image: 'assets/exercises/pullupwide.gif',
        description: 'Sujeta la barra con un agarre más ancho que los hombros y palmas hacia adelante; comienza colgado con brazos extendidos, inhala y tira del cuerpo hacia arriba llevando el pecho a la barra, contrayendo dorsales, luego desciende de forma controlada exhalando hasta extender brazos completamente.'
    },
    25: {
        title: 'Jalón al pecho',
        image: 'assets/exercises/latpulldown.gif',
        description: 'Sentado en la máquina con rodillas fijas en el soporte, sujeta la barra con agarre ancho; tira de la barra hacia el pecho exhalando, llevando los codos hacia abajo y atrás, y vuelve lentamente a la posición inicial inhalando con control sin dejar que el peso golpee.'
    },
    26: {
        title: 'Remo con barra',
        image: 'assets/exercises/barbellrow.gif',
        description: 'De pie con pies al ancho de hombros, sujeta la barra con agarre prono; inclina el torso hacia adelante manteniendo la espalda recta, inhala y tira de la barra hacia el abdomen contrayendo dorsales y trapecios, luego desciende lentamente la barra exhalando sin perder la postura.'
    },
    27: {
        title: 'Remo con mancuerna',
        image: 'assets/exercises/dumbbellrow.gif',
        description: 'Apoya una rodilla y mano en un banco manteniendo la espalda recta; con la otra mano sujeta la mancuerna y deja el brazo extendido, luego tira de la mancuerna hacia la cintura exhalando, mantén la contracción un instante y baja lentamente inhalando sin girar el torso.'
    },
    28: {
        title: 'Encogimientos con barra',
        image: 'assets/exercises/barbellshrug.gif',
        description: 'De pie con pies al ancho de hombros, sujeta la barra con agarre prono frente a los muslos; eleva los hombros lo más alto posible exhalando y aprieta trapecios en la parte alta, luego baja lentamente los hombros inhalando sin flexionar los codos ni balancear el cuerpo.'
    },
    29: {
        title: 'Encogimientos con mancuernas',
        image: 'assets/exercises/dumbbellshrug.gif',
        description: 'De pie con una mancuerna en cada mano a los lados del cuerpo y palmas hacia el torso; eleva los hombros hacia arriba lo máximo posible exhalando, aprieta trapecios en la parte alta y desciende lentamente inhalando sin flexionar codos ni impulsarte con el cuerpo.'
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
    35: {
        title: 'Sentadillas',
        image: 'assets/exercises/squat.gif',
        description: 'De pie con pies al ancho de hombros, baja flexionando rodillas y caderas como si fueras a sentarte, manteniendo la espalda recta e inhalando; desciende hasta que los muslos queden paralelos al suelo y empuja hacia arriba exhalando hasta extender completamente las piernas.'
    },
    36: {
        title: 'Prensa de pierna',
        image: 'assets/exercises/legpress.gif',
        description: 'Sentado en la máquina con la espalda apoyada, coloca los pies al ancho de hombros en la plataforma; empuja extendiendo las piernas exhalando sin bloquear rodillas, luego baja la plataforma lentamente inhalando hasta un ángulo de 90° en rodillas y repite.'
    },
    37: {
        title: 'Zancadas',
        image: 'assets/exercises/lunge.gif',
        description: 'De pie con pies juntos, da un paso largo hacia adelante y baja el cuerpo flexionando ambas rodillas hasta formar ángulos de 90° inhalando; empuja con la pierna delantera hacia atrás exhalando para volver a la posición inicial y alterna con la otra pierna.'
    },
    38: {
        title: 'Peso muerto rumano',
        image: 'assets/exercises/romanian_deadlift.gif',
        description: 'De pie con barra frente a los muslos, baja el torso hacia adelante empujando caderas atrás y manteniendo la espalda recta e inhalando; desciende la barra hasta la altura de las espinillas con rodillas ligeramente flexionadas y sube exhalando contrayendo glúteos e isquios.'
    },
    39: {
        title: 'Curl femoral',
        image: 'assets/exercises/legcurl.gif',
        description: 'Tumbado boca abajo en la máquina, coloca los tobillos bajo los rodillos; flexiona las rodillas llevando los talones hacia los glúteos exhalando, aprieta un instante y desciende lentamente inhalando hasta extender completamente las piernas.'
    },
    40: {
        title: 'Hip thrust',
        image: 'assets/exercises/hipthrust.gif',
        description: 'Apoya la parte superior de la espalda en un banco y coloca una barra sobre la cadera; con pies firmes en el suelo, baja la cadera hacia el suelo inhalando y luego empuja fuerte hacia arriba exhalando hasta alinear hombros, cadera y rodillas contrayendo glúteos.'
    },
    41: {
        title: 'Puente de glúteo',
        image: 'assets/exercises/glutebridge.gif',
        description: 'Tumbado boca arriba con rodillas flexionadas y pies apoyados en el suelo, eleva la cadera exhalando hasta formar una línea recta de hombros a rodillas contrayendo glúteos, mantén un instante y baja lentamente inhalando sin apoyar completamente la cadera.'
    },
    42: {
        title: 'Elevaciones de talones de pie',
        image: 'assets/exercises/calfraise.gif',
        description: 'De pie con pies al ancho de hombros, eleva los talones lo más alto posible exhalando hasta quedar de puntillas, mantén la contracción de pantorrillas un instante y baja lentamente inhalando hasta apoyar los talones en el suelo.'
    },
    43: {
        title: 'Elevaciones de talones sentado',
        image: 'assets/exercises/seatedcalfraise.gif',
        description: 'Sentado con los pies apoyados en el suelo y una carga sobre los muslos, eleva los talones exhalando lo más alto posible contrayendo pantorrillas, mantén la posición un instante y baja lentamente inhalando hasta apoyar completamente los pies.'
    },
    44: {
        title: 'Crunch abdominal',
        image: 'assets/exercises/crunch.gif',
        description: 'Tumbado boca arriba con rodillas flexionadas y pies apoyados, coloca las manos detrás de la cabeza; eleva el tronco contrayendo abdominales exhalando sin despegar la zona lumbar del suelo y baja lentamente inhalando hasta la posición inicial.'
    },
    45: {
        title: 'Elevación de piernas',
        image: 'assets/exercises/legraise.gif',
        description: 'Tumbado boca arriba con piernas extendidas, eleva ambas piernas juntas exhalando hasta formar un ángulo de 90° sin despegar la zona lumbar del suelo, mantén un instante y baja lentamente inhalando sin que los pies lleguen a tocar el suelo.'
    },
    46: {
        title: 'Russian twist',
        image: 'assets/exercises/russiantwist.gif',
        description: 'Sentado en el suelo con rodillas flexionadas y pies ligeramente elevados, inclina el tronco hacia atrás manteniendo la espalda recta; gira el torso hacia un lado y luego al otro exhalando en cada giro, manteniendo la tensión en los oblicuos.'
    },
    47: {
        title: 'Side plank',
        image: 'assets/exercises/sideplank.gif',
        description: 'Tumbado de lado, apoya el antebrazo en el suelo alineado con el hombro y eleva la cadera hasta formar una línea recta de pies a cabeza; mantén la posición contrayendo el core y glúteos, respirando de forma controlada.'
    },
    48: {
        title: 'Plancha',
        image: 'assets/exercises/plank.gif',
        description: 'En posición boca abajo, apoya antebrazos y puntas de los pies en el suelo; mantén el cuerpo en línea recta desde la cabeza hasta los talones contrayendo el core y glúteos, respirando de forma controlada sin hundir la cadera ni arquear la espalda.'
    },
    49: {
        title: 'Dead bug',
        image: 'assets/exercises/deadbug.gif',
        description: 'Tumbado boca arriba con brazos y piernas extendidos hacia arriba, baja un brazo y la pierna contraria hacia el suelo inhalando sin despegar la zona lumbar, luego regresa a la posición inicial exhalando y alterna con el lado opuesto.'
    },
    50: {
        title: 'Curl de muñeca con barra',
        image: 'assets/exercises/wristcurlbar.gif',
        description: 'Sentado con antebrazos apoyados sobre los muslos y palmas hacia arriba, sujeta una barra; baja la barra extendiendo muñecas inhalando y luego flexiona muñecas hacia arriba exhalando contrayendo los flexores del antebrazo.'
    },
    51: {
        title: 'Farmer’s walk',
        image: 'assets/exercises/farmerswalk.gif',
        description: 'De pie con una mancuerna o pesa en cada mano a los lados del cuerpo, camina hacia adelante manteniendo la espalda recta, el core firme y los hombros retraídos, respirando de forma controlada mientras sostienes el peso.'
    },
    52: {
        title: 'Curl inverso',
        image: 'assets/exercises/reversecurl.gif',
        description: 'De pie con barra en agarre prono al ancho de hombros, flexiona los codos elevando la barra hacia los hombros exhalando, mantén un instante y baja lentamente inhalando hasta extender completamente los brazos.'
    },
    53: {
        title: 'Extensión de muñeca',
        image: 'assets/exercises/wristextension.gif',
        description: 'Sentado con antebrazos apoyados sobre los muslos y palmas hacia abajo, sujeta una barra o mancuernas; baja el peso flexionando las muñecas inhalando y luego extiende muñecas hacia arriba exhalando contrayendo los extensores del antebrazo.'
    }
};


