agendaSmartBack
Backend de Agenda Proyect
Grupo Nro 1
Fittipaldi F. - Gimenez J. - Questa M.
El Proyecto
Utilizando una lista de tareas diarias y semanales la aplicación recomendara la siguiente tarea a realizar según el peso o valor de prioridad cargado por el usuario, permitiéndole comenzar un Sprint de tiempo preConfigurado y tener luego un descanso también configurado previamente. Además validara si la tarea fue terminada o si se debe realizar un segundo Sprint que podría ser la siguiente o volver al backlog para ser continuada más adelante El usuario podrá ingresar tareas y asignarles un peso de acuerdo que tan pronto debe terminarla.
Funcionalidades:
1.	Ingreso de Tareas para el día con prioridad:
o	El usuario podrá ingresar tareas.
o	Asignar un peso de prioridad para el día.
o	Modulo Motiv.
2.	Ingreso de Tareas para la semana con prioridad:
o	El usuario podrá ingresar tareas y asignarles un peso de prioridad para la semana.
o	Asignar un peso de prioridad para el día.
o	Modulo Motiv.
3.	Recomendación de Tareas Inteligente:
o	Las tareas ingresadas serán acomodadas según un algoritmo que le dará al usuario la capacidad de optimizar su tiempo.
4.	Sprint Timer con breaks:
o	Válida si la tarea fue terminada, permitiendo repetir o regresar al backlog.
o	Seteo de Tiempo de trabajo y de descanso.
Reglas de Negocio:
1.	Si no es Usuario (no tiene mail registrado) solo hay acceso a Home.
2.	Por cada dos tareas Motiv hay una tarea NoMotiv.
3.	Las tareas se ordenan por prioridad.
4.	Cada 3 tareas Diarias hay 1 Tarea semanal.
Rutas:
•	/
•	/api/gettareas/diarias
•	/api/settareas/diarias
•	/api/gettareas/semanales
•	/api/settareas/semanales
