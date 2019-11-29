# RXJS Subjects y Angular Input/Output

Esta simple web contiene un servicio llamado SpinnerService en la que contiene observables y subjects de RXJS
La funcionalidad que tiene es cargar un spinner que este en el app.component.html desde cualquier otro componente llamando al servicio enviando un status true, el appcomponent se suscribe al observable y cuando la peticion se realiza al backend, que en este caso es un delay, vuelve a enviar un estado pero esta vez false, y el appcomponent se vuelve a suscribir y quita el spinner

Tambien tiene inputs y outputs de @angular/core 

desde un componente padre puedes pasar informacion a un componente hijo (cualquier tipo de dato string, number, array, object, etc) y el output envia un "evento" del componente hijo al componente padre

en este caso hay cards que desde el componente padre se le pasa un nombre que muestra, y desde el componente hijo, la card, le envia una señal al padre para que lo elimine al dar click a la X


readme escrito de madrugada explicado malamente espero que se entienda
cualquier pregunta t.me/osmak
