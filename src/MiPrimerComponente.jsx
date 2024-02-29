function MiPrimerComponente() {
    return ( 
        <><header id="header">
            <section id="encabezado">
                <div id="encabezadoH1">
                    <h1>To-Do List</h1>
                </div>
                <div id="encabezadoImg">
                    <img id="modoNoche" src="https://www.martinmikulik.com/lunas.png" alt="" />
                </div>
            </section>
        </header><section id="principal">
                <div id="cajas1">
                    <div id="tareaIndividualWrapper"></div>
                    <div id="frases" class="frases">
                        <hr class="Linea" />
                        <h6 id="frasesRandom"></h6>
                        <br />
                        <hr class="Linea" />
                    </div>
                    <div id="boton" class="boton">
                        <div id="floatingButton" class="floatingButton">+</div>
                    </div>
                </div>
    <div id="cajas2">
        <div class="tarea">
          <h6>Que tenes que hacer máquina?</h6>
          <div class="tareaInputs">
            <form id="formTareas" action="">
              <input
                class="inputTarea"
                type="text"
                title="tarea"
                id="tarea"
                placeholder="Tarea"
                maxlength="45"
              />
              <br />
              <input
                class="inputDescripcion"
                id="descripcion"
                type="text"
                placeholder="Descripción"
              />
              <br />
              <select
                class="categoria"
                name="categoria"
                aria-placeholder="Tipo"
                id="categoria"
              >
                <option value="">Elegí una categoría</option>
                <option value="Domesticas">Domésticas</option>
                <option value="Laborales">Laborales</option>
                <option value="Joda">Joda</option>
              </select>
              <br />
              <button type="button" id="botonTarea" class="botonTarea">
                Añadir Tarea
              </button>
            </form>
          </div>
        </div>
      </div>
      <div id="cajas3">
        <div id="primeraParte"></div>
        <div id="boton" class="boton">
          <div id="floatingButton2" class="floatingButton">+</div>
        </div>
      </div>
        </section>
        <footer id="footer">
      <ul class="finalList">
        <li class="listItem">Terms of Service</li>
        <li class="listItem">Copyright</li>
        <li class="listItem">Contact Us</li>
        <li class="listItem">© Martin Ivan Mikulik 2024</li>
      </ul>
    </footer>
        </>
     );
}

export default MiPrimerComponente;