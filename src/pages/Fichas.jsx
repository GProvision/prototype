import { useState } from "react";
import Style from "../styles/pages/Fichas.module.css";
import { EyeIcon, Trash2Icon } from "lucide-react";
import { fichasData } from "../constants/data";
const Fichas = () => {
  const [data, setData] = useState(fichasData);
  const [search, setSearch] = useState({
    nro_ficha: "",
    beneficiario: "",
    nro_afiliado_dni: "",
    casa_central: "",
    optica: "",
    estado: "",
  });
  const filter = (e) => {
    e.preventDefault();
    const nro_ficha = search.nro_ficha;
    const beneficiario = search.beneficiario;
    const nro_afiliado_dni = search.nro_afiliado_dni;
    const casa_central = search.casa_central ? "Si" : "No";
    const optica = search.optica;
    const estado = search.estado;
    const filteredData = fichasData.filter((ficha) => {
      return (
        ficha.nro_ficha.includes(nro_ficha) &&
        ficha.beneficiario.includes(beneficiario) &&
        ficha.nro_afiliado_dni.includes(nro_afiliado_dni) &&
        ficha.casa_central.includes(casa_central) &&
        ficha.optica.includes(optica) &&
        ficha.estado.includes(estado)
      );
    });
    setData(filteredData);
  };
  const clear = () => {
    setData(fichasData);
  };
  return (
    <section className={Style.container}>
      <header>
        <h1>Fichas</h1>
      </header>
      <form onSubmit={filter} className={Style.form}>
        <fieldset>
          <label htmlFor="nro_ficha">Nro. Ficha</label>
          <input
            type="text"
            id="nro_ficha"
            name="nro_ficha"
            value={search.nro_ficha}
            onChange={(e) =>
              setSearch({ ...search, nro_ficha: e.target.value })
            }
          />
        </fieldset>
        <fieldset>
          <label htmlFor="beneficiario">Beneficiario</label>
          <input
            type="text"
            id="beneficiario"
            name="beneficiario"
            value={search.beneficiario}
            onChange={(e) =>
              setSearch({ ...search, beneficiario: e.target.value })
            }
          />
        </fieldset>
        <fieldset>
          <label htmlFor="nro_afiliado_dni">Nro. Afiliado / DNI</label>
          <input
            type="text"
            id="nro_afiliado_dni"
            name="nro_afiliado_dni"
            value={search.nro_afiliado_dni}
            onChange={(e) =>
              setSearch({ ...search, nro_afiliado_dni: e.target.value })
            }
          />
        </fieldset>
        <fieldset>
          <label htmlFor="optica">Óptica</label>
          <input
            type="text"
            id="optica"
            name="optica"
            value={search.optica}
            onChange={(e) => setSearch({ ...search, optica: e.target.value })}
          />
        </fieldset>
        <fieldset>
          <input
            type="checkbox"
            id="casa_central"
            name="casa_central"
            checked={search.casa_central}
            onChange={(e) =>
              setSearch({ ...search, casa_central: e.target.checked })
            }
          />
          <label htmlFor="casa_central">Casa Central</label>
        </fieldset>
        <fieldset>
          <label htmlFor="estado">Estado</label>
          <select
            id="estado"
            name="estado"
            value={search.estado}
            onChange={(e) => setSearch({ ...search, estado: e.target.value })}
          >
            <option value="">Todos</option>
            <option value="Pasado">Pasado</option>
            <option value="En proceso">En proceso</option>
            <option value="Laboratorio">Laboratorio</option>
            <option value="Revisada">Revisada</option>
          </select>
        </fieldset>
        <button type="submit">Buscar</button>
        <button type="button" onClick={clear}>
          Limpiar
        </button>
      </form>
      <ul className={Style.list}>
        {data.map((ficha) => (
          <li key={ficha.id}>
            <dl>
              <dt>Nro. Ficha</dt>
              <dd>{ficha.nro_ficha}</dd>
            </dl>
            <dl>
              <dt>Beneficiario</dt>
              <dd>{ficha.beneficiario}</dd>
            </dl>
            <dl>
              <dt>Nro. Afiliado / DNI</dt>
              <dd>{ficha.nro_afiliado_dni}</dd>
            </dl>
            <dl>
              <dt>Casa Central</dt>
              <dd>{ficha.casa_central}</dd>
            </dl>
            <dl>
              <dt>Óptica</dt>
              <dd>{ficha.optica}</dd>
            </dl>
            <dl>
              <dt>Estado</dt>
              <dd>{ficha.estado}</dd>
            </dl>
            <form onSubmit={(e) => e.preventDefault()}>
              <button type="button" className={Style.view}>
                <EyeIcon />
              </button>
              <button type="button" className={Style.delete}>
                <Trash2Icon />
              </button>
            </form>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Fichas;
