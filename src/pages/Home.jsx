import React from "react";
import { User, FileText, Glasses } from "lucide-react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";
import Style from "../styles/pages/Home.module.css";

// Custom color palette using CSS variables
const COLORS = {
  primary: "var(--indi-900)",
  secondary: "var(--indi-700)",
  accent: "var(--indi-500)",
  background: "transparent",
  text: "var(--indi-900)",
  hover: "var(--indi-100)",
};

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

  // Custom shape for Bar with hover effect
  const CustomBar = (props) => {
    const { fill, x, y, width, height } = props;
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={fill}
          rx={4}
          ry={4}
          style={{
            transition: "all 0.3s ease",
          }}
        />
      </g>
    );
  };

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
        <li className={Style.chartContainer}>
          <h3>Actividades por Usuario</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={activities}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              barCategoryGap={15}
            >
              <XAxis
                dataKey="name"
                tick={{ fill: COLORS.text, fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: "var(--indi-200)" }}
              />
              <YAxis
                tick={{ fill: COLORS.text, fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: "var(--indi-200)" }}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
              />
              <Bar
                dataKey="fichas"
                shape={<CustomBar />}
                fill={COLORS.primary}
                activeBar={{
                  fill: COLORS.hover,
                  stroke: COLORS.hover,
                  strokeWidth: 2,
                  radius: [4, 4, 0, 0],
                }}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </li>
        <li className={Style.chartContainer}>
          <h3>Fichas por Óptica</h3>
          <ResponsiveContainer
            width="100%"
            height="100%"
            style={{ outline: "none", border: "none" }}
          >
            <PieChart style={{ outline: "none", border: "none" }}>
              <Pie
                data={opticas}
                innerRadius={70}
                outerRadius={95}
                paddingAngle={5}
                dataKey="armazones"
                labelLine={false}
                label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                animationBegin={0}
                animationDuration={1000}
                animationEasing="ease-in-out"
                isAnimationActive={true}
                activeIndex={opticas.map((_, index) => index)}
                activeShape={{
                  outerRadius: 100,
                }}
              >
                {opticas.map((entry, index) => {
                  const color = [
                    "var(--indi-900)",
                    "var(--indi-700)",
                    "var(--indi-500)",
                    "var(--indi-100)",
                  ][index % 4];

                  return (
                    <Cell
                      key={`cell-${index}`}
                      fill={color}
                      style={{
                        transition: "all 0.3s ease-in-out",
                        cursor: "pointer",
                        outline: "none",
                        border: "none",
                      }}
                    />
                  );
                })}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div
                        style={{
                          backgroundColor: "white",
                          padding: "8px 12px",
                          border: "1px solid var(--indi-200)",
                          borderRadius: "6px",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                          fontSize: "14px",
                          color: "var(--indi-900)",
                          textAlign: "center",
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            fontWeight: 600,
                            color: "var(--indi-600)",
                          }}
                        >
                          {payload[0].name}
                        </p>
                        <p style={{ margin: "4px 0 0 0" }}>
                          <span style={{ color: "var(--indi-500)" }}>
                            Cantidad:{" "}
                          </span>
                          <strong>{payload[0].value}</strong>
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fontSize: "14px",
                  fill: "var(--indi-900)",
                  fontWeight: 500,
                }}
              >
                Total: {opticas.reduce((sum, item) => sum + item.armazones, 0)}
              </text>
            </PieChart>
          </ResponsiveContainer>
        </li>
      </ul>
    </article>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "white",
          padding: "10px",
          border: "1px solid var(--indi-200)",
          borderRadius: "6px",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          fontSize: "14px",
          color: "var(--indi-900)",
        }}
      >
        <p style={{ margin: 0, fontWeight: 600 }}>{`${label}`}</p>
        <p style={{ margin: "5px 0 0 0" }}>
          <span style={{ color: "var(--indi-500)" }}>Total:</span>{" "}
          {payload[0].value} {payload[0].name}
        </p>
      </div>
    );
  }
  return null;
};

export default Home;
