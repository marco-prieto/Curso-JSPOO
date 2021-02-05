import Curso from "./clases/Curso.js" //ese js final c agrega por el tema del live server creo
import Profesor from "./clases/Profesor.js"
import Alumno from "./clases/Alumno.js"


const html = new Curso("HTML","https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",10)

const css = new Curso("CSS","https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",12)

const js = new Curso("JavaScript","https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",9)

const elem = document.getElementById("cursos")
//inerHTML sirve pa insertar elementos en el DOM'
//para insertar solo 1
/*elem.innerHTML = `
    <img src="${html.getPoster()}"/>
    <h3>${html.getNombre()}</h3>
    <span>Cantidad de clases: ${html.getClases()}</span>

`*/

//Funcion imprime un curso en el DOM recibe un objeto de tipo curso
function mostrarCurso(curso) {
    const hijo = document.createElement("div")
    hijo.classList.add("card")
    hijo.innerHTML = `
        <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="${curso.getPoster()}" alt="${curso.getNombre()}"/>
        </div>
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 class="t5 s-mb-2 s-center">${curso.getNombre()}</h3>
            <div class="s-center">
                <span class="small">Cantidad de clases: ${curso.getClases()}</span>  
            </div>         
        </div>        
    `
    elem.appendChild(hijo)
}

/* mostrarCurso(html)
mostrarCurso(css)
mostrarCurso(js) */

const formulario = document.getElementById("formCursos")
//ese e es el evento
formulario.addEventListener("submit",e => {
    e.preventDefault()
    const target = e.target
    /* console.log(target.nombreCurso.value)    
    console.log(target.posterCurso.value)    
    console.log(target.clasesCurso.value)  */   
    const curso = new Curso(target.nombreCurso.value,target.posterCurso.value,target.clasesCurso.value)
    mostrarCurso(curso)
    console.log("ejecucion")
})

//OTRA FORMA este this funciona como el target
/* formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(this.nombreCurso); 
 }); */

 //OTRA ADEMAS Xd
/*  formulario.addEventListener('submit', function( event ) {
    event.preventDefault();
    const { nombreCurso, posterCurso, clasesCurso } = event.target;
    const curso = new Curso(
        nombreCurso.value, 
        posterCurso.value, 
        clasesCurso.value
    );
    mostrarCurso( curso );
 }); */

 const profe = new Profesor("Mathew","Richi","Mati@gmail.com",true,["React","HTML"],12)
 console.log(profe)

 const alumno1 = new Alumno("Fredy","Guty","Fredinchi@gmail.com",true,["JS,CSS"])
 const alumno2 = new Alumno("Maria","Flores","Maria@gmail.com",true,["JS,HTML"])

 //SI hicieras eso en las 2 impresiones solo saldria el ultimo agregado
js.setInscritos([...js.getInscritos(),alumno1])
console.log(js)
js.setInscritos([...js.getInscritos(),alumno2])
console.log(js)