# comunicacionWeb

# Roles y Responsabilidades en un Equipo de Desarrollo de Software
Un equipo de desarrollo puede ser una sola persona, o 50, pero en cualquier equipo existen una serie de roles (funciones), que pueden ser identificados.
En un equipo pequeño, puede que una persona cubra múltiples roles, mientras que, en equipos más grandes, es más común tener funciones dedicadas.
Independientemente del caso, la identificación de los roles en el equipo ayudara a estructurar el mismo, y a crear conciencia de las responsabilidades. Por ejemplo, si nadie se siente responsable de probar el software, será inevitable que se encuentren errores en la versión final.
Al leer cada uno de los roles descritos aquí, piense en su equipo de desarrollo (o si el desarrollo es unipersonal, piense en usted mismo), y evalué como son tratadas dentro de su equipo las distintas responsabilidades descriptas.

# El Cliente
Se puede pensar que tratar al cliente como parte del equipo de desarrollo es extraño, pero en realidad, no lo es: El cliente es un factor importante en el éxito de un proyecto, tanto como cualquier otro miembro del equipo, por eso es importante contar con la participación activa del cliente dentro del proyecto.
También es importante entender quién es en realidad “El Cliente”. Tanto si se desarrolla software para clientes actuales, como si se desarrolla para uno mismo, o para la propia empresa u organización, siempre hay un rol de cliente. El cliente, es en esencia, quien pone en marcha el proyecto, paga las cuentas, o define el resultado final. Aun si no se tiene literalmente un “cliente”, es bueno entender que aun así existe un rol “cliente” en su proyecto. Esto puede ayudar a evitar confusiones. Si hay varias personas diciendo que características se necesitan, hay que asegurarse de que exista algún responsable de tomar las decisiones cuando estos requisitos sean contradictorios.

# El Analista
El analista es alguien que es responsable de entender las necesidades del cliente, y asegurarse de que la solución que está siendo desarrollada se ajusta a esas necesidades.
Las actividades típicas de un analista incluyen la licitación de requisitos, reuniones con clientes y la redacción de especificaciones funcionales.
Incluso si un proyecto es demasiado pequeño para escribir un verdadero documento de especificación, la comprensión de las necesidades del cliente es un trabajo importante, dado que a menudo el éxito de un proyecto de desarrollo depende de que tan cerca esta la solución desarrollada de las expectativas del cliente.

# El Arquitecto de Software
El papel del arquitecto de software es traducir los requisitos, tal como se define por el analista, en una solución técnica. Él puede crear un diseño técnico, o simplemente algunos bocetos a mano alzada, de cómo el sistema va a estar estructurado. En cualquier caso, es la responsabilidad del arquitecto a pensar en el sistema antes de que se desarrolle. Si se hace bien, durante la fase de diseño que se abordaran correctamente todos los problemas que se enfrenten en el desarrollo de la solución.
A menudo hay muchas maneras de lograr algo. El arquitecto de una aplicación es el que decide que camino tomar, en base a la arquitectura global que ha elegido. Cuando el desarrollo se ha iniciado, es responsabilidad del arquitecto realizar un seguimiento del desarrollo, para ver si todavía se mantiene en consonancia con el diseño general.

# El Arquitecto del Sistema
Al igual que el arquitecto de software, el Arquitecto del Sistema es responsable de pensar el sistema antes de construirlo. Así como el arquitecto de software es responsable para el software, un arquitecto del sistema es responsable del hardware. Muchas aplicaciones ejecutan completamente en un único servidor. Muchos otros sin embargo se ejecutan en grupos de servidores, con servidores dedicados de bases de datos, servidores web y balanceadores de carga. Un arquitecto del sistema tiene en cuenta los requisitos de rendimiento y disponibilidad, el número de usuarios/visitantes, etc. Y en base a esto, diseña una infraestructura de servidores y una red.

# El Desarrollador de Software (y la Documentacion de Código)
El desarrollo efectivo de una aplicación es hecho por los desarrolladores del equipo. Pero un desarrollador tiene más responsabilidades que solo escribir código. Él es a menudo el responsable de hacer el seguimiento de su propio progreso, e informar al jefe de proyecto de los problemas a los que se enfrenta. Él es también quien implementa las ideas del arquitecto, y como tal, puede tener que discutir las (in)posibilidades de la implementación con el arquitecto.
Una responsabilidad importante es documentar el código. Mientras que muchos desarrolladores piensan que la documentación es algo que será realizado mejor por alguien más, esta es en realidad una responsabilidad importante del desarrollador.
La Documentación de Código tiene como objetivo el explicar a otros desarrolladores aquellas cosas que no resulten evidentes o claras a partir de la lectura del propio código en sí. Se debe dar una idea de porque un fragmento de código es de la manera que es. El desarrollador es el único que conoce los pensamientos e ideas detrás del código que escribe, lo cual convierte en el candidato perfecto para documentarlo.

