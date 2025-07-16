import React from "react";
import { User, FileText, Glasses } from "lucide-react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Pie,
  PieChart,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
} from "recharts";
import Style from "../styles/pages/Home.module.css";
const Home = () => {
  const activities = [
    { name: "Usuario 1", fichas: Math.floor(Math.random() * 30) + 10 },
    { name: "Usuario 2", fichas: Math.floor(Math.random() * 25) + 10 },
    { name: "Usuario 3", fichas: Math.floor(Math.random() * 20) + 5 },
    { name: "Usuario 4", fichas: Math.floor(Math.random() * 20) + 5 },
    { name: "Usuario 5", fichas: Math.floor(Math.random() * 15) + 5 },
  ];
  activities.push({
    name: "Usuario 6",
    fichas: 120 - activities.reduce((a, c) => a + c.fichas, 0),
  });
  const opticas = [
    { name: "Optica 1", armazones: Math.floor(Math.random() * 30) + 10 },
    { name: "Optica 2", armazones: Math.floor(Math.random() * 25) + 10 },
    { name: "Optica 3", armazones: Math.floor(Math.random() * 20) + 5 },
    { name: "Optica 4", armazones: Math.floor(Math.random() * 20) + 5 },
    { name: "Optica 5", armazones: Math.floor(Math.random() * 15) + 5 },
  ];
  opticas.push({
    name: "Optica 6",
    armazones: 120 - opticas.reduce((a, b) => a + b.armazones, 0),
  });
  return (
    <article className={Style.container}>
      <ul id={Style.data}>
        <li>
          <User />
          <dl>
            <dt>Usuarios</dt>
            <dd>10</dd>
          </dl>
        </li>
        <li>
          <FileText />
          <dl>
            <dt>Fichas de hoy</dt>
            <dd>120</dd>
          </dl>
        </li>
        <li>
          <Glasses />
          <dl>
            <dt>Armazones</dt>
            <dd>12</dd>
          </dl>
        </li>
      </ul>
      <ul id={Style.graphs}>
        <li>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={activities} width={400} height={400}>
              <XAxis dataKey="name" stroke="var(--indi-900)" />
              <YAxis stroke="var(--indi-900)" />
              <Tooltip
                wrapperStyle={{ backgroundColor: "transparent" }}
                content={<CustomTooltip />}
              />
              <Bar
                dataKey="fichas"
                fill="var(--indi-100)"
                background={false}
                enableBackground={false}
              />
            </BarChart>
          </ResponsiveContainer>
        </li>
        <li>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart data={opticas} width={400} height={400}>
              <Pie dataKey="armazones" fill="var(--indi-100)" />
              <Tooltip
                wrapperStyle={{ backgroundColor: "transparent" }}
                content={<CustomTooltip />}
              />
            </PieChart>
          </ResponsiveContainer>
        </li>
      </ul>
    </article>
  );
};

const CustomTooltip = ({ payload, active }) => {
  if (active) {
    return (
      <div className={Style.tooltip}>
        <p>{`${payload[0].name} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default Home;