# El Jefe de Desarrolladores
Un desarrollador líder, que tiene las mismas responsabilidades que los otros desarrolladores, pero que también tiene añadidas algunas más. Un desarrollador líder debe entrenar a los otros desarrolladores, y ayudarles a resolver los problemas que puedan enfrentar. Este desarrollador, que suele ser el miembro del equipo más experimentado, también será capaz de asegurarse de que la ejecución sigue de cerca al diseño planteado, y no se dé lugar a lo que se denomina “invasión de características” durante el desarrollo. El desarrollador líder tiene una gran influencia en la calidad del código.

# El Diseñador Grafico
“Lo de dentro de lo que cuenta.”, es tan cierto, como que también la percepción de los usuarios depende mucho de la mirada y la sensación que le produce una aplicación o sitio web. No importa lo buena que la aplicación sea, si la interfaz es inconsistente, se sentirá menos robusto.
Es importante reconocer el papel del diseñador en un proyecto. Es bueno tener alguien encargado de la disposición general de una aplicación. Esto puede ir desde el diseño completo de la interfaz de usuario, hasta definir solo algunas directrices de interfaz de usuario que los desarrolladores deban cumplir.
Incluso si el diseño está determinado por los desarrolladores, es una responsabilidad importante crear un diseño consistente en toda la aplicación.

# El Tester
Las pruebas son una parte importante para asegurar que el software funciona de la manera que debería. El papel de ‘tester’ se realiza a menudo por los desarrolladores para los aspectos técnicos y los usuarios para los aspectos funcionales. Un problema que surge de hacer a los desarrolladores probar su propio código es que, no importa lo bueno que sean, se ven influidos por la forma de su código fue creado. Cuando se prueba, se tendrá en cuenta esas mismas situaciones que ya se tuvieron en cuenta a la hora de escribirlo.
Si se prueba código de otra persona, se puede pensar en escenarios que la otra persona no los pensó. Así que incluso si no se tiene un equipo de Testers dedicado, es una buena idea que cada desarrollador pruebe código de otro desarrollador, en lugar del suyo propio.

# El Gerente del Proyecto
Un gerente de proyecto tiene muchas responsabilidades. Es responsable de la planificación del proyecto, de mantener el proyecto dentro del presupuesto, y de la solución de problemas. En resumen, el resuelve cualquier problema que ponga en peligro el progreso del proyecto.
Muchas de las tareas del gerente del proyecto tienen que ver con la comunicación, la comunicación al cliente sobre el progreso del proyecto y la comunicación con todos los miembros del equipo. Incluso en los proyectos de desarrollo que no cuentan con un gerente de proyecto, es conveniente asignar el rol de gerente de proyecto a alguien, para que quede claro quién es responsable de la ejecución del mismo.

# El Administrador de Cuentas
Si usted desarrolla proyectos para clientes, sus proyectos pueden beneficiarse de las funciones de un Administrador de Cuentas. Un administrador de cuentas cultiva la relación con el cliente. Aunque la gestión de proyectos y administración de cuentas se hace a menudo por la misma persona dentro de un proyecto, hay situaciones en las que ayuda a dividir estos roles. Un administrador de cuentas puede mantener una relación más independiente con el cliente, y avisar si el cliente no está contento con la forma en que se ejecuta el proyecto por parte del gerente del proyecto.
Al separar los roles de Administrador de cuentas, y Gerente de proyecto, también lograremos evitar conflictos de interés. El director del proyecto puede concentrase y proyectar lo mejor de sus habilidades para el funcionamiento del proyecto, mientras que el administrador de cuentas puede tomarse el trabajo de reconocer oportunidades comerciales.

# El Administrador de Sistemas
El sistema en que la aplicación será instalada es creado por un administrador del sistema.
Se arman los servidores, se instala el sistema operativo, un servidor web, PHP, una base de datos y cualquier software adicional que se requiera.
Incluso antes de que el proyecto se haya terminado, un administrador del sistema puede tener que construir los entornos de desarrollo y ambientes de prueba.
Mas adelante en el proyecto, se ocupará de mantener los sistemas operando.

# El Administrador de Código
El Código es importante y debe ser tratado como tal, el código necesita ser gestionado. Si varios de los desarrolladores están trabajando en conjunto, el código que escriben debe integrarse en algún momento, independientemente del sistema de control de versiones utilizado.
Además, cuando hayan terminado, el proyecto debe ser implementado. La implementación del proyecta significa tomar el código y desplegarlo en el servidor. Aunque usualmente no hay una persona manejando esto, es importante identificar dicho rol.

# El Capacitador
Cuando un proyecto se haya completado, los usuarios pueden necesitar ser capacitados, en particular si en el proyecto se ha desarrollado una aplicación.
No es común capacitar a los usuarios de un sitio web, pero a menudo hay un back-end que los administradores tendrán que aprender a usar.
El Capacitador relaciona las soluciones que se han creado con el usuario final.
Una importante responsabilidad del Capacitador es explicar como la aplicación resuelve el problema del cliente y, como tal, juega un papel importante en asegurar que las expectativas del cliente sobre el software están en línea con lo que ha sido creado.